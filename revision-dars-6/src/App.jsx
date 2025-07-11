import { useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { useSelector, Provider } from "react-redux";
import store from "./app/store";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";

function PrivateRoute({ children }) {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return isAuth ? children : <Navigate to="/login" />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Navbar />
        <Products />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
