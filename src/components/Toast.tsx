"use client";

import {motion, AnimatePresence} from "framer-motion";
import {CheckCircle, XCircle, Info, AlertCircle, X} from "lucide-react";
import {useEffect} from "react";

export type ToastType = "success" | "error" | "info" | "warning";

interface ToastProps {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
  onClose: (id: string) => void;
}

const icons = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
  warning: AlertCircle
};

const colors = {
  success: "from-emerald-500 to-emerald-600",
  error: "from-red-500 to-red-600",
  info: "from-blue-500 to-blue-600",
  warning: "from-yellow-500 to-yellow-600"
};

export function Toast({
  id,
  message,
  type,
  duration = 3000,
  onClose
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const Icon = icons[type];

  return (
    <motion.div
      initial={{opacity: 0, y: -50, x: 300}}
      animate={{opacity: 1, y: 0, x: 0}}
      exit={{opacity: 0, x: 300, scale: 0.8}}
      transition={{type: "spring", damping: 25, stiffness: 300}}
      className="glass rounded-2xl shadow-premium-lg border border-white/20 p-4 min-w-[300px] max-w-md"
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-xl bg-linear-to-br ${colors[type]} flex items-center justify-center shrink-0 shadow-lg`}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>
        <p className="flex-1 text-gray-900 font-medium">{message}</p>
        <button
          onClick={() => onClose(id)}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}

interface ToastContainerProps {
  toasts: Array<{id: string; message: string; type: ToastType}>;
  onClose: (id: string) => void;
}

export function ToastContainer({toasts, onClose}: ToastContainerProps) {
  return (
    <div className="fixed top-20 right-4 z-50 flex flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onClose={onClose} />
        ))}
      </AnimatePresence>
    </div>
  );
}
