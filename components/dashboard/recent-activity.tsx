import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ActivityItem {
  id: string
  user: {
    name: string
    avatar?: string
    email: string
  }
  action: string
  timestamp: string
}

const recentActivities: ActivityItem[] = [
  {
    id: "1",
    user: {
      name: "John Doe",
      email: "john.doe@example.com",
    },
    action: "completed Math 101 quiz with score 95%",
    timestamp: "2 minutes ago",
  },
  {
    id: "2",
    user: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
    },
    action: "created a new Science module",
    timestamp: "1 hour ago",
  },
  {
    id: "3",
    user: {
      name: "Robert Johnson",
      email: "robert.j@example.com",
    },
    action: "added 15 students to Group A",
    timestamp: "3 hours ago",
  },
  {
    id: "4",
    user: {
      name: "Emily Davis",
      email: "emily.d@example.com",
    },
    action: "assigned Teacher Mark to History 202",
    timestamp: "5 hours ago",
  },
  {
    id: "5",
    user: {
      name: "Michael Brown",
      email: "michael.b@example.com",
    },
    action: "generated end-of-term reports",
    timestamp: "Yesterday",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions across the platform</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                <AvatarFallback>
                  {activity.user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{activity.user.name}</p>
                <p className="text-sm text-muted-foreground">{activity.action}</p>
                <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
