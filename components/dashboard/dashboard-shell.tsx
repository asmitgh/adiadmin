import type React from "react"
interface DashboardShellProps {
  children: React.ReactNode
  heading: string
  actions?: React.ReactNode
}

export function DashboardShell({ children, heading, actions }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 flex flex-col space-y-4 p-4 md:p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">{heading}</h2>
          <div className="flex items-center gap-2">{actions}</div>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
