import { Service } from "@/models/services";
import Image from "next/image";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="flex min-h-full max-w-80 flex-col items-center justify-between rounded bg-gray p-5 shadow-lg shadow-[#1f1f1f]">
      <div className="flex flex-1 flex-col items-center justify-center">
        <div
          className="m-10 size-12 rounded-lg shadow-lg"
          style={{
            backgroundImage: `url(${service.icon})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <h3 className="mt-4 text-center text-xl">{service.name}</h3>
      </div>
      <p className="mt-4 text-center">{service.description}</p>
    </div>
  );
}
