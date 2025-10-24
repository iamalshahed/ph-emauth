import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <Header />
      <main className="w-full max-w-[1440px] mx-auto px-4">
        <Outlet />

        {/* toast */}
        <Toaster position="top-center" />
      </main>
    </div>
  );
};

export default Root;
