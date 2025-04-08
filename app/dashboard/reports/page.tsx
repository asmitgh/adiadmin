import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { ReportsDashboard } from "@/components/reports/reports-dashboard"

export default function ReportsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Reports" description="View detailed analytics and reports" />
      <ReportsDashboard />
    </DashboardShell>
  )
}
