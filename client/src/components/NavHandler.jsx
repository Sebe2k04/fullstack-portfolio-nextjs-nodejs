"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "./Navbar";

const NavHandler = () => {
  const path = usePathname();
  return (
    <div>
      {path.startsWith("/admin")? (
        ""
      ) : (
        <Navbar />
      )}
    </div>
  );
};

export default NavHandler;
