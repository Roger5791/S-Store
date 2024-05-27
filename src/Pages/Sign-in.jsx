import { SignIn } from "@clerk/clerk-react"
import signInImg from '../Assets/signIn.jpg'

import '../CSS/Sign-in.css'

export default function SignInPage() {
  return (

    <section className="sign-in-con">

    <div className="sign-left">
     { /* <div className="sign-img">
      <img src={signInImg} alt="" />
  </div> */}
    </div>
    
    <div className="sign-right">
    <SignIn  appearance={{
      elements: {
        formButtonPrimary: {
          fontSize: 14,
          textTransform: "none",
          
        },
      },
    }}  path="/sign-in"  signUpUrl="/sign-up" />
    </div>
    
  
    </section>
  )
}