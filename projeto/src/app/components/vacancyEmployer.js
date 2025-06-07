"use client";
import Image from "next/image";
import VacancyCard from "./vacancyCard";

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

export default function vacancyEmployer() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-4">
      <div className="bg-white text-gray-900 rounded-3xl max-w-sm w-full p-6 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm">Olá, Daniel!</p>
            <h2 className="text-2xl font-bold text-blue-900">
              Quem você está procurando?
            </h2>
          </div>
          <Image
            src="/avatar.webp"
            alt="Avatar"
            className="w-10 h-10 rounded-full border-2 border-white shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
