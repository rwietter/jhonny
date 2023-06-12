import { Login } from 'domains/admin/signin';
import React from 'react';



const Admin: React.FC = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-slate-100'>
      <Login />
    </div>
  )
}

export default Admin;
