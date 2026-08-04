import { Request, Response } from "express";

export function listarQuartos(req: Request, res: Response): void {
  res.json([
    {
      id: 1,
      numero: 16,
      precoPorNoite: 150,
      categoria: "STANDARD",
      disponivel: true,
    },
    {
      id: 2,
      numero: 101,
      precoPorNoite: 200,
      categoria: "LUXO",
      disponivel: true,
    },
  ]);
}

export function cadastrarQuartos(req: Request, res: Response): void {
  res.json({ mensagem: "Quarto Cadastrado!" });
}
