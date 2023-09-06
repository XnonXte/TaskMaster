// TODO: 1. Figure what's wrong with the POST request for creating new todo,
// TODO: is it because of CORS or the JSON body. // DONE (inappropriate HTTP verb :p)
// TODO: 2. Add a CRUD functionality using a persistent storage like localStorage (client side) // DONE
// TODO: 3. Queue such changes then sync with the Express.js server
// TODO: 5. Add user auth? Probably redone the whole user schema inside the Express.js server.
// TODO: 6. Learn React Router and possibly profit???

import TodoPage from "./components/Pages/TodoPage";
import LandingPage from "./components/Pages/LandingPage";
import "./css/anchor.css";

const App = () => {
  // Temporary debugging flag, will use React Router for future logic?
  const isAtLandingPage = false;

  return <>{isAtLandingPage ? <LandingPage /> : <TodoPage />}</>;
};

export default App;
