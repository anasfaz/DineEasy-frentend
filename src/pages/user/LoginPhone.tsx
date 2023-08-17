import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../config/firebase";

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { async } from "@firebase/util";
import { useDispatch } from 'react-redux'
import { useLocation } from "react-router-dom";

// import { toast, Toaster } from "react-hot-toast";
declare const window: any;
const LoginPhone = () => {
  
  
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  

  const Navigate=useNavigate()
  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        
        Navigate('/otp-verify')
        console.log(confirmationResult,'------------');
        
        // toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  

  return (
    <section className="bg-[#fc8019] flex  justify-center h-screen">
      <div>
        {/* <Toaster toastOptions={{ duration: 4000 }} /> */}
        <div id="recaptcha-container"> </div>
        
          <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
            <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
              Welcome  <br /> 
            </h1>
          
              <>
                <div className="bg-white text-orange-500 w-fit mx-auto p-4 rounded-full overflow-hidden">
                  <BsTelephoneFill size={30} />
                </div>
                <label
                  htmlFor=""
                  className="font-bold text-xl text-white text-center"
                >
                  Login with phone number
            </label>
            
                <PhoneInput country={"in"} value={ph} onChange={setPh} inputStyle={{width:'100%'}} />
                <button
                  onClick={onSignup}
                  className="bg-orange-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Send code via SMS</span>
                </button>
              </>
            
          </div>
    
      </div>
    </section>
  );
};

export default LoginPhone;