"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 m-0 flex items-center justify-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative max-w-6xl w-full p-4">
            <button
              className="absolute top-6 right-6 text-white hover:text-accent"
              onClick={onClose}
            >
              <X size={24} />
            </button>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
