import { SignupForm } from "@/modules/(auth)/signup/components/signup-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Signup | CampusFlow",
  description: "Create and account on CampusFlow and start managening your school"
}

export default function SignupPage() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  )
}
