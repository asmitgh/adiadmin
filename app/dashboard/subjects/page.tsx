import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { SubjectManagement } from "@/components/subjects/subject-management"

export default function SubjectsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Subject Management" description="Manage subjects and modules in your platform" />
      <SubjectManagement />
    </DashboardShell>
  )
}
