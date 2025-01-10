import { AuthButton } from "@/components/auth-button"
import { UserProfile } from "@/components/user-profile"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-black">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold text-white text-center">
          Bem-vindo ao Auth
        </h1>
        <UserProfile />
        <AuthButton />
      </div>
    </main>
  )
}

