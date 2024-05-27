import { SignUp } from "@clerk/clerk-react"


import '../CSS/Sign-in.css'

export default function SignUpPage() {
  return (
  <section className="sign-in-con">

    <div className="sign-left">
     { /* <div className="sign-img">
      <img src={signInImg} alt="" />
  </div> */}
    </div>
    
    <div className="sign-right">
    <SignUp  appearance={{
      elements: {
        formButtonPrimary: {
          fontSize: 14,
          textTransform: "none",
          
        },
      },
    }}  path="/sign-up" signInUrl="/sign-in" />
    </div>
    
  
    </section>
  )
}