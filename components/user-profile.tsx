'use client'

import { useSession } from "next-auth/react"
import { motion } from "framer-motion"
import { Card, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserProfile() {
    const { data: session } = useSession()

    if (!session) return null

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="w-[300px] bg-[#0A0A0A] border-[#2D2D2D]">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                    <Avatar className="h-14 w-14">
                        <AvatarImage src={session.user?.image!} />
                        <AvatarFallback>
                            {session.user?.name?.[0].toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <p className="text-lg text-white font-semibold">{session.user?.name}</p>
                        <p className="text-sm text-muted-foreground">{session.user?.email}</p>
                    </div>
                </CardHeader>
            </Card>
        </motion.div>
    )
}

