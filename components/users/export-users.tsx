"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import * as XLSX from "xlsx"

// Sample data - in a real app, this would come from your database
const studentData = [
  {
    id: "STU001",
    name: "Alex Johnson",
    email: "alex.j@example.com",
    status: "active",
    role: "Student",
    department: "Computer Science",
    admissionSession: "2023-2024",
    fatherName: "Robert Johnson",
    motherName: "Mary Johnson",
    dateOfBirth: "2002-05-15",
    address: "123 College St, Anytown, USA",
    phone: "+1 (555) 123-4567",
    collegeEmail: "alex.j@college.edu",
    rollNumber: "CS2023001",
    rank: 5,
  },
  {
    id: "STU002",
    name: "Maria Garcia",
    email: "maria.g@example.com",
    status: "active",
    role: "Student",
    department: "Electronics",
    admissionSession: "2022-2023",
    fatherName: "Carlos Garcia",
    motherName: "Elena Garcia",
    dateOfBirth: "2001-08-22",
    address: "456 University Ave, Collegetown, USA",
    phone: "+1 (555) 234-5678",
    collegeEmail: "maria.g@college.edu",
    rollNumber: "EC2022015",
    rank: 3,
  },
  // More student data would be here
]

const teacherData = [
  {
    id: "TCH001",
    name: "Professor Smith",
    email: "prof.smith@example.com",
    status: "active",
    role: "Math Teacher",
    designation: "Professor",
    department: "Mathematics",
    joiningDate: "2018-08-15",
    phone: "+1 (555) 987-6543",
    lateCount: 2,
    collegeEmail: "smith@college.edu",
    subjects: ["Calculus", "Linear Algebra"],
  },
  {
    id: "TCH002",
    name: "Dr. Johnson",
    email: "dr.johnson@example.com",
    status: "active",
    role: "Science Teacher",
    designation: "HOD",
    department: "Physics",
    joiningDate: "2019-06-10",
    phone: "+1 (555) 876-5432",
    lateCount: 0,
    collegeEmail: "johnson@college.edu",
    subjects: ["Mechanics", "Thermodynamics"],
  },
  // More teacher data would be here
]

const adminData = [
  {
    id: "ADM001",
    name: "Admin User",
    email: "admin@example.com",
    status: "active",
    role: "System Administrator",
    lastActive: "Just now",
    phone: "+1 (555) 123-0000",
    collegeEmail: "admin@college.edu",
    permissions: "Full Access",
  },
  // More admin data would be here
]

export function ExportUsers() {
  const [isExporting, setIsExporting] = useState(false)

  const handleExport = async () => {
    setIsExporting(true)

    try {
      // Create a new workbook
      const workbook = XLSX.utils.book_new()

      // Create worksheets for each user type
      const studentWorksheet = XLSX.utils.json_to_sheet(studentData)
      const teacherWorksheet = XLSX.utils.json_to_sheet(teacherData)
      const adminWorksheet = XLSX.utils.json_to_sheet(adminData)

      // Add the worksheets to the workbook
      XLSX.utils.book_append_sheet(workbook, studentWorksheet, "Students")
      XLSX.utils.book_append_sheet(workbook, teacherWorksheet, "Teachers")
      XLSX.utils.book_append_sheet(workbook, adminWorksheet, "Administrators")

      // Generate Excel file
      XLSX.writeFile(workbook, "EduAdmin_Users_Export.xlsx")
    } catch (error) {
      console.error("Error exporting users:", error)
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <Button variant="outline" size="sm" className="h-9 gap-1" onClick={handleExport} disabled={isExporting}>
      <Download className="h-4 w-4" />
      <span>{isExporting ? "Exporting..." : "Export"}</span>
    </Button>
  )
}
