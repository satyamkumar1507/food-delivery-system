import { lazy,Suspense, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import About from './components/About'
import Contactus from './components/Contactus'
import Error from './components/Error'
import RestaruntMenu from './components/RestaruntMenu'
import { createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom'
import UserContext from './utils/UserContext'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Cart from './components/Cart'
//import Grocery from './components/Grocery'



// Lazy Loading
const Grocery = lazy(() => import("./components/Grocery"));


function App() {

  const [username,setusername] = useState();

  useEffect(() => {
     //Make an api call and send username and password
     const data = {
      name: "Satyam Kumar"
     };
     setusername(data.name);
  },[]);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:username,setusername}}>
    <div className="relative w-full min-h-screen flex flex-col">
      <Header/>
      <Outlet/>
      <Footer/>
      </div>
      </UserContext.Provider>
      </Provider>
 
  )
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path:"/about",
        element: <About/>,
      },
      {
        path:"/contact",
        element: <Contactus/>,
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>}>
          <Grocery/>
        </Suspense>
      },
      {
       path:"/cart",
       element: <Cart/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaruntMenu/>,
      },
    ],
    errorElement: <Error/>,
  },
  
])

export default App;
