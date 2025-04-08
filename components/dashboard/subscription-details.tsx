import { CreditCard, Calendar, User, Smartphone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SubscriptionDetails() {
  return (
    <Card className="bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Subscription Details</CardTitle>
            <CardDescription>Your current subscription plan and usage</CardDescription>
          </div>
          <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white">GOLD</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-yellow-500" />
            <div>
              <p className="text-sm font-medium">Credits Left</p>
              <p className="text-lg font-bold">12,500</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <User className="h-5 w-5 text-yellow-500" />
            <div>
              <p className="text-sm font-medium">Administrator</p>
              <p className="text-lg font-bold">John Smith</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-yellow-500" />
            <div>
              <p className="text-sm font-medium">Expiration Date</p>
              <p className="text-lg font-bold">December 31, 2023</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Smartphone className="h-5 w-5 text-yellow-500" />
            <div>
              <p className="text-sm font-medium">Devices</p>
              <p className="text-lg font-bold">25 / 50 Used</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
