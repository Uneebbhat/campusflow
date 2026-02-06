import { LoginForm } from "@/modules/(auth)/login/components/login-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login | CampusFlow",
  description: "Login to your CampusFlow account and start managening your school"
}

export default function LoginPage() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
