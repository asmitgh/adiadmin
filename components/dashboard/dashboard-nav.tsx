"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  BookOpen,
  Building2,
  CreditCard,
  GraduationCap,
  HelpCircle,
  LayoutDashboard,
  PieChart,
  Users,
  UsersRound,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  color?: string
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    color: "text-blue-500",
  },
  {
    title: "Users",
    href: "/dashboard/users",
    icon: Users,
    color: "text-emerald-500",
  },
  {
    title: "Departments",
    href: "/dashboard/departments",
    icon: Building2,
    color: "text-purple-500",
  },
  {
    title: "Subjects",
    href: "/dashboard/subjects",
    icon: BookOpen,
    color: "text-amber-500",
  },
  {
    title: "Groups",
    href: "/dashboard/groups",
    icon: UsersRound,
    color: "text-pink-500",
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: BarChart3,
    color: "text-indigo-500",
  },
  {
    title: "Subscription",
    href: "/dashboard/subscription",
    icon: CreditCard,
    color: "text-yellow-500",
  },
  {
    title: "Support & FAQ",
    href: "/dashboard/support",
    icon: HelpCircle,
    color: "text-teal-500",
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span>EduAdmin</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon className={`h-4 w-4 ${item.color}`} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <PieChart className="h-4 w-4" />
          <span>Analytics Dashboard v1.0</span>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
