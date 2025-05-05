import { Header } from "./components/Header";
import { MainArticle } from "./components/MainArticle";
import { NewContainer } from "./components/NewContainer";
import "./App.css";

function App() {

  return (
    <main className="px-4 pt-6">
      <Header></Header>
      <div className="sm:flex sm:gap-8">
              <MainArticle></MainArticle>
      <NewContainer></NewContainer>
      </div>

    </main>
  );
}

export default App;
