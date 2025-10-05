"use client";
import { useState } from "react";

interface Props {
  uploadedFiles: string[];
}

export default function SubmitRequest({ uploadedFiles }: Props) {
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  // Sample request types
  const requestTypes = [
    "Bike Loan",
    "Car Loan",
    "Credit Card Application",
    "Passport Renewal",
    "Policy Purchase",
    "Bank Account Opening",
    "Job Application Verification",
  ];

  const handleSubmit = async () => {
    if (!type) return;

    const request = {
      type,
      status: "Pending",
      documents: uploadedFiles,
    };

    const res = await fetch("/api/requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Submit New Request</h2>

      {/* Dropdown Menu */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2 rounded mb-2 w-full"
      >
        <option value="">-- Select Request Type --</option>
        {requestTypes.map((reqType, index) => (
          <option key={index} value={reqType}>
            {reqType}
          </option>
        ))}
      </select>

      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Submit Request
      </button>

      {message && <p className="mt-2 text-green-500">{message}</p>}
    </div>
  );
}
