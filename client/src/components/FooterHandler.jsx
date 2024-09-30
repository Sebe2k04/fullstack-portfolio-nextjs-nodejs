"use client";
import React from "react";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

const FooterHandler = () => {
  const path = usePathname();
  return <div>{path.startsWith("/admin") ? "" : <Footer />}</div>;
};

export default FooterHandler;
