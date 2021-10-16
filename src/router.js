import Home from "./pages/Home";
import Hello from "./pages/Hello";
import Battle from "./pages/Battle";
import PlayerShow from "./pages/PlayerShow";

export default [
  {
    path: "/app",
    component: Home,
  },
  { path: "/", component: Hello },
  {
    path: "/battle",
    component: Battle,
  },
  {
    path: "/playerShow",
    component: PlayerShow,
  },
];
