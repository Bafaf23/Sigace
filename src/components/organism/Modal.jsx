// components/organism/Modal.jsx
"use client";

import Button from "../atom/Button";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop (Fondo oscuro) */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Contenido de la Modal */}
      <div className="animate-in fade-in zoom-in relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl duration-300 dark:bg-slate-900">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 dark:border-slate-800 dark:bg-slate-700">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-300">
            {title}
          </h3>
          <Button
            icon={faTimes}
            classNameBtn="text-slate-400 hover:text-slate-600 p-1"
            onClick={onClose}
          />
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
