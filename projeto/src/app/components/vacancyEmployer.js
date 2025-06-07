"use client";
import Image from "next/image";
import VacancyCard from "./vacancyCard";

export default function vacancyEmployer() {
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
}
