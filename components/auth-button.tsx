'use client'

import { Button } from "@/components/ui/button"
import { signIn, signOut, useSession } from "next-auth/react"
import { motion } from "framer-motion"

export function AuthButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <Button 
        variant="destructive" 
        onClick={() => signOut()}
        className="font-semibold"
      >
        Sair
      </Button>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Button
        onClick={() => signIn('discord')}
        className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold"
      >
        Entrar com Discord
      </Button>
    </motion.div>
  )
}

