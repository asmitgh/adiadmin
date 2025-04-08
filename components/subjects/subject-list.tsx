"use client"

import { useState } from "react"
import { MoreHorizontal, BookOpen, Users, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { SubjectDetailView } from "@/components/subjects/subject-detail-view"

interface Module {
  id: string
  name: string
  duration: string
  description: string
}

interface Subject {
  id: string
  name: string
  code: string
  department: string
  credits: number
  students: number
  modules: number
  description: string
  modulesList: Module[]
}

const subjects: Subject[] = [
  {
    id: "SUB001",
    name: "Introduction to Computer Science",
    code: "CS101",
    department: "Computer Science",
    credits: 4,
    students: 120,
    modules: 5,
    description:
      "This course provides a broad introduction to computer science and the fundamental concepts of computing. Topics include algorithms, data structures, programming languages, computer architecture, and the impact of computing on society.",
    modulesList: [
      {
        id: "MOD001",
        name: "Introduction to Programming",
        duration: "3 weeks",
        description:
          "Basic programming concepts using Python, including variables, data types, control structures, and functions.",
      },
      {
        id: "MOD002",
        name: "Data Structures",
        duration: "4 weeks",
        description:
          "Introduction to fundamental data structures including arrays, linked lists, stacks, queues, and trees.",
      },
      {
        id: "MOD003",
        name: "Algorithms",
        duration: "3 weeks",
        description:
          "Basic algorithmic concepts, complexity analysis, and common algorithms for searching and sorting.",
      },
      {
        id: "MOD004",
        name: "Computer Architecture",
        duration: "2 weeks",
        description: "Introduction to computer organization, memory hierarchy, and basic digital logic.",
      },
      {
        id: "MOD005",
        name: "Computing Ethics",
        duration: "2 weeks",
        description: "Ethical considerations in computing, privacy, security, and social impact of technology.",
      },
    ],
  },
  {
    id: "SUB002",
    name: "Calculus I",
    code: "MATH101",
    department: "Mathematics",
    credits: 3,
    students: 150,
    modules: 4,
    description:
      "An introduction to differential and integral calculus. Topics include limits, continuity, derivatives, applications of derivatives, and basic integration techniques.",
    modulesList: [
      {
        id: "MOD006",
        name: "Limits and Continuity",
        duration: "3 weeks",
        description: "Introduction to the concept of limits and continuity of functions.",
      },
      {
        id: "MOD007",
        name: "Differentiation",
        duration: "4 weeks",
        description: "Rules of differentiation, chain rule, implicit differentiation, and applications.",
      },
      {
        id: "MOD008",
        name: "Applications of Derivatives",
        duration: "3 weeks",
        description: "Optimization problems, related rates, curve sketching, and L'Hôpital's rule.",
      },
      {
        id: "MOD009",
        name: "Integration",
        duration: "4 weeks",
        description:
          "Definite and indefinite integrals, fundamental theorem of calculus, and basic integration techniques.",
      },
    ],
  },
  {
    id: "SUB003",
    name: "Digital Electronics",
    code: "ECE201",
    department: "Electronics",
    credits: 4,
    students: 90,
    modules: 6,
    description:
      "This course covers the fundamentals of digital electronics, including Boolean algebra, logic gates, combinational and sequential circuits, and digital system design.",
    modulesList: [
      {
        id: "MOD010",
        name: "Boolean Algebra",
        duration: "2 weeks",
        description: "Introduction to Boolean algebra, logic operations, and simplification techniques.",
      },
      {
        id: "MOD011",
        name: "Logic Gates",
        duration: "2 weeks",
        description: "Study of basic logic gates, their operation, and implementation using transistors.",
      },
      {
        id: "MOD012",
        name: "Combinational Circuits",
        duration: "3 weeks",
        description: "Design and analysis of combinational circuits, including multiplexers, decoders, and adders.",
      },
      {
        id: "MOD013",
        name: "Sequential Circuits",
        duration: "3 weeks",
        description: "Flip-flops, registers, counters, and state machine design.",
      },
      {
        id: "MOD014",
        name: "Memory Systems",
        duration: "2 weeks",
        description: "RAM, ROM, and other memory technologies and their applications.",
      },
      {
        id: "MOD015",
        name: "Digital System Design",
        duration: "2 weeks",
        description: "Integrated approach to designing complex digital systems using HDLs.",
      },
    ],
  },
]

export function SubjectList() {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null)
  const [isDetailViewOpen, setIsDetailViewOpen] = useState(false)

  const handleViewDetails = (subject: Subject) => {
    setSelectedSubject(subject)
    setIsDetailViewOpen(true)
  }

  return (
    <>
      <Card>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Credits</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Modules</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subjects.map((subject) => (
                <TableRow key={subject.id}>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">{subject.name}</span>
                      <Badge className="w-fit mt-1">{subject.code}</Badge>
                    </div>
                  </TableCell>
                  <TableCell>{subject.department}</TableCell>
                  <TableCell>{subject.credits}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{subject.students}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span>{subject.modules}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" onClick={() => handleViewDetails(subject)}>
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
                          <DropdownMenuItem onClick={() => handleViewDetails(subject)}>View details</DropdownMenuItem>
                          <DropdownMenuItem>Edit subject</DropdownMenuItem>
                          <DropdownMenuItem>Manage modules</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">Delete subject</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {selectedSubject && (
        <Dialog open={isDetailViewOpen} onOpenChange={setIsDetailViewOpen}>
          <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
            <SubjectDetailView
              subject={{
                ...selectedSubject,
                modules: selectedSubject.modulesList.length,
                modulesList: selectedSubject.modulesList,
              }}
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
