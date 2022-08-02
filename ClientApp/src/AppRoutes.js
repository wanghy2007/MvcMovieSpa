import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { FetchMovie } from './components/FetchMovie';
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/fetch-movie',
    element: <FetchMovie />
  }
];

export default AppRoutes;
