import { Header } from "./components/Header";
import { MainArticle } from "./components/MainArticle";
import { NewContainer } from "./components/NewContainer";
import { ArticleContainer } from "./components/ArticleContainer";
import "./App.css";

function App() {
  return (
    <main className="px-4 pt-6">
      <Header></Header>
      <div className="lg:flex lg:gap-8">
        <MainArticle></MainArticle>
        <NewContainer></NewContainer>
      </div>
      <ArticleContainer></ArticleContainer>
    </main>
  );
}

export default App;
