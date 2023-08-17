import React from 'react'

import  Home, { homeDataLoader }  from './pages/user/Home'
import { Route, createBrowserRouter, Routes, RouterProvider } from 'react-router-dom'
// import { Login } from './pages/user/Login'
import LoginPhone from './pages/user/LoginPhone'
import { SignUp } from './pages/user/SignUp'
import { Search } from './pages/user/Search'
///admin pages imports
import { AdminHome } from './pages/admin/AdminHome'
import { CategoryManagment } from './pages/admin/CategoryManagment'
import { FoodItem } from './pages/admin/FoodItem'
import { Login } from './pages/user/login/Login'
import { Error } from './pages/Error'
import { MainNavigation } from './layout/admin/MainNavigation'
import { Table, tableDataLoader,} from './pages/admin/Table'
import { CreateModal } from './components/modal/CreateTable'
import { categoryOnly, getAllCategory } from './api/admin'
import Menu from './pages/user/menu'
import HomeLayout from './layout/admin/HomeLayout'
import { categoryLoader } from './utils/Loaders'
import { OtpConfirm } from './pages/user/OtpConfirm'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout/>,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home/>,
          loader:homeDataLoader,
        },
        {
          path: 'menu/:id',
          element: <Menu />,
          loader:categoryLoader,
        }
      ]
    },
    {
      path: '/login',
      element: <LoginPhone/>,

      
    },
    {
      path: 'otp-verify',
      element:<OtpConfirm/>
    },

    {
      path: '/signup',
      element:<SignUp/>
    },
    {
      path: '/admin',
      element: <MainNavigation />, 
      errorElement: <Error />,
      children: [
        { path:'category',
          element: <CategoryManagment />
          
        },
        {
          path: 'foodItems',
          element:<FoodItem/>,
        },
        {
          path: 'table',
          element: <Table />,
          loader:tableDataLoader,
          children: [
            {
              path: 'createTable',
              element:<CreateModal/>
            }
          ]
        }
        
        
        
      ]
    }
  ])

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path="/login" element={<LoginPhone />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/category" element={<CategoryManagment />} />
        <Route path="/admin/foodItems" element={<FoodItem />} />
      </Routes> */}

      <RouterProvider router={router}/>

    </>
  )
}

export default App
