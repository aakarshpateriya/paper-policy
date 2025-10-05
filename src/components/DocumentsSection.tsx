"use client";
import { useState } from "react";

export default function DocumentsSection() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

const handleUpload = async () => {
  if (!file) return;

      const formData = new FormData();
  formData.append("file", file);

    const res = await fetch("/api/documents", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  setMessage(data.message);


  setUploadedFiles((prev) => [...prev, file.name]);
};



  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Upload Documents</h2>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Upload
      </button>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
