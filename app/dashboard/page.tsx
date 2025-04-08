import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { SubscriptionDetails } from "@/components/dashboard/subscription-details"
import { UserGrowthChart } from "@/components/dashboard/user-growth-chart"
import { SubjectProgressChart } from "@/components/dashboard/subject-progress-chart"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" description="Overview of your educational platform" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardStats />
      </div>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3 mt-4">
        <div className="lg:col-span-2">
          <UserGrowthChart />
        </div>
        <div className="lg:col-span-1">
          <SubscriptionDetails />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3 mt-4">
        <div className="lg:col-span-2">
          <SubjectProgressChart />
        </div>
        <div className="lg:col-span-1">
          <RecentActivity />
        </div>
      </div>
    </DashboardShell>
  )
}
