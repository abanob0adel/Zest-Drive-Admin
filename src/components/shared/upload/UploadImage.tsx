"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { uploadMediaRequest } from "./uploadMedia";

interface UploadImageProps {
  label?: string;
  onUploaded: (url: string) => void;
}

export default function UploadImage({ label, onUploaded }: UploadImageProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const data = await uploadMediaRequest(file);

      if (data?.url) {
        setPreview(data.url);
        onUploaded(data.url);
      }
    } catch (err) {
      console.error("Upload error:", err);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {label && <label className="font-medium">{label}</label>}
      <Input type="file" accept="image/*" onChange={handleFileChange} />
      {isUploading && <p className="text-sm text-gray-500">جاري الرفع...</p>}
      {preview && (
        <div className="mt-2">
          <img
            src={preview}
            alt="preview"
            className="w-32 h-32 object-cover rounded-md border"
          />
        </div>
      )}
    </div>
  );
}
