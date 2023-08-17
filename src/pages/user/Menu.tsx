import { useState, useEffect } from 'react'
import { NavLink, useLoaderData, useParams } from 'react-router-dom'
import { categoryBaseFoodItem } from '../../api/userServices'
import { categoryOnly } from '../../api/admin'
import { Link } from 'react-router-dom'
interface FoodItems {
  _id: string
  name: string
  price: string
  category: string
  isVegetarian: boolean
  imageName: string
  url: string
}
const Menu = () => {
  let { id } = useParams()
  const { data } = useLoaderData()

  // const [categoryId, setCategoryId] = useState<string>('')

  const [foodItems, setFoodItems] = useState<FoodItems[]>([])
  useEffect(() => {
    async function fetching(categoryId: string) {
      setFoodItems([])
      const result = await categoryBaseFoodItem(categoryId)
      console.log(result)

      if (!ignore) {
        setFoodItems(result?.data)
      }
    }

    let ignore = false
    fetching(id)

    return () => {
      ignore = true
    }
  }, [id])

  const addTocart = (id: string) => {
          
  }

  return (
    <div>
      <div className="cat-nav-main-menu md-pt10 md-pr15 md-pb10 w-screen flex flex-row z-[79]  overflow-x-scroll md:pr-[15px] md:pb-2.5 md:pt-2.5">
        {data.map((category) => (
          <div key={category?._id}>
            <NavLink
              to={`/menu/${category?._id}`}
              className={({ isActive, isPending }) =>
                isPending
                  ? 'bg-orange-700'
                  : isActive
                  ? 'bg-orange-700  active:text-white font-semibold rounded-[20px] active:bg-orange-600 md-text14 md-ml10 md-pb10 ml-3 whitespace-nowrap mx-1.5 px-2.5 py-1.5 md:pb-2.5 md:ml-2.5 md:text-sm'
                  : ' active:bg-orange-600cat-nav-menu-text md-text14 md-ml10 md-pb10 ml-3 whitespace-nowrap mx-1.5 px-2.5 py-1.5 md:pb-2.5 md:ml-2.5 md:text-sm'
              }
              // className="cat-nav-menu-text md-text14 md-ml10 md-pb10 ml-3 whitespace-nowrap mx-1.5 px-2.5 py-1.5 md:pb-2.5 md:ml-2.5 md:text-sm
              //  active:text-white font-semibold rounded-[20px] active:bg-orange-600"
            >
              {category.name}
            </NavLink>
          </div>
        ))}
      </div>

      {/* <div className="md:mt-[110px] pb-20">
        <div className="category-name sm:tw-w-auto md:!tw-text-left md:!tw-text-xl md:!tw-leading-7 md:!tw-font-bold text-[#2e3a4d] text-[15px] font-bold w-[70%] text-center mx-auto pt-6 pb-0 px-4 after:bottom-[-5px]">
          
        </div>
      </div> */}

      <div className="w-full">
        {foodItems.map((data) => (
          <div key={data?._id}>
            <div className=" h-full pb-5 border-b-[rgba(169,178,191,0.4)] border-b border-dashed">
              <div className="store-menu-product-item-wrap false   extra-padding flex items-stretch pt-5 pb-0 px-[15px] border-b-[unset] bg-white items-start relative grow pl-1 pr-[15px] pt-0 pb-[30px] rounded-[10px]">
                <div>
                  <div className="cursor-pointer sm:w-[60px] sm:h-[60px] bg-[#efefef] sm:mr-2.5 sm:rounded-[5px] w-[100px] h-[100px] mr-3.5 rounded-md">
                    <span>
                      <img
                        className="w-full h-full object-cover w-[60px] h-full rounded-[5px] object-cover max-h-full w-full rounded-md border-none align-middle"
                        src={data?.url}
                        alt={data?.name}
                      />
                    </span>
                  </div>
                  <div className="absolute left-5 top-5  w-3 h-3 flex items-center justify-center sm:static shrink-0 mr-[7px] mt-[5px] rounded-lg z-10 text-sm font-medium text-white select-none">
                    {data?.isVegetarian ? (
                      <img
                        width="15"
                        height="15"
                        src="https://img.icons8.com/color/48/vegetarian-food-symbol.png"
                        alt="vegetarian-food-symbol"
                      />
                    ) : (
                      <img
                        width="15"
                        height="15"
                        src="https://img.icons8.com/fluency/48/non-vegetarian-food-symbol.png"
                        alt="non-vegetarian-food-symbol"
                      />
                    )}
                  </div>
                  {/* <div className="absolute rounded-sm left-5 top-5 border w-3 h-3 flex items-center justify-center sm:static shrink-0 mr-[7px] mt-[5px] border-solid border-[#4caf50] ">
                    <div className="w-1.5 h-1.5 rounded-[50%] bg-[#4caf50]" />
                  </div> */}
                </div>
                <div className="item justify-between  item-postpaid-description flex flex-col w-full">
                  <div>
                    <div className="w-full">
                      <span className="title md-text16 md-f700 md-lh16 md:text-base md:leading-4 md:font-bold text-base block font-semibold leading-normal tracking-[0.5px] text-black text-[15px] font-medium text-black">
                        {data?.name}
                      </span>
                    </div>
                  </div>
                  <div className="items-end mb-0 flex flex-row justify-between items-center mt-2;">
                    <div className="price md-text13 md-f600  !tw-flex tw-items-center  false  text-[15px] text-[#696f76] font-medium md:font-semibold md:text-[13px] ">
                      <span className="tw-mr-8 price md-text14 md-f600 tw-mr-8 ext-[15px] text-[#696f76] font-medium">
                        ₹{data?.price}
                      </span>
                    </div>
                    <div
                      onClick={() => addTocart(data?._id)}
                      className="add-quantity-btn add-cart-non-custom-btn  shadow-[0_2px_4px_rgba(0,0,0,0.12941176470588237)] 
                  text-[15px] w-[76px] h-9 border-[0.4000000059604645px] border-solid border-[#e0e2e5]
                   text-orange-500 text-[color:var(--primary-color)] flex items-center justify-center w-[75px] h-[30px] uppercase min-w-0 text-sm
                 font-bold cursor-pointer border shadow-[0_1px_3px_rgba(0,0,0,0.12156862745098039)] rounded-md border-solid border-[#e7eced]"
                    >
                      Add
                    </div>
                    {/* {<div className="add-quantity-btn add-cart-non-custom-btn  shadow-[0_2px_4px_rgba(0,0,0,0.12941176470588237)] 
                  text-[15px] w-[76px] h-9 border-[0.4000000059604645px] border-solid border-[#e0e2e5]
                   text-black text-[color:var(--primary-color)] flex items-center justify-center w-[75px] h-[30px] uppercase min-w-0 text-sm
                 font-bold cursor-pointer border shadow-[0_1px_3px_rgba(0,0,0,0.12156862745098039)] rounded-md border-solid border-[#e7eced]">
                    
                    <div className="w-[22px] rounded-[18px_0_0_18px]  flex items-center justify-center text-[13px] font-bold m-0 md:text-black text-[color:#] ">
                    <svg
                      id="remove-24px_1_"
                      data-name="remove-24px (1)"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                    >
                      <path
                        id="Path_30170"
                        data-name="Path 30170"
                        d="M0,0H16V16H0Z"
                        fill="none"
                      />
                      <path
                        id="Path_30171"
                        data-name="Path 30171"
                        d="M14.333,12.333H5V11h9.333Z"
                        transform="translate(-1.667 -3.667)"
                        fill="var(--primary-color)"
                        stroke="var(--primary-color)"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </div>
                  <div className="md-text13 md-f700 md-pc cart-quantity-text flex-1 rounded-none flex items-center justify-center text-[13px] font-bold m-0 text-black text-[color:var(--primary-color)] ">
                    1
                  </div>
                  <div className="md-pc pointer w-[22px] rounded-[0_18px_18px_0] flex items-center justify-center text-[13px] font-bold m-0 text-black text-[color:var(--primary-color)] cursor-pointer ">
                    <svg
                      id="add-24px_3_"
                      data-name="add-24px (3)"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                    >
                      <path
                        id="Path_24"
                        data-name="Path 24"
                        d="M0,0H16V16H0Z"
                        fill="none"
                      />
                      <path
                        id="Path_25"
                        data-name="Path 25"
                        d="M14.333,10.333h-4v4H9v-4H5V9H9V5h1.333V9h4Z"
                        transform="translate(-1.667 -1.667)"
                        fill="var(--primary-color)"
                        stroke="var(--primary-color)"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </div>
                  </div>} */}
                  </div>
                </div>
              </div>
              <div className="menu-desc-parent tw-mt-15 border-0 border-b-[rgba(169,178,191,0.4)]  t-[15px]">
                <div className="menu-item-description-container postpaid-description  with-image-decription w-full bottom-0 relative left-[-5px] mb-0 pt-[5px] pb-0 px-5 flex flex-row ">
                  <span className="menu-item-description md-c535e65 md-ml15 tw-text-13 tw-tracking-normal tw-font-normal w-[-webkit-max-content]  break-all overflow-hidden text-ellipsis text-[#696f76] ml-0 tracking-[0] font-normal text-[13px] ml-[15px -webkit-line-clamp:1 -webkit-box-orient: vertical  ">
                    {' '}
                    Fragrant Basmati Rice Layered with Paneer Makhani Gravy and
                    Nuts. Served with Raita &amp; Fryums{' '}
                  </span>{' '}
                  <span className="tw-text-13 tw-whitespace-nowrap tw-tracking-normal tw-font-normal md-pc store-itm read-more-cta tw-cursor-pointer min-w-[60px] text-end text-black text-[] tracking-[0] font-normal  text-[13px] whitespace-nowrap cursor-pointer  ">
                    ReadmeMore
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu
