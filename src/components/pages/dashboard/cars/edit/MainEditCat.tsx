"use client";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCarDetails } from "./request";
import EditCar from "./EditCar";
import type { AddCarTypes } from "../add/types";
import { Loader2 } from "lucide-react";

export default function MainEditCar() {
  const { slug } = useParams();
  const [initialData, setInitialData] = useState<AddCarTypes | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await getCarDetails(slug as string);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setInitialData(res as any);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchCar();
  }, [slug]);

  if (loading || !initialData) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
    );
  }

  return <EditCar slug={slug as string} initialData={initialData} />;
}
