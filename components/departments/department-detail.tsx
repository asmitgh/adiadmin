"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TeacherDesignationBadge } from "@/components/users/teacher-designation-badge"

interface Section {
  id: string
  name: string
  year: number
  semester: number
  students: number
}

interface Teacher {
  id: string
  name: string
  email: string
  designation: string
  subjects: string[]
}

interface Student {
  id: string
  name: string
  rollNumber: string
  email: string
  phone: string
  rank: number
}

interface DepartmentDetailProps {
  department: {
    id: string
    name: string
    code: string
    headOfDepartment: string
    sections: Section[]
    teachers: Teacher[]
    students: Student[]
  }
}

export function DepartmentDetail({ department }: DepartmentDetailProps) {
  const [selectedSection, setSelectedSection] = useState<string | null>(null)

  // Group students by section
  const studentsBySection = department.students.reduce(
    (acc, student) => {
      const sectionId = student.id.substring(0, 6) // Just for demo, in real app would use actual section ID
      if (!acc[sectionId]) {
        acc[sectionId] = []
      }
      acc[sectionId].push(student)
      return acc
    },
    {} as Record<string, Student[]>,
  )

  // Group teachers by section based on subjects they teach
  const teachersBySection = department.teachers.reduce(
    (acc, teacher) => {
      // Just for demo, in real app would use actual section mapping
      const sectionId = teacher.id.substring(0, 6)
      if (!acc[sectionId]) {
        acc[sectionId] = []
      }
      acc[sectionId].push(teacher)
      return acc
    },
    {} as Record<string, Teacher[]>,
  )

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">{department.name}</CardTitle>
        <CardDescription>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{department.code}</Badge>
            <span>•</span>
            <span>Head: {department.headOfDepartment}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="sections" className="w-full">
          <TabsList>
            <TabsTrigger value="sections">Sections</TabsTrigger>
            <TabsTrigger value="teachers">Teachers</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
          </TabsList>

          <TabsContent value="sections" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Department Sections</CardTitle>
                <CardDescription>All sections in the {department.name} department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Section</TableHead>
                        <TableHead>Year</TableHead>
                        <TableHead>Semester</TableHead>
                        <TableHead>Students</TableHead>
                        <TableHead>Teachers</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {department.sections.map((section) => (
                        <TableRow
                          key={section.id}
                          className="cursor-pointer hover:bg-muted/50"
                          onClick={() => setSelectedSection(section.id === selectedSection ? null : section.id)}
                        >
                          <TableCell>
                            <div className="font-medium">{section.name}</div>
                          </TableCell>
                          <TableCell>{section.year}</TableCell>
                          <TableCell>{section.semester}</TableCell>
                          <TableCell>{section.students}</TableCell>
                          <TableCell>{teachersBySection[section.id]?.length || 0}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {selectedSection && (
              <Card>
                <CardHeader>
                  <CardTitle>{department.sections.find((s) => s.id === selectedSection)?.name} Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="teachers">
                    <TabsList>
                      <TabsTrigger value="teachers">Teachers</TabsTrigger>
                      <TabsTrigger value="students">Students</TabsTrigger>
                    </TabsList>

                    <TabsContent value="teachers" className="pt-4">
                      <div className="rounded-md border">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Teacher</TableHead>
                              <TableHead>Designation</TableHead>
                              <TableHead>Subjects</TableHead>
                              <TableHead>Email</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {(teachersBySection[selectedSection] || []).map((teacher) => (
                              <TableRow key={teacher.id}>
                                <TableCell>
                                  <div className="flex items-center gap-3">
                                    <Avatar className="h-8 w-8">
                                      <AvatarImage
                                        src={`/placeholder.svg?text=${teacher.name.charAt(0)}`}
                                        alt={teacher.name}
                                      />
                                      <AvatarFallback>
                                        {teacher.name
                                          .split(" ")
                                          .map((n) => n[0])
                                          .join("")}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div className="font-medium">{teacher.name}</div>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <TeacherDesignationBadge designation={teacher.designation as any} />
                                </TableCell>
                                <TableCell>
                                  <div className="flex flex-wrap gap-1">
                                    {teacher.subjects.map((subject) => (
                                      <Badge key={subject} variant="outline">
                                        {subject}
                                      </Badge>
                                    ))}
                                  </div>
                                </TableCell>
                                <TableCell>{teacher.email}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>

                    <TabsContent value="students" className="pt-4">
                      <div className="rounded-md border">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Student</TableHead>
                              <TableHead>Roll Number</TableHead>
                              <TableHead>Rank</TableHead>
                              <TableHead>Email</TableHead>
                              <TableHead>Phone</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {(studentsBySection[selectedSection] || []).map((student) => (
                              <TableRow key={student.id}>
                                <TableCell>
                                  <div className="flex items-center gap-3">
                                    <Avatar className="h-8 w-8">
                                      <AvatarImage
                                        src={`/placeholder.svg?text=${student.name.charAt(0)}`}
                                        alt={student.name}
                                      />
                                      <AvatarFallback>
                                        {student.name
                                          .split(" ")
                                          .map((n) => n[0])
                                          .join("")}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div className="font-medium">{student.name}</div>
                                  </div>
                                </TableCell>
                                <TableCell>{student.rollNumber}</TableCell>
                                <TableCell>{student.rank}</TableCell>
                                <TableCell>{student.email}</TableCell>
                                <TableCell>{student.phone}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="teachers" className="space-y-4 pt-4">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Teacher</TableHead>
                    <TableHead>Designation</TableHead>
                    <TableHead>Subjects</TableHead>
                    <TableHead>Email</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {department.teachers.map((teacher) => (
                    <TableRow key={teacher.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={`/placeholder.svg?text=${teacher.name.charAt(0)}`} alt={teacher.name} />
                            <AvatarFallback>
                              {teacher.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="font-medium">{teacher.name}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <TeacherDesignationBadge designation={teacher.designation as any} />
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {teacher.subjects.map((subject) => (
                            <Badge key={subject} variant="outline">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{teacher.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-4 pt-4">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Roll Number</TableHead>
                    <TableHead>Rank</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {department.students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={`/placeholder.svg?text=${student.name.charAt(0)}`} alt={student.name} />
                            <AvatarFallback>
                              {student.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="font-medium">{student.name}</div>
                        </div>
                      </TableCell>
                      <TableCell>{student.rollNumber}</TableCell>
                      <TableCell>{student.rank}</TableCell>
                      <TableCell>{student.email}</TableCell>
                      <TableCell>{student.phone}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
