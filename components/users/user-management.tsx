"use client"

import { useState } from "react"
import { Plus, SlidersHorizontal, UserPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserTable } from "@/components/users/user-table"
import { AddUserDialog } from "@/components/users/add-user-dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExportUsers } from "@/components/users/export-users"

export function UserManagement() {
  const [isAddUserOpen, setIsAddUserOpen] = useState(false)

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Input placeholder="Search users..." className="h-9 w-full sm:w-[300px]" />
          <Button variant="outline" size="sm" className="h-9 gap-1">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="hidden sm:inline-flex">Filters</span>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <ExportUsers />
          <Button variant="outline" size="sm" className="h-9 gap-1">
            <UserPlus className="h-4 w-4" />
            <span>Batch Import</span>
          </Button>
          <Button size="sm" className="h-9 gap-1" onClick={() => setIsAddUserOpen(true)}>
            <Plus className="h-4 w-4" />
            <span>Add User</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="students" className="w-full">
        <TabsList>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="teachers">Teachers</TabsTrigger>
          <TabsTrigger value="admins">Administrators</TabsTrigger>
        </TabsList>
        <TabsContent value="students">
          <Card>
            <CardHeader>
              <CardTitle>Students</CardTitle>
              <CardDescription>Manage student accounts and access</CardDescription>
            </CardHeader>
            <CardContent>
              <UserTable userType="student" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="teachers">
          <Card>
            <CardHeader>
              <CardTitle>Teachers</CardTitle>
              <CardDescription>Manage teacher accounts and subject assignments</CardDescription>
            </CardHeader>
            <CardContent>
              <UserTable userType="teacher" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="admins">
          <Card>
            <CardHeader>
              <CardTitle>Administrators</CardTitle>
              <CardDescription>Manage administrator accounts and permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <UserTable userType="admin" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <AddUserDialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen} />
    </div>
  )
}
