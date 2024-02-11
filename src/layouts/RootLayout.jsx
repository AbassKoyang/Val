import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const RootLayout = () => {
  return (
    <main className='w-full h-dvh bg-white'>
        <NavBar />
        <section className='w-full h-full'>
            <Outlet />
        </section>
    </main>
  )
}

export default RootLayout