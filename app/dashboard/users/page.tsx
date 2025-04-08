import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { UserManagement } from "@/components/users/user-management"

export default function UsersPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="User Management" description="Manage teachers and students in your platform" />
      <UserManagement />
    </DashboardShell>
  )
}
