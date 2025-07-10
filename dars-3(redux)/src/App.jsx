import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
]);

function App() {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Home />
        <About />
      </Suspense>

      <RouterProvider router={router} />

      <div>
        <header>My Site</header>
        <Outlet /> {/* Nested route shu joyda ko‘rinadi */}
        <footer>© 2025</footer>
      </div>
    </>
  );
}

export default App;

/* | Narsa          | Ma’nosi                                     | Misol                              |
| -------------- | ------------------------------------------- | ---------------------------------- |
| `lazy()`       | Faylni faqat kerak bo‘lganda yuklaydi       | `lazy(() => import(...))`          |
| `Suspense`     | Yuklanayotgan komponentga loader ko‘rsatadi | `<Suspense fallback={<Loader />}>` |
| `Outlet`       | Nested route joylash joyi                   | `Layout` ichida ishlatiladi        |
| `useParams`    | URL ichidagi dinamik qiymatlarni olish      | `const {id} = useParams()`         |
| `Navigate`     | Shart bajarilmasa boshqa sahifaga o‘tkazadi | `<Navigate to="/login" />`         |
| `PrivateRoute` | Faqat login bo‘lganda ko‘rsatadi            | Auth check qiladi                  |
 */
