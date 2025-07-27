"use client";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import RegisterForm from "../components/register-form";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ translateY: -100 }}
        animate={{ translateY: 0 }}
        exit={{ translateY: 100 }}
        key="register"
      >
        <div className="flex gap-4 mb-8 items-center">
          <Link href="/auth/login">
            <ArrowLeftIcon width={20} />
          </Link>
          <div className="flex flex-col">
            <h2 className="text-xl font-medium">Create a new account</h2>
            <p className="text-neutral-500 font-medium">
              To get started, please sign up
            </p>
          </div>
        </div>
        <RegisterForm />
      </motion.div>
    </AnimatePresence>
  );
}
