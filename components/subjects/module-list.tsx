"use client"

import { MoreHorizontal } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface Module {
  id: string
  name: string
  subject: string
  duration: string
  status: "active" | "inactive" | "draft"
}

const modules: Module[] = [
  {
    id: "MOD001",
    name: "Algebra Basics",
    subject: "Introduction to Mathematics",
    duration: "4 weeks",
    status: "active",
  },
  {
    id: "MOD002",
    name: "Calculus Fundamentals",
    subject: "Introduction to Mathematics",
    duration: "6 weeks",
    status: "active",
  },
  {
    id: "MOD003",
    name: "Mechanics",
    subject: "Physics Fundamentals",
    duration: "5 weeks",
    status: "active",
  },
  {
    id: "MOD004",
    name: "Thermodynamics",
    subject: "Physics Fundamentals",
    duration: "4 weeks",
    status: "draft",
  },
  {
    id: "MOD005",
    name: "Ancient Civilizations",
    subject: "World History",
    duration: "3 weeks",
    status: "active",
  },
  {
    id: "MOD006",
    name: "Modern Literature",
    subject: "English Literature",
    duration: "8 weeks",
    status: "inactive",
  },
]

export function ModuleList() {
  return (
    <Card>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {modules.map((module) => (
              <TableRow key={module.id}>
                <TableCell className="font-medium">{module.name}</TableCell>
                <TableCell>{module.subject}</TableCell>
                <TableCell>{module.duration}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      module.status === "active" ? "default" : module.status === "draft" ? "outline" : "secondary"
                    }
                  >
                    {module.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Edit module</DropdownMenuItem>
                      <DropdownMenuItem>Manage content</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Delete module</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
