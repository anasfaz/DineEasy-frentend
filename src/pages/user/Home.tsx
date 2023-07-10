import { useMediaQuery } from 'react-responsive'
import { Navbar } from '../../components/navbar/Navbar'
import { MobileNavigatio } from '../../components/navbar/MobileNavigatio'
import StaticCarousel from '../user/StaticCarousel.tsx'
export const Home = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 769px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <>
    {isDesktopOrLaptop&&<Navbar/>}
      <StaticCarousel/>
      
      {isTabletOrMobile&& <MobileNavigatio/>}
        </>
    )
}



