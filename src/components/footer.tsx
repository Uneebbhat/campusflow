
export default function Footer() {
  return (
    <>
      <footer className="border-t bg-background/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="text-[11px] sm:text-xs">
              © {new Date().getFullYear()} CampusFlow. All rights reserved.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button className="transition hover:text-foreground">Privacy</button>
            <button className="transition hover:text-foreground">Terms</button>
            <button className="transition hover:text-foreground">Status</button>
          </div>
        </div>
      </footer>
    </>
  )
}
