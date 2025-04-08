"use client"

import { Progress } from "@/components/ui/progress"

interface SubjectPerformanceData {
  subject: string
  score: number
  change: number
}

const subjectData: SubjectPerformanceData[] = [
  { subject: "Mathematics", score: 82, change: 5 },
  { subject: "Science", score: 78, change: 3 },
  { subject: "History", score: 74, change: -2 },
  { subject: "English", score: 85, change: 7 },
  { subject: "Art", score: 88, change: 4 },
  { subject: "Computer Science", score: 80, change: 6 },
]

export function SubjectPerformance() {
  return (
    <div className="space-y-6">
      {subjectData.map((item) => (
        <div key={item.subject} className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-medium">{item.subject}</span>
            <div className="flex items-center gap-2">
              <span className="font-bold">{item.score}%</span>
              <span className={`text-xs ${item.change > 0 ? "text-green-500" : "text-red-500"}`}>
                {item.change > 0 ? `+${item.change}%` : `${item.change}%`}
              </span>
            </div>
          </div>
          <Progress value={item.score} className="h-2" />
        </div>
      ))}
    </div>
  )
}
