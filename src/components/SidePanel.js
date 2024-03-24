import React from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VpnLockIcon from '@mui/icons-material/VpnLock';

const SidePanel = () => {
  return (
    <div className='shadow-lg'>
        <div className='text-center py-5'>
            <h4 className='font-bold'>Over 12,000 Reader visit our blog per day. </h4> 
            <div className='flex gap-2 flex-wrap justify-evenly mt-3'>

                <div className='cursor-pointer'>
                    <EditNoteIcon/>
                    <p>Start Writing</p>
                </div>
                <div className='cursor-pointer'>
                    <ShoppingCartIcon/>
                    <p>Create an ecommerce site</p>
                </div>
                <div className='cursor-pointer'>
                    <VpnLockIcon/>
                    <p>Cyber Security Courses</p>
                </div>
                
                
            </div>  
        </div> 
    </div>
  )
}

export default SidePanel