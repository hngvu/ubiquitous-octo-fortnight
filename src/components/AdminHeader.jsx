import React from 'react'
import AccountMenu from './AccountMenu'
import { useAtom } from 'jotai'
import { adminPageTitleAtom } from '../store/atoms'

const AdminHeader = () => {
  const [title] = useAtom(adminPageTitleAtom)

  return (
    <nav className='flex justify-between items-center bg-white p-4 shadow-md'>
      <div className=' text-[#18230F] space-x-16'>
        <span className='text-2xl font-bold'>Emperor Orchids</span>
        <span className=''>{title}</span>
      </div>

      <div className=''>
        <AccountMenu />
      </div>  
    </nav>
  )
}

export default AdminHeader