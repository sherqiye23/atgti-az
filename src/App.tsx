import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import ROUTES from './router/router'
const routerr = createBrowserRouter(ROUTES)

function App() {

  return (
    <>
      <RouterProvider router={routerr} />
    </>
  )
}

export default App
