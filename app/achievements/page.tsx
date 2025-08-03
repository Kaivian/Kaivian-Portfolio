import CertificateCard from "@/components/achievements/certificate-card";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoMdBook } from "react-icons/io";

const mockCertificates = Array.from({ length: 8 }, (_, i) => ({
  title: `Certificate ${i + 1}`,
  subtitle: `Completed course ${i + 1}`,
  issueDate: `202${i % 3 + 1}-0${(i % 12) + 1}-15`,
  avatarImg: "https://heroui.com/avatars/avatar-1.png",
  certificateImg: "/banner-home.jpg",
}));

export default function AchievementsPage() {
  return (
    <main className="min-h-screen px-[18px] pt-20 md:pt-[18px] md:ml-[calc(min(100vw*0.25,450px)+18px)] flex flex-col gap-[18px] pb-[18px]">
      <section className="rounded-xl bg-surface-light dark:bg-surface-dark p-[25px] text-gray-900 dark:text-white border border-zinc-300 dark:border-surface-dark shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <LiaCertificateSolid className="text-gray-900 dark:text-white w-7 h-7" />
          Licenses & Certificates
        </h2>

        <div className="mt-[18px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[25px]">
          {mockCertificates.map((cert, idx) => (
            <CertificateCard key={idx} {...cert} />
          ))}
        </div>
      </section>

      <section className="rounded-xl bg-surface-light dark:bg-surface-dark p-[25px] text-gray-900 dark:text-white border border-zinc-300 dark:border-surface-dark shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <IoMdBook className="text-gray-900 dark:text-white w-7 h-7" />
          Education
        </h2>

        <div className="mt-[18px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[25px]">
          {mockCertificates.map((cert, idx) => (
            <CertificateCard key={idx} {...cert} />
          ))}
        </div>
      </section>
    </main>
  );
}


