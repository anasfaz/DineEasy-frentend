import QRCode from 'react-qr-code'

interface ChildComponentProps {
  show: boolean
  tableId: string
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export const QrModal = ({ show, setShow, tableId }: ChildComponentProps) => {
  const handlechange = () => {
    setShow((show) => !show)
    }
    console.log(tableId);
    
  return (
    <>
      <div
        id="crypto-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="flex backdrop-blur-sm  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
      >
        <div className="relative w-full max-w-md max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={handlechange}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="crypto-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            {/* Modal header */}
            <div className="px-6 py-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                Connect wallet
              </h3>
            </div>
            {/* Modal body */}
            <div className="p-6">
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                scan and select table
              </p>

              <div
                style={{
                  height: 'auto',
                  margin: '0 auto',
                  maxWidth: 64,
                  width: '100%',
                }}
              >
                <QRCode
                  size={256}
                  style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                  value={tableId}
                  viewBox={`0 0 256 256`}
                />
              </div>
              <div>
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
                >
                  {/* <svg
                    className="w-3 h-3 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg> */}
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
