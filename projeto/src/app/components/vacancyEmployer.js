"use client";
import Image from "next/image";
import VacancyCard from "./vacancyCard";

export default function VacancyPage() {
  const vacancies = [
    {
      id: 1,
      title: "Barista",
      location: "Espinheiro, Recife",
      image: "/barista.png",
    },
    {
      id: 2,
      title: "Atendente",
      location: "Boa Viagem, Recife",
      image: "/atendente.png",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-4 pt-6 pb-10 max-w-md mx-auto font-sans">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gray-200 flx items-center justify-center text-purple-700 font-bold">
            Ti
          </div>
        </div>
        <Image
          src="/avatar.webp"
          alt="/Avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </main>
  );
}
