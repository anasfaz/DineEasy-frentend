import { useEffect, useState } from 'react'
import { createcategoies } from '../../api/admin'
import 'flowbite'
export const CreateCategoryModal = () => {
 

  const [show, SetShow] = useState<boolean>(true)
  const [file, setFile] = useState<File>()
  const [category,setCategory] = useState<string>('')
  const handleForm = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    const formData = new FormData();
    if (file && category) {
      formData.append("image", file)
      formData.append('name', category)
      const resposne = await createcategoies(formData)
      if (resposne) {
        ///popup set 
        console.log(resposne.data);
        SetShow(!show)

      }
      
    } else {
      console.log('fill form');
      
}
    
  }
    
   const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
     if (e.target.files && e.target.files.length > 0) {
       setFile(e.target.files[0])
     }
   }

  return (
    <>
      {/* Hello world */}
      {/* Modal toggle */}
      {show ? (
        <div className="flex justify-end m-5">
          <button
            onClick={() => SetShow(!show)}
            id="defaultModalButton"
            data-modal-toggle="defaultModal"
            className="block text-white bg-orange-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            type="button"
          >
            Create Catogory
          </button>
        </div>
      ) : (
        <div
          tabIndex={-1}
          aria-hidden="true"
          className="flex backdrop-blur-sm  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
        >
          <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
            {/* Modal content */}
            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              {/* Modal header */}
              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Add Category
                </h3>
                <button
                  onClick={() => SetShow(!show)}
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
              <form onSubmit={handleForm} >
                <div className="flex flex-col">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input onChange={(e)=>setCategory(e.target.value)}
                      type="text"
                      name="name"
                      value={category}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type product name"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="file_input"
                    >
                      Upload Image
                    </label>
                      <input onChange={handleFileChange}
                      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      aria-describedby="file_input_help"
                      accept='image/*'
                      type="file"
                    />
                    <p
                      className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                      id="file_input_help"
                    >
                      
                    </p>
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
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
