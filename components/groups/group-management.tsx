"use client"

import { useState } from "react"
import { Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GroupList } from "@/components/groups/group-list"
import { TeacherAssignments } from "@/components/groups/teacher-assignments"
import { AddGroupDialog } from "@/components/groups/add-group-dialog"
import { AssignTeacherDialog } from "@/components/groups/assign-teacher-dialog"

export function GroupManagement() {
  const [isAddGroupOpen, setIsAddGroupOpen] = useState(false)
  const [isAssignTeacherOpen, setIsAssignTeacherOpen] = useState(false)

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Input placeholder="Search groups..." className="h-9 w-full sm:w-[300px]" />
          <Button variant="outline" size="sm" className="h-9">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" className="h-9 gap-1" onClick={() => setIsAddGroupOpen(true)}>
            <Plus className="h-4 w-4" />
            <span>Add Group</span>
          </Button>
          <Button size="sm" className="h-9 gap-1" onClick={() => setIsAssignTeacherOpen(true)}>
            <Plus className="h-4 w-4" />
            <span>Assign Teacher</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="groups" className="w-full">
        <TabsList>
          <TabsTrigger value="groups">Student Groups</TabsTrigger>
          <TabsTrigger value="assignments">Teacher Assignments</TabsTrigger>
        </TabsList>
        <TabsContent value="groups">
          <GroupList />
        </TabsContent>
        <TabsContent value="assignments">
          <TeacherAssignments />
        </TabsContent>
      </Tabs>

      <AddGroupDialog open={isAddGroupOpen} onOpenChange={setIsAddGroupOpen} />
      <AssignTeacherDialog open={isAssignTeacherOpen} onOpenChange={setIsAssignTeacherOpen} />
    </div>
  )
}
