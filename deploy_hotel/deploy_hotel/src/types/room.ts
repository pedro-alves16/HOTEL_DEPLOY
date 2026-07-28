export interface Quarto {
  id: string;
  numero: string;
  precoPorNoite: number;
  categoria: "Standard" | "Luxo" | "Suite";
  disponivel: boolean;
}
