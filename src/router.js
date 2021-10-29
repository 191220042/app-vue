
import Hello from "./pages/Hello";
import Battle from "./pages/Battle";
import PlayerShow from "./pages/PlayerShow";
import Register from "./pages/Register"
export default [

  { path: "/", component: Hello },
  {
    path: "/battle",
    component: Battle,
  },
  {
    path: "/playerShow",
    component: PlayerShow,
  },
  {
    path: "/register",
    component: Register,
  }
];
