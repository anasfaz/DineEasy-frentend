import { useEffect, useState } from 'react'
import { CreateCategoryModal } from '../../components/modal/CreateCategoryModal'
import { AdminNavbar } from '../../components/navbar/AdminNavbar'
import { SideBar } from '../../components/sidebar/SideBar'
import { getAllCategory } from '../../api/admin'
export const CategoryManagment = () => {
  const [catogory, setCategory] = useState([]) as any

  useEffect(() => {

    let ignore = false

    getAllCategory().then((res) => {
      console.log(res);
      
      if (!ignore) {
        setCategory(res?.data)
        console.log(res?.data)
      }
    })
    return () => {

      ignore=true
    }
  }, [])
  return (
    <>
      <CreateCategoryModal />

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              category
            </th>

            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {catogory.map((data: any, _id: any) => {
            return (
              <tr
                key={data?._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className=" ">
                  <img
                    className="object-cover h-24 w-24 rounded "
                    src={data?.url}
                    alt="Apple Watch"
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {data?.name}
                </td>

                <td className="px-6 py-4">
                  <a
                    href="/"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      
    </>
  )
}
