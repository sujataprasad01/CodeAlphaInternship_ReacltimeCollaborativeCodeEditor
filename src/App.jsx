import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import JoinRoom from './routes/joinRoom/JoinRoom'
import Room from './routes/Room/Room'
const router=createBrowserRouter([
  {
    path:"/",
    element: <JoinRoom></JoinRoom>
  },
  {
    path:"/room/:roomId",
    element:<Room />
  }
])

function App(){
  return <RouterProvider router={router} />
}

export default App