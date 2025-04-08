"use client"

import { MoreHorizontal, BookOpen, Users, GraduationCap, ChevronRight } from "lucide-react"

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
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { DepartmentDetail } from "@/components/departments/department-detail"

interface Department {
  id: string
  name: string
  code: string
  headOfDepartment: string
  subjectCount: number
  teacherCount: number
  studentCount: number
  color: string
}

const departments: Department[] = [
  {
    id: "DEP001",
    name: "Computer Science Engineering",
    code: "CSE",
    headOfDepartment: "Dr. Robert Johnson",
    subjectCount: 12,
    teacherCount: 15,
    studentCount: 320,
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "DEP002",
    name: "Electronics & Communication",
    code: "ECE",
    headOfDepartment: "Dr. Emily Davis",
    subjectCount: 10,
    teacherCount: 12,
    studentCount: 280,
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  },
  {
    id: "DEP003",
    name: "Mechanical Engineering",
    code: "ME",
    headOfDepartment: "Prof. Michael Brown",
    subjectCount: 8,
    teacherCount: 10,
    studentCount: 240,
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  },
  {
    id: "DEP004",
    name: "Civil Engineering",
    code: "CE",
    headOfDepartment: "Dr. Sarah Wilson",
    subjectCount: 9,
    teacherCount: 8,
    studentCount: 210,
    color: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
  },
  {
    id: "DEP005",
    name: "Electrical Engineering",
    code: "EE",
    headOfDepartment: "Prof. James Miller",
    subjectCount: 11,
    teacherCount: 14,
    studentCount: 260,
    color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  },
  {
    id: "DEP006",
    name: "Information Technology",
    code: "IT",
    headOfDepartment: "Dr. Lisa Taylor",
    subjectCount: 10,
    teacherCount: 12,
    studentCount: 290,
    color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
  },
]

// Add sample data for sections, teachers, and students
const departmentDetails = {
  DEP001: {
    sections: [
      { id: "SEC001", name: "CSE-A", year: 1, semester: 1, students: 60 },
      { id: "SEC002", name: "CSE-B", year: 1, semester: 1, students: 60 },
      { id: "SEC003", name: "CSE-A", year: 2, semester: 3, students: 58 },
      { id: "SEC004", name: "CSE-B", year: 2, semester: 3, students: 57 },
      { id: "SEC005", name: "CSE-A", year: 3, semester: 5, students: 55 },
      { id: "SEC006", name: "CSE-B", year: 3, semester: 5, students: 56 },
      { id: "SEC007", name: "CSE-A", year: 4, semester: 7, students: 54 },
      { id: "SEC008", name: "CSE-B", year: 4, semester: 7, students: 52 },
    ],
    teachers: [
      {
        id: "TCH001",
        name: "Professor Smith",
        email: "smith@example.edu",
        designation: "Professor",
        subjects: ["Data Structures", "Algorithms"],
      },
      {
        id: "TCH002",
        name: "Dr. Johnson",
        email: "johnson@example.edu",
        designation: "HOD",
        subjects: ["Computer Networks", "Operating Systems"],
      },
      {
        id: "TCH003",
        name: "Ms. Williams",
        email: "williams@example.edu",
        designation: "Assistant Professor",
        subjects: ["Database Systems", "Web Development"],
      },
      {
        id: "TCH004",
        name: "Dr. Brown",
        email: "brown@example.edu",
        designation: "Professor",
        subjects: ["Artificial Intelligence", "Machine Learning"],
      },
      {
        id: "TCH005",
        name: "Mr. Davis",
        email: "davis@example.edu",
        designation: "Lab Assistant",
        subjects: ["Programming Lab", "Computer Graphics Lab"],
      },
    ],
    students: [
      {
        id: "STU001",
        name: "Alex Johnson",
        rollNumber: "CSE2023001",
        email: "alex.j@college.edu",
        phone: "+1 (555) 123-4567",
        rank: 5,
      },
      {
        id: "STU002",
        name: "Maria Garcia",
        rollNumber: "CSE2023002",
        email: "maria.g@college.edu",
        phone: "+1 (555) 234-5678",
        rank: 3,
      },
      {
        id: "STU003",
        name: "James Wilson",
        rollNumber: "CSE2023003",
        email: "james.w@college.edu",
        phone: "+1 (555) 345-6789",
        rank: 8,
      },
      {
        id: "STU004",
        name: "Sarah Brown",
        rollNumber: "CSE2023004",
        email: "sarah.b@college.edu",
        phone: "+1 (555) 456-7890",
        rank: 1,
      },
      {
        id: "STU005",
        name: "David Lee",
        rollNumber: "CSE2023005",
        email: "david.l@college.edu",
        phone: "+1 (555) 567-8901",
        rank: 2,
      },
    ],
  },
  DEP002: {
    sections: [
      { id: "SEC009", name: "ECE-A", year: 1, semester: 1, students: 55 },
      { id: "SEC010", name: "ECE-B", year: 1, semester: 1, students: 54 },
      { id: "SEC011", name: "ECE-A", year: 2, semester: 3, students: 52 },
      { id: "SEC012", name: "ECE-B", year: 2, semester: 3, students: 50 },
    ],
    teachers: [
      {
        id: "TCH006",
        name: "Dr. Emily Davis",
        email: "emily.d@example.edu",
        designation: "HOD",
        subjects: ["Digital Electronics", "Signals and Systems"],
      },
      {
        id: "TCH007",
        name: "Prof. Michael Chen",
        email: "michael.c@example.edu",
        designation: "Professor",
        subjects: ["Communication Systems", "Microprocessors"],
      },
    ],
    students: [
      {
        id: "STU006",
        name: "Emma Thompson",
        rollNumber: "ECE2022001",
        email: "emma.t@college.edu",
        phone: "+1 (555) 678-9012",
        rank: 4,
      },
      {
        id: "STU007",
        name: "Daniel Martinez",
        rollNumber: "ECE2022002",
        email: "daniel.m@college.edu",
        phone: "+1 (555) 789-0123",
        rank: 6,
      },
    ],
  },
}

export function DepartmentList() {
  // Add state for department detail dialog
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null)
  const [isDetailViewOpen, setIsDetailViewOpen] = useState(false)

  // Add a function to handle viewing department details
  const handleViewDetails = (departmentId: string) => {
    setSelectedDepartment(departmentId)
    setIsDetailViewOpen(true)
  }

  return (
    <Card>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Department</TableHead>
              <TableHead>Head of Department</TableHead>
              <TableHead>Subjects</TableHead>
              <TableHead>Teachers</TableHead>
              <TableHead>Students</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {departments.map((department) => (
              <TableRow key={department.id}>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium">{department.name}</span>
                    <Badge className={`w-fit mt-1 ${department.color}`}>{department.code}</Badge>
                  </div>
                </TableCell>
                <TableCell>{department.headOfDepartment}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>{department.subjectCount}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    <span>{department.teacherCount}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{department.studentCount}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" onClick={() => handleViewDetails(department.id)}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => handleViewDetails(department.id)}>
                          View details
                        </DropdownMenuItem>
                        <DropdownMenuItem>Edit department</DropdownMenuItem>
                        <DropdownMenuItem>Manage subjects</DropdownMenuItem>
                        <DropdownMenuItem>Manage teachers</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">Delete department</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {selectedDepartment && departmentDetails[selectedDepartment] && (
        <Dialog open={isDetailViewOpen} onOpenChange={setIsDetailViewOpen}>
          <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
            <DepartmentDetail
              department={{
                ...departments.find((d) => d.id === selectedDepartment)!,
                sections: departmentDetails[selectedDepartment].sections,
                teachers: departmentDetails[selectedDepartment].teachers,
                students: departmentDetails[selectedDepartment].students,
              }}
            />
          </DialogContent>
        </Dialog>
      )}
    </Card>
  )
}
