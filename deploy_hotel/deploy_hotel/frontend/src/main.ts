import "./style.css";
import { initRouter } from "./router";

const mainDiv = document.querySelector<HTMLDivElement>(".app")!;

initRouter(mainDiv);
