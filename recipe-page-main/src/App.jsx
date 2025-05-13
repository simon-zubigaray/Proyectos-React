import { MainSection } from "./components/MainSection";
import { IngredientsSection } from "./components/IngredientsSection";
import { InstructionsSection } from "./components/InstructionsSection";
import { NutritionSection } from "./components/NutritionSection";
import RecipeImg from "./assets/images/image-omelette.jpeg";

function App() {
  return (
    <main className="bg-white sm:p-8 flex flex-col items-center justify-center">
      <div>
        <img className="sm:rounded-2xl max-w-[1240px] h-full object-cover" src={RecipeImg} alt="" />
      </div>
      
      <div className="px-8 py-10 sm:px-0 sm:py-0">
        <MainSection />
        <IngredientsSection />
        <InstructionsSection />
        <NutritionSection />
      </div>
    </main>
  );
}

export default App;
