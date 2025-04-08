import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { GroupManagement } from "@/components/groups/group-management"

export default function GroupsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Group Management" description="Manage student groups and teacher assignments" />
      <GroupManagement />
    </DashboardShell>
  )
}
