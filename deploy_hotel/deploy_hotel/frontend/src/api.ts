import type { Quarto } from "./types/room";

export async function getQuartos(): Promise<Quarto[]> {
  const response = await fetch("http://localhost:3000/quartos");
  console.log(response);
  const quartos: Quarto[] = await response.json();
  console.log(quartos);
  return quartos;
}
