import { Hero } from "./assets/components/Hero";
import { RatingContainer } from "./assets/components/RatingContainer";
import { ReviewContainer } from "./assets/components/ReviewContainer";
import { Background } from "./assets/components/Background";

function App() {
  return (
    <main className="font-League-Spartan px-6 py-20 relative">
      <Background />
      <div className="mb-12">
        <Hero />
        <RatingContainer />
      </div>

      <ReviewContainer />
    </main>
  );
}

export default App;
