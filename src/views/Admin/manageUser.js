import React from 'react'
import DashLayout from "../../components/dashLayout";
import UserTable from '../../components/admin/userTable';


const ManageUser = () => {
  return (
    <DashLayout menuSelectorIndex='2'>
        
        <UserTable></UserTable>
   </DashLayout>
  )
}

export default ManageUser;