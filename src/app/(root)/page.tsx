import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Users2,
  CalendarCheck2,
  MessageCircle,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Users2,
    title: "Role-based dashboards",
    description:
      "Separate, focused workspaces for admins, principals, teachers, students, and parents.",
  },
  {
    icon: CalendarCheck2,
    title: "Attendance & timetable",
    description:
      "Track daily attendance and manage conflict-free timetables for every section.",
  },
  {
    icon: BarChart3,
    title: "Grades & assessments",
    description:
      "Centralised gradebook linked to academic sessions, classes, and sections.",
  },
  {
    icon: MessageCircle,
    title: "Internal communication",
    description:
      "Built-in messaging between teachers, students, and parents—no phone numbers needed.",
  },
];

const onboardingSteps = [
  "Admin signs up from the landing page.",
  "Verify email and create school & first branch.",
  "Define academic sessions, classes, and sections.",
  "Invite principals and teachers to start using CampusFlow.",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_60%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-24 lg:px-8">
          <div className="flex-1 space-y-6 animate-in fade-in slide-in-from-left-6 duration-700">
            <Badge className="inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Designed for modern private schools
            </Badge>
            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Run your{" "}
              <span className="bg-linear-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent dark:from-sky-400 dark:to-indigo-300">
                entire school workflow
              </span>{" "}
              from a single dashboard.
            </h1>
            <p className="max-w-xl text-balance text-sm text-muted-foreground sm:text-base">
              CampusFlow is a web-based school management platform for private schools.
              Track attendance, manage grades, build timetables, and keep everyone in sync—
              without bloated features you will never use.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button size="lg" className="group w-full sm:w-auto">
                Get started as Admin
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-dashed sm:w-auto"
              >
                Login
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground sm:text-sm">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span>Secure, role-based access</span>
              </div>
              <span className="hidden h-1 w-1 rounded-full bg-muted sm:inline-block" />
              <span>No fees module, no video hosting — only core academics.</span>
            </div>
          </div>

          {/* Right column: “preview” of dashboards */}
          <div className="flex-1">
            <div className="relative mx-auto max-w-md animate-in fade-in slide-in-from-right-6 duration-700 rounded-2xl border bg-card/70 p-4 shadow-lg shadow-blue-500/5 backdrop-blur-sm dark:border-blue-900/40">
              <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-medium">Role overview</span>
                <span>CampusFlow</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="rounded-xl border bg-background/80 p-3">
                  <p className="mb-1 text-[11px] font-medium uppercase tracking-wide text-blue-600 dark:text-sky-400">
                    Admin
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Configure schools, branches, sessions, and invite staff.
                  </p>
                </div>
                <div className="rounded-xl border bg-background/80 p-3">
                  <p className="mb-1 text-[11px] font-medium uppercase tracking-wide text-violet-600 dark:text-violet-300">
                    Principal
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Monitor branch-wide attendance, grades, and timetables.
                  </p>
                </div>
                <div className="rounded-xl border bg-background/80 p-3">
                  <p className="mb-1 text-[11px] font-medium uppercase tracking-wide text-emerald-600 dark:text-emerald-300">
                    Teacher
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Take attendance, record grades, and message students & parents.
                  </p>
                </div>
                <div className="rounded-xl border bg-background/80 p-3">
                  <p className="mb-1 text-[11px] font-medium uppercase tracking-wide text-amber-600 dark:text-amber-300">
                    Student / Parent
                  </p>
                  <p className="text-xs text-muted-foreground">
                    View timetable, attendance history, and latest results.
                  </p>
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-muted px-3 py-2 text-[11px] text-muted-foreground">
                Invitation-based access for teachers, principals, students, and parents.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                Built around how schools actually operate
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                CampusFlow is intentionally focused on academic workflows—attendance, grades,
                timetables, and communication—so your team is never lost in a maze of features.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group flex flex-col gap-2 rounded-xl border bg-background p-4 text-sm shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:ring-1 hover:ring-blue-100 dark:hover:ring-sky-900/60"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:bg-sky-950/60 dark:text-sky-300 dark:ring-sky-900/60">
                  <feature.icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding / Flow Section */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-center">
            <div>
              <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                From signup to live dashboards in under an afternoon
              </h2>
              <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                CampusFlow follows a simple, opinionated flow: the school owner signs up,
                verifies email, runs through a guided setup wizard, and lands on an admin
                dashboard ready for day-to-day operations.
              </p>

              <ol className="mt-6 space-y-3 text-sm">
                {onboardingSteps.map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-3 rounded-lg border bg-muted/60 px-3 py-2 text-xs sm:text-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-background dark:hover:border-sky-900/60"
                  >
                    <div className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-blue-600 text-[11px] font-semibold text-white dark:bg-sky-500">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border bg-card/80 p-4 text-xs shadow-sm sm:text-sm animate-in fade-in zoom-in-95 duration-700">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Frontend flow summary
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                  <span>
                    <span className="font-medium text-foreground">Landing Page → Signup/Login</span>{" "}
                    becomes the single entry point for every user.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                  <span>
                    Admins are guided through the{" "}
                    <span className="font-medium text-foreground">School Setup Wizard</span> to
                    create schools, branches, sessions, and sections.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                  <span>
                    Login automatically redirects each user to the{" "}
                    <span className="font-medium text-foreground">right dashboard</span> based on
                    their role in the `User` table.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                  <span>
                    Teachers and students join via{" "}
                    <span className="font-medium text-foreground">secure invitations</span>, keeping
                    access under school control.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex flex-col items-start gap-4 rounded-2xl border bg-linear-to-r from-blue-600 via-indigo-600 to-sky-500 px-5 py-8 text-left text-white shadow-lg shadow-blue-500/20 sm:px-8 sm:py-10 md:flex-row md:items-center md:justify-between md:text-left">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                Ready to bring structure to your school&apos;s academics?
              </h2>
              <p className="max-w-xl text-xs text-blue-50/90 sm:text-sm">
                Start with your first branch today. CampusFlow grows with every new academic
                session, class, section, and role you add—without adding complexity.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="w-full bg-white text-blue-700 hover:bg-blue-50 sm:w-auto"
              >
                Start free admin signup
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white/60 text-white bg-transparent hover:bg-white/10 hover:text-white sm:w-auto"
              >
                Talk to us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
