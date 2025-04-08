import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DepartmentManagement } from "@/components/departments/department-management"

export default function DepartmentsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Department Management" description="Manage academic departments in your institution" />
      <DepartmentManagement />
    </DashboardShell>
  )
}
