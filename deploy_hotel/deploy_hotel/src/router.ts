import { renderHome } from "./pages/home";

export const routes: Record<string, (app: HTMLDivElement) => void> = {
  "/": renderHome,
};

export function resolve(app: HTMLDivElement): void {
  const path = window.location.pathname;
  routes[path](app);
}

export function navigate(path: string, app: HTMLDivElement): void {
  window.history.pushState({}, "", path);
  resolve(app);
}

export function initRouter(app: HTMLDivElement) {
  window.addEventListener("popstate", () => resolve(app));
  resolve(app);
}
