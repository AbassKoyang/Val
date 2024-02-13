import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const RootLayout = () => {
  return (
    <div className='w-full h-dvh bg-white'>
        <NavBar />
        <main className='w-full h-full mb-5 p-3'>
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout