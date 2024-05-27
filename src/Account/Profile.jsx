import React from 'react'
import { useUser } from "@clerk/clerk-react";
import { toast } from 'react-toastify';

const Profile = () => {

  const { user } = useUser();
  

  const updateUser = async () => {
    const firstName = document.querySelector('.firstName')
    const lastName = document.querySelector('.lastName')
    const profileImage = document.querySelector('.profileImg').files[0];
    await user.update({
      firstName: firstName.value,
      lastName: lastName.value,
    });

    await user.setProfileImage({
      file:profileImage,
    })
    toast.success('Details Updated')

    await user.reload();
  };


  return (
    <div className="dash">
    <div className="account-title">
        
        <h4>Update Profile</h4>
       
    </div>
    <div className="tab-body">
                <form action="" className="form grid">
                  <input type="text" placeholder="First Name" className="form-input firstName" />
                  <input type="text" placeholder="Last Name" className="form-input lastName" />
                  <p>Profile Image</p>
                  <div className='flex'>
                  <input type="file" placeholder="Image" className="profileImg" />
                  <img src={user.imageUrl} alt="" className='profile-img'/>
                  </div>

                  <div className="form-btn">
                    <button type="button" onClick={updateUser} className="btn checkout-btn" id="updateBtn">Save</button>
                  </div>
                </form>
              </div>
</div>
  )
}

export default Profile