"use client";
import Image from "next/image";
import VacancyCard from "./vacancyCard";

export default function VacancyEmployer() {
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
          <div className="absolute top-4 left-4 bg-white p-1 rounded-xl w-max">
            <Image
              src="/Ti.png"
              alt="Logo"
              width={150}
              height={40}
              className="rounded-lg"
            />
          </div>
        </div>
        <Image
          src="/man.png"
          alt="/Avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>

      <p className="text-[#0A2753] text-base mb-4">Olá, Daniel!</p>
      <h1 className="text-3xl font-bold text-[#0B2568] mb-1">
        Digite os dados da nova vaga
      </h1>
      <div className="flex justify-between items-center mb-4">
        <label htmlFor="Título:" className = ""
        <button className="flex items-center gap-1 bg-[#5A2FDA] text-white px-20 py-1.5 rounded-full text-sm font-medium shadow-md hover:bg-[#5b21b6] transition">
          Criar
        </button>
      </div>
    </main>
  );
}
