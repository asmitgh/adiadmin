"use client"

import Link from "next/link"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function MainNav() {
  return (
    <div className="flex items-center gap-4">
      <SidebarTrigger />
      <Link href="/dashboard" className="hidden items-center space-x-2 md:flex">
        <span className="hidden font-bold sm:inline-block">EduAdmin Dashboard</span>
      </Link>
    </div>
  )
}
