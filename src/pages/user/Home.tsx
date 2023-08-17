import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Navbar } from '../../components/navbar/Navbar'
import { MobileNavigatio } from '../../components/navbar/MobileNavigatio'
import StaticCarousel from '../user/StaticCarousel.tsx'
import { Card } from '../../components/card/Card.tsx'
import { getAllCategory } from '../../api/admin.ts'
import { Outlet, useLoaderData } from 'react-router-dom'
import { FoodCard } from '../../components/card/FoodCard.tsx'
import { Link } from 'react-router-dom'

// import { FoodCard } from '../../components/card/foodCard.tsx'
function Home() {
  // const isDesktopOrLaptop = useMediaQuery({
  //     query: '(min-width: 769px)'
  // })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const [category, setCategory] = useState([])
  const  {data}  = useLoaderData()
  console.log(data)
  useEffect(() => {
    setCategory(data)
  }, [data])

  return (
    <div>
      
      <StaticCarousel/>
      <Card data={category} />
      <div className='text-lg font-bold text-left text-[#2e3a4d] w-[85%] pt-8 pb-1 px-4'>What would you like to order?</div>
      <div className="w-full grid grid-cols-[repeat(2,1fr)] grid-rows-[repeat(1,1fr)] gap-x-3 gap-y-3 overflow-y-scroll overflow-x-hidden p-4 ">
        {category.map((data) => (
          <Link to={`menu/${data?._id}`} >
          <div 
            key={data?._id}
            className="h-[211px] relative rounded-xl sm:h-[211px] xs:h-[211px] md:h-[211px] cursor-pointer"
          >
            <div className="w-full h-[211px] relative inline-block rounded-xl ">
              <img
                className=" object-cover w-full h-[211px] block rounded-xl border-none align-middle "
                src={data?.url}
              />
              <div className="absolute w-full leading-[1.2] overflow-hidden whitespace-pre-line p-3.5 bottom-0 rounded-lg">
                  <span className=' text-white font-bold text-xl'>{data?.name}</span>
              </div>
            </div>
            </div>
            </Link>
        ))}
      </div>

      {/* <FoodCard/> */}

    </div>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export const homeDataLoader = async () => {
  return await getAllCategory()
}

export default Home
