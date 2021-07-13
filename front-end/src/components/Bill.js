import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import LoadingBox from './LoadingBox.js';
import MessageBox from './MessageBox.js';
import { listBills } from '../actions/billsActions.js';

export default function Bill(props) {

  // const { bill } = props;
  const dispatch = useDispatch();
  const billList = useSelector(state => state.billList)
  const {loading, error, bills} = billList

  useEffect(()=>{
      dispatch(listBills())
  }, [])

    return (
        <div>
          {loading? <LoadingBox></LoadingBox>
          :
          error?<MessageBox variant="danger">{error}</MessageBox>
          :
          <div>
            <h2>Bill Master</h2>
            
          <table className="table">
            <thead>
              <tr>
                <th>Bill</th>
                <th>Name</th>
                {/* <th>Mobile</th>
                <th>Total Amount</th>
                <th>Balance</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                  {
                   bills.map((bill) =>(
                    <tr key={bill._id}>
                    <td>{bill.billID}</td>
                    <td>{bill.customerName}</td>
                    {/* <td>{bill.contact}</td>
                    <td>{bill.totalAmount}</td>
                    <td>{bill.receivedAmount}</td> */}
                    {/* <td>1000</td> */}
                    <td><button > <Link to={`/bill/${bill._id}`}>Explore</Link></button></td>
                  </tr>    
                )

                  
                )
              }
  
    </tbody>
  </table>
    </div>
          }
     
        </div>
    )
}
