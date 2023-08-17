import { Link, Outlet } from 'react-router-dom'
import { SideBar } from '../../components/sidebar/SideBar'
import { AdminNavbar } from '../../components/navbar/AdminNavbar'
// import { Sidebar } from "../../components/sidebar/Sidebar"

export const AdminHome = () => {

  return (
    
     <main className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
      <section className="bg-white rounded">
        <div className="container px-6 py-0 mx-auto ">
        <Outlet/>
        </div>
        </section>
      
     </main>
        
      
    
  )
}
