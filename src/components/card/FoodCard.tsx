import{useEffect,useState} from 'react'
import { getItems } from '../../api/admin'

export const FoodCard = () => {
    const [items,setItems]=useState([])
    useEffect(() => {
        const data = getItems()
        data.then((data) => {
            console.log(data?.data?.data,'-------------');
            setItems(data?.data?.data)
        })
    }, [])
  
  
    return (
        <section className="bg-white rounded">
          <div className="container px-6 py-0 mx-auto ">
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 min-[355px]:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
              
                          {items.map((data) => (
                           <div className=" rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
                           <div className="relative flex items-end overflow-hidden rounded-xl">
                             <img
                               src={data.url}
                               alt="wallpaper"
                             />
           
                             <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 text-sm font-medium text-white select-none">
                               {data?.isVegetarian ?(<img width="15" height="15" src="https://img.icons8.com/color/48/vegetarian-food-symbol.png" alt="vegetarian-food-symbol"/>):(<img width="15" height="15" src="https://img.icons8.com/fluency/48/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol"/>)}
                             </span>
                             <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                               <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="h-5 w-5 text-yellow-400"
                                 viewBox="0 0 20 20"
                                 fill="currentColor"
                               >
                                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                               </svg>
                               <span className="ml-1 text-sm text-slate-400">4.9</span>
                             </div>
                           </div>
                           <div className="mt-1 p-2">
                                      <h2 className="text-slate-700">{ data?.name}</h2>
                             <p className="mt-1 text-sm text-slate-400"></p>
                             <div className="mt-3 flex items-end justify-between">
                               <p>
                                 <span className="text-lg font-bold text-orange-500">
                                   ₹{data?.price}
                                 </span>
                                 {/* <span className="text-sm text-slate-400">/night</span> */}
                               </p>
                               <div className="justify-center w-16 h-9 xl:w-24">
                                 {/* <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   className="h-4 w-4 text-orange-400 group-hover:text-orange-500"
                                   viewBox="0 0 20 20"
                                   fill="currentColor"
                                 >
                                   <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                 </svg> */}
                                    <button  type="button" className="text-orange-600 w-full h-full hover:text-white border
                                     border-orenge-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300
                                     font-medium rounded text-sm  text-center  dark:border-orange-400 dark:text-orange-400 dark:hover:text-white
                                      dark:hover:bg-orange-500 dark:focus:ring-orange-500">
                                      <span className='items-center'>Add</span></button>
                               </div>
                             </div>
                           </div>
                         </div>
                       ))}

              
            </div>
          </div>
        </section>
    )
}