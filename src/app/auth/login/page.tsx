"use client";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import LoginForm from "../components/login-form";

export default function LoginPage() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ translateY: -100 }}
        animate={{ translateY: 0 }}
        exit={{ translateY: 100 }}
        key="login"
      >
        <div className="flex flex-col mb-8 ">
          <h2 className="text-xl font-medium">Welcome to Batu</h2>
          <p className="text-neutral-500 font-medium">
            To get started, please sign in
          </p>
        </div>
        <LoginForm />
      </motion.div>
    </AnimatePresence>
  );
}
