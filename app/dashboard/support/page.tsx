import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { SupportAndFaq } from "@/components/support/support-and-faq"

export default function SupportPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Support & FAQ" description="Get help and find answers to common questions" />
      <SupportAndFaq />
    </DashboardShell>
  )
}
