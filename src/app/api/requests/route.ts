import { NextResponse } from "next/server";

let sampleRequests = [
  {
    id: 1,
    type: "Bike Loan",
    status: "Pending",
    user: "Rahul",
    documents: ["aadhar.pdf", "income.pdf"],
  },
  {
    id: 2,
    type: "Credit Card",
    status: "Completed",
    user: "Anjali",
    documents: ["pan.pdf"],
  },
  {
    id: 3,
    type: "Passport Renewal",
    status: "In Progress",
    user: "Suresh",
    documents: ["passport_form.pdf", "photo.jpg"],
  },
];

// GET handler
export async function GET() {
  return NextResponse.json(sampleRequests);
}

// POST handler
export async function POST(req: Request) {
  const body = await req.json();
  const newRequest = {
    id: sampleRequests.length + 1,
    type: body.type,
    status: body.status || "Pending",
    user: body.user || "Anonymous",
    documents: body.documents || [],
  };

  sampleRequests.push(newRequest);

  return NextResponse.json({ message: "Request submitted successfully!" });
}
