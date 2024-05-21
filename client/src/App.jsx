import { useState } from 'react'
import MainRoot from './pages/MainRoot.jsx';

import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ROUTES from './index.Routes.jsx'
const routes =createBrowserRouter(ROUTES)
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={routes}/>
      {/* <MainRoot/> */}
    </>
  )
}

export default App
