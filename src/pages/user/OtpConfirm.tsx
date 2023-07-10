import './otp.module.css'
import { useState } from 'react'

import OtpInput from 'otp-input-react'
import{CgSpinner} from 'react-icons/cg'

export const OtpConfirm = () :JSX.Element=> {
    const [otp, setOtp] = useState('')
    const [loading,setLoading] =useState<boolean>(false)
    const handleChange=(otp:string)=>setOtp(otp)
    return (
        <>
            <OtpInput
                value={otp}
                onChange={setOtp}
                OTPLength={6}
                otpType="number"
                disabled={false}
                autoFocus
                className='otp-container'
            > </OtpInput>
            <button className='bg-orange-500 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded'>
                <span>verify otp</span>
                {
                    loading&&<CgSpinner size={20} className="mt-1 animate-spin" />
                }
                
            </button>
            
        </>
    )
}