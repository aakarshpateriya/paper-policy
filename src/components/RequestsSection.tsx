"use client";
import { useEffect, useState } from "react";

interface Request {
  id: number;
  type: string;
  status: string;
  user: string;
  documents: string[];
}

export default function RequestsSection() {
  const [requests, setRequests] = useState<Request[]>([]);

  useEffect(() => {
    fetch("/api/requests")
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Requests</h2>
      <table className="w-full border border-gray-300 dark:border-gray-700">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-800">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">User</th>
            <th className="p-2 border">Type</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Documents</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req.id} className="text-center">
              <td className="p-2 border">{req.id}</td>
              <td className="p-2 border">{req.user}</td>
              <td className="p-2 border">{req.type}</td>
              <td className="p-2 border">{req.status}</td>
              <td className="p-2 border">
                {req.documents.map((doc, index) => (
                  <span key={index} className="mr-2">
                    {doc}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
