import { useEffect, useState } from 'react'
import style from './card.module.css'


interface categoryType {
  imageName: string;
  url: string;
  name: string;
  _id: string;

}
interface ChildComponentProps {
  data: categoryType[];
}



export const Card = ({ data }: ChildComponentProps) => {
  if (!Array.isArray(data)) {
    // If data is not an array, handle the situation here
    return <div>No data available.</div>;
  }
  
  return (
    <div className="flex flex-col bg-white m-auto p-auto">
      <h5 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5  text-4xl text-gray-800">
        offers
      </h5>
      <div
        className={'px-3' }
      >
        <div className=" flex overflow-x-scroll  overflow-hidden  no-scrollbar    flex-nowrap ">
          {data.map((data) => (
            <div key={data._id } className=" px-1">
            <div className=" w-20 h-20 max-w-xs overflow-hidden  rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                src={data.url}
                alt={data.name}
              />
            </div>
            <div className='max-w-20 overflow-hidden pt-2  leading-4 tracking-tighter decoration-sky-600'>
              {data.name}
              </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}
