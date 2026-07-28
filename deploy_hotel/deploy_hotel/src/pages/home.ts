import { navbar } from "../components/navbar";

export function renderHome(app: HTMLDivElement): void {
  app.innerHTML = `${navbar()} home`;
}
