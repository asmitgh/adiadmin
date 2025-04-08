import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { SubscriptionManagement } from "@/components/subscription/subscription-management"

export default function SubscriptionPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Subscription Management" description="Manage your subscription plan and billing" />
      <SubscriptionManagement />
    </DashboardShell>
  )
}
