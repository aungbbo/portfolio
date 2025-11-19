import Image from "next/image";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-start justify-start px-10 py-10 md:flex-row">
      <h1 className="text-4xl font-bold">Aung Bo Bo</h1>
      <Header />
    </div>
  );
}
