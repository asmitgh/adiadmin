"use client"

import { useState } from "react"
import { CreditCard, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function PaymentGateway() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "error">("idle")

  const handlePayment = () => {
    setPaymentStatus("processing")

    // Simulate payment processing
    setTimeout(() => {
      // Randomly succeed or fail for demo purposes
      const success = Math.random() > 0.3
      setPaymentStatus(success ? "success" : "error")
    }, 2000)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Payment Gateway</CardTitle>
        <CardDescription>Complete your payment securely</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {paymentStatus === "success" && (
          <Alert className="bg-green-50 border-green-200 text-green-800 dark:bg-green-950 dark:border-green-900 dark:text-green-300">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Payment Successful</AlertTitle>
            <AlertDescription>
              Your payment has been processed successfully. A receipt has been sent to your email.
            </AlertDescription>
          </Alert>
        )}

        {paymentStatus === "error" && (
          <Alert className="bg-red-50 border-red-200 text-red-800 dark:bg-red-950 dark:border-red-900 dark:text-red-300">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Payment Failed</AlertTitle>
            <AlertDescription>
              There was an issue processing your payment. Please check your details and try again.
            </AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="payment" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="payment">Payment</TabsTrigger>
            <TabsTrigger value="history">Payment History</TabsTrigger>
          </TabsList>

          <TabsContent value="payment" className="space-y-4 pt-4">
            <div className="space-y-4">
              <Label>Select Payment Method</Label>
              <RadioGroup
                defaultValue="credit-card"
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                className="grid grid-cols-3 gap-4"
              >
                <div>
                  <RadioGroupItem value="credit-card" id="credit-card" className="peer sr-only" />
                  <Label
                    htmlFor="credit-card"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <CreditCard className="mb-3 h-6 w-6" />
                    <span className="text-sm font-medium">Credit Card</span>
                  </Label>
                </div>

                <div>
                  <RadioGroupItem value="paypal" id="paypal" className="peer sr-only" />
                  <Label
                    htmlFor="paypal"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <svg className="mb-3 h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19.5 8.25H4.5C3.67157 8.25 3 8.92157 3 9.75V18.75C3 19.5784 3.67157 20.25 4.5 20.25H19.5C20.3284 20.25 21 19.5784 21 18.75V9.75C21 8.92157 20.3284 8.25 19.5 8.25Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.5 20.25V6C16.5 5.40326 16.2629 4.83097 15.841 4.40901C15.419 3.98705 14.8467 3.75 14.25 3.75H9.75C9.15326 3.75 8.58097 3.98705 8.15901 4.40901C7.73705 4.83097 7.5 5.40326 7.5 6V20.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm font-medium">PayPal</span>
                  </Label>
                </div>

                <div>
                  <RadioGroupItem value="bank-transfer" id="bank-transfer" className="peer sr-only" />
                  <Label
                    htmlFor="bank-transfer"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <svg className="mb-3 h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 21H21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 10H21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 6L12 3L19 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 10V21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 10V21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 14V17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 14V17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 14V17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm font-medium">Bank Transfer</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {paymentMethod === "credit-card" && (
              <div className="space-y-4">
                <Separator />
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Name on Card</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "paypal" && (
              <div className="space-y-4">
                <Separator />
                <div className="rounded-md bg-blue-50 p-4 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                  <p className="text-sm">You will be redirected to PayPal to complete your payment securely.</p>
                </div>
              </div>
            )}

            {paymentMethod === "bank-transfer" && (
              <div className="space-y-4">
                <Separator />
                <div className="space-y-2">
                  <Label>Bank Account Details</Label>
                  <div className="rounded-md bg-muted p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Bank Name</p>
                        <p className="text-sm font-medium">EduBank National</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Account Number</p>
                        <p className="text-sm font-medium">1234567890</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Routing Number</p>
                        <p className="text-sm font-medium">987654321</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Account Name</p>
                        <p className="text-sm font-medium">EduAdmin Inc.</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Please use your institution name as the reference when making the transfer.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reference">Transfer Reference</Label>
                  <Input id="reference" placeholder="Your Institution Name" />
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="history" className="space-y-4 pt-4">
            <div className="rounded-md border">
              <div className="p-4 flex items-center justify-between bg-muted/50">
                <div>
                  <p className="font-medium">Annual Subscription - Gold Plan</p>
                  <p className="text-sm text-muted-foreground">Dec 31, 2022</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$999.00</p>
                  <p className="text-sm text-green-600 dark:text-green-400">Paid</p>
                </div>
              </div>
              <Separator />
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium">Annual Subscription - Silver Plan</p>
                  <p className="text-sm text-muted-foreground">Dec 31, 2021</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$499.00</p>
                  <p className="text-sm text-green-600 dark:text-green-400">Paid</p>
                </div>
              </div>
              <Separator />
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium">Additional Credits - 5,000</p>
                  <p className="text-sm text-muted-foreground">Jun 15, 2021</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$199.00</p>
                  <p className="text-sm text-green-600 dark:text-green-400">Paid</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-sm text-muted-foreground">
          <p>
            Amount: <span className="font-medium">$999.00</span>
          </p>
          <p>
            Plan: <span className="font-medium">Gold (Annual)</span>
          </p>
        </div>
        <Button onClick={handlePayment} disabled={paymentStatus === "processing"} className="min-w-[120px]">
          {paymentStatus === "processing" ? "Processing..." : "Pay Now"}
        </Button>
      </CardFooter>
    </Card>
  )
}
