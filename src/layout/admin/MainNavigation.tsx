import { Outlet } from "react-router-dom"
import { AdminNavbar } from "../../components/navbar/AdminNavbar"
import { SideBar } from "../../components/sidebar/SideBar"



export const MainNavigation = () => {
    return (
        <>
            <AdminNavbar />
            <SideBar />
            <main  className="p-4 md:ml-64 h-auto pt-20">
                <Outlet/>
            </main>
        </>
    )
}