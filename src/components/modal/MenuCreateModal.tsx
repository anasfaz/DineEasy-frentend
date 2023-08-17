import { SetStateAction, useEffect, useState,Dispatch } from 'react'
import { categoryOnly, createfoodItem, getItems } from '../../api/admin'
import { Modal } from 'flowbite-react';

interface IProps {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>
}

export const MenuCreateModal = ({modal,setModal}:IProps) => {
    
    

  const [categoryData, setCategoryData] = useState([]) as any
  // const [show, setShow] = useState<boolean>(true)
  const [name, setName] = useState<string>('')
  const [discription, setDiscription] = useState<string>('')
  const [price, setPrice] = useState<string | null>(null)
  const [img, setImg] = useState<File | null>(null)
  const [veg, setVeg] = useState<boolean>(false)
  const [category, setCategory] = useState('')
  const handleform = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const formData = new FormData()
    
      formData.append('name', name)
      formData.append('price', price)
      formData.append('veg', veg)
      formData.append('image', img)
      formData.append('categoryId', category)
      formData.append('discription', discription)
        const response = await createfoodItem(formData) 
    if (response) setModal(modal=>!modal)
    
  }
  const showModal = async () => {
    const response = await categoryOnly()
    console.log(response?.data?.data)
      setCategoryData(response?.data?.data)

    setModal(modal=>!modal)
    }
    
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImg(e.target.files[0])
    }
  }
  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value)
  }
    const hadleChangeCategory = (e) => {
      setCategory(e.target.value)
  }

  return (
    <>
      {modal ? (
        <div className="flex justify-end m-5">
          <button
            onClick={showModal}
            id="defaultModalButton"
            data-modal-toggle="defaultModal"
            className="block text-white bg-orange-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            type="button"
          >
            Create
          </button>
        </div>
      ) : (
        <>
          {/* Modal toggle */}
          
          {/* Main modal */}
          <div
            id="defaultModal"
            tabIndex={-1}
            aria-hidden="true"
            className=" flex backdrop-blur-sm  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
          >
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
              {/* Modal content */}
              <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                {/* Modal header */}
                <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Add Item
                  </h3>
                  <button
                    onClick={() => setModal(modal=>!modal)}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="defaultModal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* Modal body */}
                <form onSubmit={handleform}>
                  <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type food name"
                      />
                    </div>
                    <div>
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="file_input"
                      >
                        Upload file
                      </label>
                      <input
                        onChange={handleImage}
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="file_input"
                        type="file"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="price"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Price
                      </label>
                      <input
                        onChange={handlePrice}
                        type="number"
                        value={price}
                        name="price"
                        id="price"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="₹999"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="category"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Category
                      </label>
                      <select
                        onChange={hadleChangeCategory}
                        id="category"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                                                  <option>Select category</option>
                                                  
                        {categoryData?.map((data:any) => (
                          <option key={data?._id} value={data?._id}>
                            {data?.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                      <input
                        onChange={() => setVeg(!veg)}
                       
                        id="bordered-checkbox-2"
                        type="checkbox"
                        defaultValue=""
                        name="bordered-checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="bordered-checkbox-2"
                        className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        veg
                      </label>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Description
                      </label>
                      <textarea
                        onChange={(e) => setDiscription(e.target.value)}
                        id="description"
                        rows={4}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Write product description here"
                        value={discription}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <svg
                      className="mr-1 -ml-1 w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Add new Item
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
