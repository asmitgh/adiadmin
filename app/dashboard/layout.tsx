import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { MainNav } from "@/components/dashboard/main-nav"
import { Search } from "@/components/dashboard/search"
import { UserNav } from "@/components/dashboard/user-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Notifications } from "@/components/dashboard/notifications"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 border-b bg-background">
          <div className="flex h-16 items-center justify-between px-4 md:px-6">
            <MainNav />
            <div className="flex items-center gap-2">
              <Search />
              <Notifications />
              <ModeToggle />
              <UserNav />
            </div>
          </div>
        </header>
        <div className="flex flex-1">
          <DashboardNav />
          <main className="flex-1 overflow-auto p-4 md:p-6 w-full">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
