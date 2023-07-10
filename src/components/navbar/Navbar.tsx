export const Navbar = () => {
  return (
    <>
      <header className="bg-white">
        <div className="border py-3 px-6">
          <div className="flex justify-between">
            <div className="flex items-center">
              {/* <svg
                xmlns="https://scontent.fcok14-1.fna.fbcdn.net/v/t39.30808-6/240997591_801377530542302_6650432983832741370_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Fqj4NayXuTYAX986xkW&_nc_ht=scontent.fcok14-1.fna&oh=00_AfDsJxvMdQ_Hz8l-pV_OZCLcfc5i-OaqJ3UEJxsvNvEp2A&oe=64B14B64://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg> */}
              <img className="h-6 w-6 text-red-500" src="https://scontent.fcok14-1.fna.fbcdn.net/v/t39.30808-6/240997591_801377530542302_6650432983832741370_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Fqj4NayXuTYAX986xkW&_nc_ht=scontent.fcok14-1.fna&oh=00_AfDsJxvMdQ_Hz8l-pV_OZCLcfc5i-OaqJ3UEJxsvNvEp2A&oe=64B14B64" />
              <span className="ml-2 font-semibold text-[#252C32]">
              Charcoal Bay
              </span>
            </div>

            {/* <div className="ml-6 flex flex-1 gap-x-3">
              
              <input
                type="text"
                className="w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm"
                value="DJI phantom"
              />
            </div> */}

            <ul className="ml-2 flex">
              <li className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                  <path
                    fill-rule="evenodd"
                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Orders</span>
              </li>

              <li className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Favorites</span>
              </li>

              <li className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                    3
                  </span>
                </div>
                <span className="text-sm font-medium">Cart</span>
              </li>

              <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
                <span className="text-sm font-medium">Sign in</span>
              </div>
            </ul>
          </div>
        </div>
      </header>
      
    </>
  )
}
