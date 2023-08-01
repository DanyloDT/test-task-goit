import { Suspense } from "react";
import Navbar from "../Navbar/Navbar";
import css from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader/Loader";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <main className={css.main}>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default Layout;
