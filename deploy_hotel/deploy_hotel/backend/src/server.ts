import express from "express";
import cors from "cors";
import { quartoRoutes } from "./routes/quartoRoutes";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/quartos", quartoRoutes);

app.get("/", (req, res) => {
  res.send("funcionandoaaa");
});

app.listen(3000, () => {
  console.log("servidor iniciado na porta - 3000");
  console.log("http://localhost:3000");
});
