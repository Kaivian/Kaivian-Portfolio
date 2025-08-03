import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-[18px] pt-20 md:pt-[18px] md:ml-[calc(min(100vw*0.25,450px)+18px)] flex flex-col gap-[18px] pb-[18px]">
      <div>
        <h1 className={title()}>About</h1>
      </div>
    </main>
  );
}
