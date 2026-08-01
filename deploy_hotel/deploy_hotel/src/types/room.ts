export type CategoriaQuarto = "STANDARD" | "LUXO" | "SUITE";

export type Quarto = {
  id: string;
  numero: number;
  precoPorNoite: number;
  categoria: CategoriaQuarto;
  disponivel: boolean;
};
