import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'
import { Menu, Sparkles } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-sky-500 text-white shadow-sm">
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight sm:text-base">
                CampusFlow
              </span>
              <span className="text-[11px] text-muted-foreground sm:text-xs">
                School Management Platform
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-xs text-muted-foreground sm:flex sm:text-sm">
            <button className="transition hover:text-foreground">Product</button>
            <button className="transition hover:text-foreground">How it works</button>
            <button className="transition hover:text-foreground">Roles</button>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-xs sm:text-sm"
            >
              Login
            </Button>
            <Button size="sm" className="text-xs sm:text-sm">
              Admin signup
            </Button>
            <ModeToggle />
          </div>

          {/* Mobile navigation */}
          <div className="flex items-center gap-2 md:hidden">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <SheetHeader className="border-b pb-4 mb-4">
                  <SheetTitle>CampusFlow</SheetTitle>
                  <SheetDescription>
                    Quick access to product sections and actions.
                  </SheetDescription>
                </SheetHeader>

                <nav className="flex flex-col gap-1 text-sm">
                  <SheetClose asChild>
                    <button className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm text-foreground hover:bg-muted">
                      <span>Product</span>
                    </button>
                  </SheetClose>
                  <SheetClose asChild>
                    <button className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm text-foreground hover:bg-muted">
                      <span>How it works</span>
                    </button>
                  </SheetClose>
                  <SheetClose asChild>
                    <button className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm text-foreground hover:bg-muted">
                      <span>Roles</span>
                    </button>
                  </SheetClose>
                </nav>

                <SheetFooter className="mt-auto flex flex-col gap-3 pt-4">
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-center"
                    >
                      Login
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button
                      size="sm"
                      className="w-full justify-center"
                    >
                      Admin signup
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </header>
    </>
  )
}