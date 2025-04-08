import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type TeacherDesignation = "HOD" | "Department Coordinator" | "Professor" | "Assistant Professor" | "Lab Assistant"

interface TeacherDesignationBadgeProps {
  designation: TeacherDesignation
  className?: string
}

export function TeacherDesignationBadge({ designation, className }: TeacherDesignationBadgeProps) {
  const getDesignationColor = (designation: TeacherDesignation) => {
    switch (designation) {
      case "HOD":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "Department Coordinator":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Professor":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Assistant Professor":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
      case "Lab Assistant":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return <Badge className={cn(getDesignationColor(designation), className)}>{designation}</Badge>
}
