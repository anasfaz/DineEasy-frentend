import { Outlet } from "react-router-dom"
import { MobileNavigatio } from "../../components/navbar/MobileNavigatio"
import { Navbar } from "../../components/navbar/Navbar"




const HomeLayout = () => {
    return (
        <>
            <Navbar />
            
            <Outlet/>
            
            <MobileNavigatio/>
        </>
    )
}


export default HomeLayout