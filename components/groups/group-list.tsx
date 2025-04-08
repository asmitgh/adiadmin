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

interface Group {
  id: string
  name: string
  department: string
  year: string
  studentCount: number
  teacherCount: number
}

const groups: Group[] = [
  {
    id: "GRP001",
    name: "Mathematics Year 1",
    department: "Mathematics",
    year: "Year 1",
    studentCount: 32,
    teacherCount: 2,
  },
  {
    id: "GRP002",
    name: "Physics Year 2",
    department: "Physics",
    year: "Year 2",
    studentCount: 28,
    teacherCount: 3,
  },
  {
    id: "GRP003",
    name: "Computer Science Year 1",
    department: "Computer Science",
    year: "Year 1",
    studentCount: 45,
    teacherCount: 4,
  },
  {
    id: "GRP004",
    name: "Biology Year 3",
    department: "Biology",
    year: "Year 3",
    studentCount: 22,
    teacherCount: 2,
  },
  {
    id: "GRP005",
    name: "History Year 2",
    department: "History",
    year: "Year 2",
    studentCount: 18,
    teacherCount: 1,
  },
]

export function GroupList() {
  return (
    <Card>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Teachers</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {groups.map((group) => (
              <TableRow key={group.id}>
                <TableCell className="font-medium">{group.name}</TableCell>
                <TableCell>{group.department}</TableCell>
                <TableCell>{group.year}</TableCell>
                <TableCell>{group.studentCount}</TableCell>
                <TableCell>{group.teacherCount}</TableCell>
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
                      <DropdownMenuItem>Edit group</DropdownMenuItem>
                      <DropdownMenuItem>Manage students</DropdownMenuItem>
                      <DropdownMenuItem>Assign teachers</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Delete group</DropdownMenuItem>
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
