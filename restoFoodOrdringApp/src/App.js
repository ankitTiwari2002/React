import react, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import ShimmerUI from "./components/ShimmerUI";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import Login from "./components/Login";
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const RestoMenue = lazy(() => import("./components/RestoMenue"));
const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restorent/:resId",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <RestoMenue />
          </Suspense>
        ),
      },
      {
        path: "/Cart",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
