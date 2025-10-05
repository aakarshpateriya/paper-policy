import { NextResponse } from "next/server";

// Sample products for buying section
const sampleProducts = [
  { id: 1, type: "Bike", name: "Honda CB Shine", price: 80000 },
  { id: 2, type: "Car", name: "Maruti Swift", price: 600000 },
  { id: 3, type: "Electronics", name: "iPhone 15", price: 120000 },
  { id: 4, type: "Electronics", name: "Laptop Dell XPS", price: 90000 },
];

export async function GET() {
  return NextResponse.json(sampleProducts);
}
