"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Check, CreditCard, Download, Users } from "lucide-react"
import { PaymentGateway } from "@/components/subscription/payment-gateway"

export function SubscriptionManagement() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="plan" className="w-full">
        <TabsList>
          <TabsTrigger value="plan">Current Plan</TabsTrigger>
          <TabsTrigger value="billing">Billing History</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
        </TabsList>
        <TabsContent value="plan" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Current Subscription</CardTitle>
                <CardDescription>Your current plan and subscription details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold">GOLD Plan</h3>
                    <p className="text-muted-foreground">Premium features for educational institutions</p>
                  </div>
                  <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white">ACTIVE</Badge>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Administrator</p>
                    <p>John Smith</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Billing Email</p>
                    <p>billing@example.edu</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Renewal Date</p>
                    <p>December 31, 2023</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Billing Cycle</p>
                    <p>Annual</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium">Credits</p>
                    <p className="text-sm font-medium">12,500 / 15,000</p>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 w-[83%]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium">Devices</p>
                    <p className="text-sm font-medium">25 / 50</p>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 w-[50%]" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Change Plan</Button>
                <Button>Renew Subscription</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your subscription</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Download Invoice
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Update Payment Method
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Manage Devices
                </Button>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Available Plans</CardTitle>
              <CardDescription>Compare subscription plans</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-muted">
                  <CardHeader>
                    <CardTitle>SILVER</CardTitle>
                    <CardDescription>For small institutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">$499</div>
                    <p className="text-muted-foreground">per year</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>5,000 Credits</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>20 Devices</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Basic Support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Downgrade
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>GOLD</CardTitle>
                      <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white">CURRENT</Badge>
                    </div>
                    <CardDescription>For medium institutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">$999</div>
                    <p className="text-muted-foreground">per year</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>15,000 Credits</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>50 Devices</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Priority Support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600">Renew</Button>
                  </CardFooter>
                </Card>
                <Card className="border-muted">
                  <CardHeader>
                    <CardTitle>PLATINUM</CardTitle>
                    <CardDescription>For large institutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">$1,999</div>
                    <p className="text-muted-foreground">per year</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Unlimited Credits</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Unlimited Devices</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>24/7 Dedicated Support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Upgrade
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>View your past invoices and payment history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[100px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">INV-001</TableCell>
                      <TableCell>Dec 31, 2022</TableCell>
                      <TableCell>$999.00</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Paid</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">INV-002</TableCell>
                      <TableCell>Dec 31, 2021</TableCell>
                      <TableCell>$899.00</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Paid</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">INV-003</TableCell>
                      <TableCell>Dec 31, 2020</TableCell>
                      <TableCell>$899.00</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Paid</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="usage">
          <Card>
            <CardHeader>
              <CardTitle>Usage Statistics</CardTitle>
              <CardDescription>Monitor your subscription usage</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="text-sm font-medium">Credits Used</p>
                  <p className="text-sm font-medium">12,500 / 15,000</p>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 w-[83%]" />
                </div>
                <p className="text-xs text-muted-foreground">Credits reset on December 31, 2023</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="text-sm font-medium">Devices Registered</p>
                  <p className="text-sm font-medium">25 / 50</p>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 w-[50%]" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="text-sm font-medium">API Calls</p>
                  <p className="text-sm font-medium">45,678 / 100,000</p>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 w-[45%]" />
                </div>
                <p className="text-xs text-muted-foreground">API calls reset monthly</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="text-sm font-medium">Storage</p>
                  <p className="text-sm font-medium">15 GB / 50 GB</p>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 w-[30%]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="payment" className="space-y-4">
          <PaymentGateway />
        </TabsContent>
      </Tabs>
    </div>
  )
}

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
