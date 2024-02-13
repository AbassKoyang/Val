import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <div className='w-full  bg-white overflow-x-hidden'>
        <NavBar />
        <main className='w-full min-h-screen mb-5 p-3 bg-white overflow-x-hidden'>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default RootLayout