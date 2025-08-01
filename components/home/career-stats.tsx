"use client";

import {
  Card,
  CardBody,
} from "@heroui/card";
import {
  ClockIcon,
  FolderIcon,
  Code2Icon,
  ChartSpline,
} from "lucide-react";
import { LiaCertificateSolid } from "react-icons/lia";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  {
    icon: ClockIcon,
    value: 2,
    unit: "years",
    label: "Experience",
    gradient: "from-purple-400 via-blue-500 to-green-600",
  },
  {
    icon: LiaCertificateSolid,
    value: 20,
    label: "Certificates",
    gradient: "from-yellow-400 via-red-500 to-orange-500",
  },
  {
    icon: FolderIcon,
    value: 10,
    label: "Projects",
    gradient: "from-teal-400 via-green-400 to-cyan-600",
  },
  {
    icon: Code2Icon,
    value: 20,
    label: "Technologies",
    gradient: "from-blue-400 via-red-300 to-yellow-500",
  },
];

export default function CareerStats() {
  return (
    <div className="p-[18px] bg-surface-light dark:bg-surface-dark text-gray-900 dark:text-white border border-zinc-300 dark:border-surface-dark shadow-lg rounded-xl w-full mx-auto">
      <h2 className="text-xl font-semibold mb-[18px] flex items-center gap-2">
        <ChartSpline /> Career Stats
      </h2>

      <div className="grid grid-cols-2 2xl:grid-cols-4 gap-[18px]">
        {stats.map(({ icon: Icon, value, unit, label, gradient }, idx) => {
          const count = useCountUp(value, 500);
          return (
            <Card
              key={idx}
              className="text-center text-white border-none shadow-sm bg-background-light dark:bg-background-dark transition duration-200 ease-in-out hover:bg-blue-200 dark:hover:bg-slate-700"
            >
              <CardBody className="flex flex-col justify-center p-[18px] text-gray-900 dark:text-white">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold leading-tight">{count}</span>
                    {unit && (
                      <span className="text-md text-black dark:text-white relative -top-[3px]">{unit}</span>
                    )}
                  </div>
                </div>
                <div className="mt-3 text-md font-medium text-black dark:text-white">
                  {label}
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
