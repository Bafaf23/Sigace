"use client";
import Sidebar from "@/components/organism/Sidebar";
import "@/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Toaster } from "react-hot-toast";

config.autoAddCss = false;

export default function DashboardLayuot({ children }) {
  return (
    <>
      <div className="flex flex-1 gap-2">
        <Sidebar />
        <main className="flex h-screen flex-1 flex-col overflow-hidden overflow-y-auto scroll-smooth p-3">
          {children}
        </main>
      </div>
    </>
  );
}
