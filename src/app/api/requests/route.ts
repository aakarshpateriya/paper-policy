
import { NextResponse } from "next/server";

export async function GET() {
  const sampleRequests = [
    { id: 1, type: "Bike Loan", status: "Pending", user: "Rahul" },
    { id: 2, type: "Credit Card", status: "Completed", user: "Anjali" },
    { id: 3, type: "Passport Renewal", status: "In Progress", user: "Suresh" },
  ];

  return NextResponse.json(sampleRequests);
}
