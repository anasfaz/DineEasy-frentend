import './otp.module.css'
import { useState } from 'react'
import { auth } from '../../config/firebase'
import { userNumberVerify } from '../../api/userServices'
import OtpInput from 'otp-input-react'
import { CgSpinner } from 'react-icons/cg'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { setLogin } from '../../redux/usersSlice.js'
import { useNavigate } from 'react-router-dom'
export const OtpConfirm = (): JSX.Element => {
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState<boolean>(false)
  //   const handleChange = (otp: string) => setOtp(otp)
  const [user, setUser] = useState(null)
  const dispatch = useDispatch()
  const Navigate = useNavigate()
  function onOTPVerify() {
    setLoading(true)
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res, '')
        const userDetails = auth.currentUser
        userDetails?.getIdToken().then(async (idToken) => {
          console.log(idToken)
          userNumberVerify(idToken).then((res) => {
            if (res?.status === 200) {
              console.log(res.data, 'data user already')
              setLoading(false)
              dispatch(
                setLogin({
                  user: res.data.user,
                  token: res.data.token,
                }),
              )
              localStorage.setItem('token', res.data.token)
              Navigate('/')
              setUser(res.data)
            } else if (res?.status === 201) {
              setLoading(false)
              Navigate('/signup')
              console.log(res.data, 'user not data')
            }
          })
        }).catch
      })
      .catch((err) => {
        console.log(err, '')
        setLoading(false)
      })
  }
  return (
    <>
      <section className="bg-[#fc8019] flex items-center justify-center h-screen">
        <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
          <div className="bg-white text-orange-500 w-fit mx-auto p-4 rounded-full">
            <BsFillShieldLockFill size={30} />
          </div>
          <label
            htmlFor="otp"
            className="font-bold text-xl text-white text-center"
          >
            Enter your OTP
          </label>
          <OtpInput
            value={otp}
            onChange={setOtp}
            OTPLength={6}
            otpType="number"
            disabled={false}
            autoFocus
            className="opt-container "
          ></OtpInput>
          <button
            onClick={onOTPVerify}
            className="bg-orange-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
          >
            {loading && <CgSpinner size={20} className="mt-1 animate-spin" />}
            <span>Verify OTP</span>
          </button>
        </div>
      </section>
    </>
  )
}
