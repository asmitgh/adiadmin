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
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Assignment {
  id: string
  teacher: {
    name: string
    email: string
  }
  subject: string
  group: string
  startDate: string
}

const assignments: Assignment[] = [
  {
    id: "ASG001",
    teacher: {
      name: "Professor Smith",
      email: "prof.smith@example.com",
    },
    subject: "Introduction to Mathematics",
    group: "Mathematics Year 1",
    startDate: "Sep 1, 2023",
  },
  {
    id: "ASG002",
    teacher: {
      name: "Dr. Johnson",
      email: "dr.johnson@example.com",
    },
    subject: "Physics Fundamentals",
    group: "Physics Year 2",
    startDate: "Sep 5, 2023",
  },
  {
    id: "ASG003",
    teacher: {
      name: "Ms. Williams",
      email: "ms.williams@example.com",
    },
    subject: "Computer Science Basics",
    group: "Computer Science Year 1",
    startDate: "Sep 10, 2023",
  },
  {
    id: "ASG004",
    teacher: {
      name: "Dr. Brown",
      email: "dr.brown@example.com",
    },
    subject: "Biology and Life Sciences",
    group: "Biology Year 3",
    startDate: "Sep 15, 2023",
  },
]

export function TeacherAssignments() {
  return (
    <Card>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Teacher</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Group</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assignments.map((assignment) => (
              <TableRow key={assignment.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage
                        src={`/placeholder.svg?text=${assignment.teacher.name.charAt(0)}`}
                        alt={assignment.teacher.name}
                      />
                      <AvatarFallback>
                        {assignment.teacher.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-medium">{assignment.teacher.name}</span>
                      <span className="text-xs text-muted-foreground">{assignment.teacher.email}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{assignment.subject}</TableCell>
                <TableCell>{assignment.group}</TableCell>
                <TableCell>{assignment.startDate}</TableCell>
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
                      <DropdownMenuItem>Edit assignment</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Remove assignment</DropdownMenuItem>
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
