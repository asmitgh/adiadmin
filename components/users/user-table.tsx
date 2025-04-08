"use client"

import { useState } from "react"
import { FileText } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TeacherDesignationBadge } from "@/components/users/teacher-designation-badge"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Ban, Trash2, Mail, Lock } from "lucide-react"

interface User {
  id: string
  name: string
  email: string
  status: "active" | "inactive" | "pending" | "suspended"
  role: string
  lastActive: string
  department?: string
  joiningDate?: string
  phone?: string
  lateCount?: number
  admissionSession?: string
  fatherName?: string
  motherName?: string
  dateOfBirth?: string
  address?: string
  designation?: string
}

const studentData: User[] = [
  {
    id: "STU001",
    name: "Alex Johnson",
    email: "alex.j@example.com",
    status: "active",
    role: "Student",
    lastActive: "Just now",
    department: "Computer Science",
    admissionSession: "2023-2024",
    fatherName: "Robert Johnson",
    motherName: "Mary Johnson",
    dateOfBirth: "2002-05-15",
    address: "123 College St, Anytown, USA",
    phone: "+1 (555) 123-4567",
  },
  {
    id: "STU002",
    name: "Maria Garcia",
    email: "maria.g@example.com",
    status: "active",
    role: "Student",
    lastActive: "2 hours ago",
    department: "Electronics",
    admissionSession: "2022-2023",
    fatherName: "Carlos Garcia",
    motherName: "Elena Garcia",
    dateOfBirth: "2001-08-22",
    address: "456 University Ave, Collegetown, USA",
    phone: "+1 (555) 234-5678",
  },
  {
    id: "STU003",
    name: "James Wilson",
    email: "james.w@example.com",
    status: "inactive",
    role: "Student",
    lastActive: "3 days ago",
    department: "Mechanical",
    admissionSession: "2021-2022",
    fatherName: "Thomas Wilson",
    motherName: "Sarah Wilson",
    dateOfBirth: "2000-11-10",
    address: "789 Campus Dr, Eduville, USA",
    phone: "+1 (555) 345-6789",
  },
  {
    id: "STU004",
    name: "Sarah Brown",
    email: "sarah.b@example.com",
    status: "pending",
    role: "Student",
    lastActive: "Never",
    department: "Civil",
    admissionSession: "2023-2024",
    fatherName: "Michael Brown",
    motherName: "Jennifer Brown",
    dateOfBirth: "2003-02-28",
    address: "101 Academic Blvd, Schooltown, USA",
    phone: "+1 (555) 456-7890",
  },
  {
    id: "STU005",
    name: "David Lee",
    email: "david.l@example.com",
    status: "active",
    role: "Student",
    lastActive: "1 hour ago",
    department: "Information Technology",
    admissionSession: "2022-2023",
    fatherName: "William Lee",
    motherName: "Patricia Lee",
    dateOfBirth: "2002-07-14",
    address: "202 Learning Ln, Educity, USA",
    phone: "+1 (555) 567-8901",
  },
]

const teacherData: User[] = [
  {
    id: "TCH001",
    name: "Professor Smith",
    email: "prof.smith@example.com",
    status: "active",
    role: "Math Teacher",
    lastActive: "Just now",
    department: "Mathematics",
    joiningDate: "2018-08-15",
    phone: "+1 (555) 987-6543",
    lateCount: 2,
    designation: "Professor",
  },
  {
    id: "TCH002",
    name: "Dr. Johnson",
    email: "dr.johnson@example.com",
    status: "active",
    role: "Science Teacher",
    lastActive: "3 hours ago",
    department: "Physics",
    joiningDate: "2019-06-10",
    phone: "+1 (555) 876-5432",
    lateCount: 0,
    designation: "HOD",
  },
  {
    id: "TCH003",
    name: "Ms. Williams",
    email: "ms.williams@example.com",
    status: "inactive",
    role: "History Teacher",
    lastActive: "1 week ago",
    department: "History",
    joiningDate: "2020-01-20",
    phone: "+1 (555) 765-4321",
    lateCount: 5,
    designation: "Assistant Professor",
  },
]

const adminData: User[] = [
  {
    id: "ADM001",
    name: "Admin User",
    email: "admin@example.com",
    status: "active",
    role: "System Administrator",
    lastActive: "Just now",
    phone: "+1 (555) 123-0000",
  },
  {
    id: "ADM002",
    name: "Jane Admin",
    email: "jane.admin@example.com",
    status: "active",
    role: "Department Head",
    lastActive: "Yesterday",
    department: "Administration",
    phone: "+1 (555) 123-1111",
  },
]

studentData.push({
  id: "STU006",
  name: "John Suspended",
  email: "john.s@example.com",
  status: "suspended",
  role: "Student",
  lastActive: "2 weeks ago",
  department: "Computer Science",
  admissionSession: "2022-2023",
  fatherName: "Mark Suspended",
  motherName: "Lisa Suspended",
  dateOfBirth: "2002-03-15",
  address: "303 Suspension St, Anytown, USA",
  phone: "+1 (555) 999-8888",
})

interface UserTableProps {
  userType: "student" | "teacher" | "admin"
}

export function UserTable({ userType }: UserTableProps) {
  const [users, setUsers] = useState<User[]>(() => {
    switch (userType) {
      case "student":
        return studentData
      case "teacher":
        return teacherData
      case "admin":
        return adminData
      default:
        return []
    }
  })

  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isUserDetailsOpen, setIsUserDetailsOpen] = useState(false)

  const [showPasswordReset, setShowPasswordReset] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [showSuspendConfirm, setShowSuspendConfirm] = useState(false)

  const handleViewDetails = (user: User) => {
    setSelectedUser(user)
    setIsUserDetailsOpen(true)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "inactive":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "suspended":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return ""
    }
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              {userType === "teacher" && <TableHead>Department</TableHead>}
              {userType === "student" && <TableHead>Session</TableHead>}
              {userType === "teacher" && <TableHead>Designation</TableHead>}
              <TableHead>Status</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={`/placeholder.svg?text=${user.name.charAt(0)}`} alt={user.name} />
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-medium">{user.name}</span>
                      <span className="text-xs text-muted-foreground">{user.email}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                {userType === "teacher" && <TableCell>{user.department}</TableCell>}
                {userType === "student" && <TableCell>{user.admissionSession}</TableCell>}
                {userType === "teacher" && (
                  <TableCell>
                    {user.designation && <TeacherDesignationBadge designation={user.designation as any} />}
                  </TableCell>
                )}
                <TableCell>
                  <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                </TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.lastActive}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" title="Edit Email">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" title="Reset Password">
                      <Lock className="h-4 w-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-amber-500" title="Suspend Account">
                          <Ban className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Suspend User Account</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to suspend this user account? The user will not be able to access the
                            system until the account is reactivated.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction className="bg-amber-600 hover:bg-amber-700">
                            Suspend Account
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-red-500" title="Delete Account">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete User Account</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete this user account? This action cannot be undone and all user
                            data will be permanently removed.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction className="bg-red-600 hover:bg-red-700">Delete Account</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {selectedUser && (
        <Dialog open={isUserDetailsOpen} onOpenChange={setIsUserDetailsOpen}>
          <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>User Details</DialogTitle>
              <DialogDescription>Detailed information about {selectedUser.name}</DialogDescription>
            </DialogHeader>

            {userType === "student" ? (
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="basic">Basic Info</TabsTrigger>
                  <TabsTrigger value="personal">Personal Details</TabsTrigger>
                  <TabsTrigger value="parents">Parent Details</TabsTrigger>
                </TabsList>
                <TabsContent value="basic" className="space-y-4 pt-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage
                        src={`/placeholder.svg?text=${selectedUser.name.charAt(0)}`}
                        alt={selectedUser.name}
                      />
                      <AvatarFallback className="text-2xl">
                        {selectedUser.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">{selectedUser.name}</h3>
                      <p className="text-muted-foreground">{selectedUser.role}</p>
                      <Badge className={`mt-1 ${getStatusColor(selectedUser.status)}`}>{selectedUser.status}</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Student ID</p>
                      <p>{selectedUser.id}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Department</p>
                      <p>{selectedUser.department}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p>{selectedUser.email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p>{selectedUser.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Admission Session</p>
                      <p>{selectedUser.admissionSession}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Last Active</p>
                      <p>{selectedUser.lastActive}</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="personal" className="space-y-4 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Date of Birth</p>
                      <p>{selectedUser.dateOfBirth}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Gender</p>
                      <p>Male</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Residential Address</p>
                    <p>{selectedUser.address}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Religion</p>
                      <p>Christianity</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Caste</p>
                      <p>N/A</p>
                    </div>
                  </div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Payment History</CardTitle>
                      <CardDescription>Recent payments and upcoming dues</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Tuition Fee - Fall 2023</p>
                            <p className="text-sm text-muted-foreground">Due: Sep 15, 2023</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                            Paid
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Lab Fee - Fall 2023</p>
                            <p className="text-sm text-muted-foreground">Due: Sep 30, 2023</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                            Paid
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Tuition Fee - Spring 2024</p>
                            <p className="text-sm text-muted-foreground">Due: Jan 15, 2024</p>
                          </div>
                          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                            Upcoming
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="parents" className="space-y-4 pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Father's Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium">Name</p>
                          <p>{selectedUser.fatherName}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Phone</p>
                          <p>+1 (555) 987-6543</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Email</p>
                          <p>father@example.com</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">WhatsApp</p>
                          <p>+1 (555) 987-6543</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Mother's Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium">Name</p>
                          <p>{selectedUser.motherName}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Phone</p>
                          <p>+1 (555) 123-4567</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Email</p>
                          <p>mother@example.com</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">WhatsApp</p>
                          <p>+1 (555) 123-4567</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            ) : userType === "teacher" ? (
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="basic">Basic Info</TabsTrigger>
                  <TabsTrigger value="assignments">Assignments</TabsTrigger>
                  <TabsTrigger value="attendance">Attendance</TabsTrigger>
                </TabsList>
                <TabsContent value="basic" className="space-y-4 pt-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage
                        src={`/placeholder.svg?text=${selectedUser.name.charAt(0)}`}
                        alt={selectedUser.name}
                      />
                      <AvatarFallback className="text-2xl">
                        {selectedUser.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">{selectedUser.name}</h3>
                      <p className="text-muted-foreground">{selectedUser.role}</p>
                      <Badge className={`mt-1 ${getStatusColor(selectedUser.status)}`}>{selectedUser.status}</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Teacher ID</p>
                      <p>{selectedUser.id}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Department</p>
                      <p>{selectedUser.department}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p>{selectedUser.email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p>{selectedUser.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Joining Date</p>
                      <p>{selectedUser.joiningDate}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Last Active</p>
                      <p>{selectedUser.lastActive}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <FileText className="h-4 w-4" />
                      Download CV
                    </Button>
                    <Button variant="outline" size="sm">
                      Change Password
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="assignments" className="space-y-4 pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Subject Assignments</CardTitle>
                      <CardDescription>Subjects and classes assigned to this teacher</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Mathematics 101</p>
                            <p className="text-sm text-muted-foreground">CSE - Year 1</p>
                          </div>
                          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                            Active
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Advanced Calculus</p>
                            <p className="text-sm text-muted-foreground">ECE - Year 2</p>
                          </div>
                          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                            Active
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Statistics</p>
                            <p className="text-sm text-muted-foreground">IT - Year 1</p>
                          </div>
                          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                            Active
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="attendance" className="space-y-4 pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Attendance Summary</CardTitle>
                      <CardDescription>Attendance record for the current academic year</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <p className="text-sm font-medium">Working Days</p>
                            <p className="text-sm font-medium">180 / 220</p>
                          </div>
                          <Progress value={82} className="h-2" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <p className="text-sm font-medium">Present Days</p>
                            <p className="text-sm font-medium">175 / 180</p>
                          </div>
                          <Progress value={97} className="h-2" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <p className="text-sm font-medium">Absent Days</p>
                            <p className="text-sm font-medium">5 / 180</p>
                          </div>
                          <Progress value={3} className="h-2" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <p className="text-sm font-medium">Late Days</p>
                            <p className="text-sm font-medium">{selectedUser.lateCount} / 180</p>
                          </div>
                          <Progress value={(selectedUser.lateCount || 0) / 1.8} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={`/placeholder.svg?text=${selectedUser.name.charAt(0)}`} alt={selectedUser.name} />
                    <AvatarFallback className="text-2xl">
                      {selectedUser.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">{selectedUser.name}</h3>
                    <p className="text-muted-foreground">{selectedUser.role}</p>
                    <Badge className={`mt-1 ${getStatusColor(selectedUser.status)}`}>{selectedUser.status}</Badge>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Admin ID</p>
                    <p>{selectedUser.id}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Department</p>
                    <p>{selectedUser.department || "System Administration"}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p>{selectedUser.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p>{selectedUser.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Last Active</p>
                    <p>{selectedUser.lastActive}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Access Level</p>
                    <p>Full System Access</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Reset Password
                  </Button>
                  <Button variant="outline" size="sm">
                    Edit Permissions
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
