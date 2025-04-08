"use client"

import { useState } from "react"
import { Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DepartmentList } from "@/components/departments/department-list"
import { AddDepartmentDialog } from "@/components/departments/add-department-dialog"

export function DepartmentManagement() {
  const [isAddDepartmentOpen, setIsAddDepartmentOpen] = useState(false)

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Input placeholder="Search departments..." className="h-9 w-full sm:w-[300px]" />
          <Button variant="outline" size="sm" className="h-9">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" className="h-9 gap-1" onClick={() => setIsAddDepartmentOpen(true)}>
            <Plus className="h-4 w-4" />
            <span>Add Department</span>
          </Button>
        </div>
      </div>

      <DepartmentList />
      <AddDepartmentDialog open={isAddDepartmentOpen} onOpenChange={setIsAddDepartmentOpen} />
    </div>
  )
}
