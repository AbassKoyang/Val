import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import HomePage from "./pages/HomePage"
import BeMyVal from "./pages/BeMyVal"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/be-my-val" element={<BeMyVal />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
