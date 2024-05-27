import React, {useState } from 'react'

import '../CSS/Account.css'

import { FaShoppingBag } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

import { MdLogout } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import Dashboard from '../Account/Dashboard';
import Profile from '../Account/Profile';
import OrderItems from '../Account/OrderItems';
import { useClerk, useUser } from '@clerk/clerk-react';




const Account = () => {
  const {signOut} = useClerk()

    const [activeAccount, setActiveAccount] = useState('dashboard')

    const { isLoaded, user } = useUser();

    if (!isLoaded) {
      // Handle loading state however you like
      return null;
    }

    const reload = async () => {
      await user.reload();
    }

    reload()
   

  return (
    <section className='section'>

    <div className="account-con">
    
    <div className="account-left">
        <ul className='account-links'>
            <li className={`${activeAccount==='dashboard' ? 'active-acc' : ''}`} onClick={()=> setActiveAccount('dashboard')}><span><MdDashboard/></span>Dashboard</li>

            <li className={`${activeAccount==='orders' ? 'active-acc' : ''}`} onClick={()=> setActiveAccount('orders')}><span><FaShoppingBag/></span>Orders</li>

            <li className={`${activeAccount==='profile' ? 'active-acc' : ''}`} onClick={()=> setActiveAccount('profile')}><span><FaUserAlt/></span>Update Profile</li>

           {/* <li className={`${activeAccount==='security' ? 'active-acc' : ''}`} onClick={()=> setActiveAccount('security')}><span><FaKey/></span>Security</li> */}

            <li className={`${activeAccount==='logout' ? 'active-acc' : ''}`} onClick={()=> {setActiveAccount('logout'); signOut({ redirectUrl: '/' }); localStorage.clear() }}><span><MdLogout/></span>Logout</li>
        </ul>
    
    </div>

    <div className="account-right">

        <div className={`dashboard ${activeAccount==='dashboard' ? 'acc-show' : ''}`}>
        <Dashboard  />
        </div>

        <div className={`profile ${activeAccount==='profile' ? 'acc-show' : ''}`}>
        <Profile  />
        </div>

        <div className={`profile ${activeAccount==='orders' ? 'acc-show' : ''}`}>
        <OrderItems />
        </div>

   
    </div>

    </div>

    </section>
  )
}

export default Account