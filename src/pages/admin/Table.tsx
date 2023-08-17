import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate, useLoaderData } from 'react-router-dom'
import { getTables } from '../../api/admin'
import { TbQrcode } from 'react-icons/tb'
import { QrModal } from '../../components/modal/QrModal'
export const Table = () => {
  const tables = useLoaderData()

  const [show, setShow] = useState<boolean>(false)

  const navigate = useNavigate()
  return (
    <>
      <div className="flex justify-end m-5">
        <button
          onClick={() => navigate('createTable')}
          id="defaultModalButton"
          data-modal-toggle="defaultModal"
          className="block text-white bg-orange-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          type="button"
        >
          Create
        </button>
      </div>
      <Outlet />
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 p-4">
        {tables.map((tab) => (
          <div
            key={tab._id}
            className="bg-white p-4 text-center h-24 w-24 rounded-lg shadow"
          >
            {tab.tableName}

            <div className="mt-2">
              <button
                onClick={() => setShow(!show)}
                className="text-sm px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                <TbQrcode />
              </button>
              {show && <QrModal tableId={tab._id} show={show} setShow={setShow } />}
            </div>
          </div>
        ))}
        
        {/* <div className="bg-white p-4 text-center h-24 w-24 rounded-lg shadow">
          2
        </div>
        <div className="bg-white p-4 text-center h-24 w-24 rounded-lg shadow">
          3
        </div>
        <div className="bg-white p-4 text-center h-24 w-24 rounded-lg shadow">
          4
        </div>
        <div className="bg-white p-4 text-center h-24 w-24 rounded-lg shadow">
          5
        </div>
        <div className="bg-white p-4 text-center h-24 w-24 rounded-lg shadow">
          6
        </div>
        <div className="bg-white p-4 text-center h-24 w-24 rounded-lg shadow">
          7
        </div>
        <div className="bg-white p-4 text-center h-24 w-24 rounded-lg shadow">
          8
        </div>
        <div className="bg-white p-4 text-center h-24 w-24 rounded-lg shadow">
          9
        </div>
        <div className="bg-white p-4 text-center h-24 w-24 rounded-lg shadow">
          10
        </div> */}
      </div>
    </>
  )
}

export const tableDataLoader = async () => {
  const tables = await getTables()

  return tables?.data.data
}
