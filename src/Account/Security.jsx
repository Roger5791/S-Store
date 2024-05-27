import { useUser } from '@clerk/clerk-react';
import React from 'react'
import { toast } from 'react-toastify';

const Security = () => {
    const { user } = useUser();

    const update = async () => {
        const password = document.querySelector('.newPass')
        const oldPassword = document.querySelector('.oldPass')
       
        await user.updatePassword({
            currentPassword:oldPassword.value,
            newPassword:password.value,
          })
    
        toast.success('Password Updated')
    
        await user.reload();
      };


  return (
    <div className="dash">
    <div className="account-title">
        
        <h4>Update Profile</h4>
       
    </div>
    <div className="tab-body">
                <form action="" className="form grid">
                <input type="password" required placeholder="Current Password" className="form-input oldPass" />
                  <input type="password" required placeholder="New Password" className="form-input newPass" />
                  <input type="password" required placeholder="Confirm Password" className="form-input confirmPass" />

                  <div className="form-btn">
                    <button type="button" onClick={update} className="btn checkout-btn" id="updateBtn">Save</button>
                  </div>
                </form>
              </div>
</div>
  )
}

export default Security