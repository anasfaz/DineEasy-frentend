// import { useState, useEffect } from 'react'
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'
// import { onCaptchVerify, sendVerificationCode } from '../../config/firebase.ts'
// export const Login = () => {
//   const [phone, setPhone] = useState<string>('')
//   // useEffect(() => {
    
//   // }, [])
//   // const recaptchaContainer = document.getElementById('recaptcha-container');
//   const sentVerificationHandleEvent = (
//     event: React.MouseEvent<HTMLButtonElement>,
//   ) => {
//     onCaptchVerify(phone)
//     console.log('sentverificati')
//     event.preventDefault()

//     sendVerificationCode(phone).then(() => {
//       console.log('otp succssussfull')
//     })
//   }
//   return (
//     <>
//       <section className="bg-gray-50">
//         <div className="flex flex-col items-center justify-center px-6 py-8 sm:w-10/12 mx-auto md:h-screen lg:py-0 ">
//           <a
//             href="#"
//             className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
//           >
//             <img
//               className="w-8 h-8 mr-2"
//               src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
//               alt="logo"
//             />
//             welcome
//           </a>
//           <div className="w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-orange-400 dark:border-orange-600">
//             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                 Sign in to your account
//               </h1>
//               <form className="space-y-4 md:space-y-6" action="#">
//                 <div>
//                   <label
//                     htmlFor="e"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     phone Number
//                   </label>
//                   <div id="recaptcha-container"></div>
//                   <PhoneInput
//                     inputStyle={{ color: 'green' }}
//                     containerStyle={{ margin: '20px' }}
//                     buttonStyle={{}}
//                     dropdownStyle={{ height: '50px' }}
//                     country={'in'}
//                     value=""
//                     onChange={setPhone}
//                   />
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-start"></div>
//                   <a
//                     href="#"
//                     className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
//                   >
//                     Forgot password?
//                   </a>
//                 </div>
//                 <button
//                   onClick={sentVerificationHandleEvent}
//                   type="submit"
//                   className="w-full text-orange-600 bg-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                 >
//                   Sign in
//                 </button>
//                 <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                   Don’t have an account yet?{' '}
//                   <a
//                     href="#"
//                     className="font-medium text-primary-600 hover:underline dark:text-primary-500"
//                   >
//                     Sign up
//                   </a>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }
