
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file) {
    return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
  }

  // For prototype, we are just logging file info
  console.log("Uploaded file:", file);

  return NextResponse.json({ message: "File uploaded successfully!" });
}
