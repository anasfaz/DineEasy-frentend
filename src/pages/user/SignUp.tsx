import {useState,ChangeEvent} from 'react'
import { auth } from '../../config/firebase'
import { userRegisterLogin } from "../../api/userServices.ts"
import {useDispatch} from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { setLogin } from '../../redux/usersSlice.js'

export const SignUp = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch=useDispatch()
    const [state, setState] = useState({
        name: '',
        email:''
   })
    const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value: typeof state[keyof typeof state] = event.target.value;

        setState({...state,[event.target.name]:value})
    }
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const firebaseUserDetailes = auth.currentUser;
    console.log(firebaseUserDetailes,'fire')
    
    firebaseUserDetailes?.getIdToken().then(async(idToken) => {
        const body={
            name:state.name,
            email:state.email,
            idToken,
          }
      
        const response = await userRegisterLogin(body)
        dispatch(setLogin({
            user: response.data.user,
            token:response.data.token
        }))
        localStorage.setItem("token", response.data.token)
        navigate('/')
    })
    }
    
    return (
        <>
        <div className="container mx-auto p-4 bg-white">
  <div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
    <h1 className="text-lg font-bold text-orange-500">Tell us more about yourself</h1>
    <form onSubmit={onSubmit} className="flex flex-col mt-4">
      <input onChange={onFieldChange}
        type="text"
        name="name"
        className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
        placeholder="Name"
      />
      <input onChange={onFieldChange}
        type="email"
        name="email"
        className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
        placeholder="valid email"
      />
      <button
        type="submit"
        className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-orange-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-oreng-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
      >
        submit
      </button>
      <div className="flex flex-col items-center mt-5">
        {/* <p className="mt-1 text-xs font-light text-gray-500">
          New to Here?
          <a className="ml-1 font-medium text-blue-400">Sign up now</a>
        </p> */}
      </div>
    </form>
  </div>
</div>
        </>
    )
}