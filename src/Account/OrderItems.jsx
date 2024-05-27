import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const OrderItems = () => {

    const [orders, setOrders] =useState([])

    const getOrders = () => {
        const FetchedWishtItems = localStorage.getItem("Orders");
        if (FetchedWishtItems) {
          const parsedWishItems = JSON.parse(FetchedWishtItems);
          
          setOrders(parsedWishItems);
        }
      };

      useEffect(() => {
        getOrders()
      }, []);

   

  return (
    <div className="dash">
        <div className="account-title">
            <h4>Orders</h4>
        </div>
        
        
        <div className="order-info">
            <table>
                <tbody>
                    <tr>
                     <th>ID</th>
                     <th>Image</th>
                     <th>Product</th>
                     <th>Status</th>
                     <th>Total</th>
                     <th>View</th>
                    </tr>  


                    {
                        orders?.map((item) => {
                            return (
                   
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td><Link to={`/details/${item.id}`}><img src={item.image} alt=""  className='order-img' /></Link></td>
                        <td><Link to={`/details/${item.id}`} className='table-title'>{item.name}</Link></td>
                        <td>Processing</td>
                        <td className='table-title'>${item.quantity * item.price}</td>
                        <td className='table-title'><Link to={`/details/${item.id}`}>Show More</Link></td>
                    </tr>

                )
            })
            }
   

                </tbody>
            </table>
        </div>
    
    </div>
  )
}

export default OrderItems