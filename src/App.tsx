import { useState, useEffect } from "react";
import "./App.css";
import RecipeCard from "./RecipeCard";
import axios from "axios";
const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState<string>("");
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const APP_ID = ""; // your app id
    const APP_KEY = ""; // your app key
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.data;
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e: any) => {
    // note if you are using chakra ui you have to specify event => e: React.ChangeEvent<HTMLInputElement>
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e: any) => {
    // note if you are using chakra ui you have to specify event => e: React.ChangeEvent<HTMLInputElement>
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div className="App">
      <form onSubmit={updateSearch} className="form">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={"search a recipe..."}
        />
        <button onClick={getSearch}>search</button>
      </form>
      {recipes.map((recipe: any) => (
        <RecipeCard
          key={recipe.recipe.calories}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          calories={recipe.recipe.calories}
        />
      ))}
    </div>
  );
};

export default App;
