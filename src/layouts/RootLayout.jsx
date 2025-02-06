import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
const RootLayout = () => {
  return (
    <div className='w-full  bg-white overflow-x-hidden'>
        <NavBar />
        <main className='w-full min-h-screen mb-5 p-3 bg-white overflow-x-hidden'>
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout
