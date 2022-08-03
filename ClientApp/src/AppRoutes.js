import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { ListMovie } from './components/ListMovie';
import { DetailsMovie } from "./components/DetailsMovie";
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
    path: '/list-movie',
    element: <ListMovie />
  },
  {
    path: '/details-movie/:id',
    element: <DetailsMovie />
  },
];

export default AppRoutes;
