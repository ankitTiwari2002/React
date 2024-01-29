import react, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
//import About from './components/About';
//import Contact from './components/Contact';
import Error from './components/Error';
//import RestoMenue from './components/RestoMenue';
import ShimmerUI from './components/ShimmerUI';
const About=lazy(()=>import('./components/About'));
const Contact=lazy(()=>import('./components/Contact'))
const RestoMenue=lazy(()=>import('./components/RestoMenue'))
const AppLayout=()=>{
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}
const appRouter=createBrowserRouter([
    {
        path:'/',
        element: <AppLayout/>,
        children:[
            {
                path:'/',
                element: <Body/>
            },
            {
                path:'/about',
                element: <Suspense fallback={<ShimmerUI/>}><About/></Suspense> 
            },
            {
                path:'/contact',
                element: <Suspense fallback={<ShimmerUI/>}><Contact/></Suspense>
            },
            {
                path: '/restorent/:resId',
                element: <Suspense fallback={<ShimmerUI/>}><RestoMenue/></Suspense>
            },
        ],
        errorElement: <Error/>,
    },
    
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)