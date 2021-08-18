import React from "react";
import IRecipeProps from "./props";

const RecipeCard: React.FC<IRecipeProps> = (props) => {
  const { title, image, calories } = props;
  return (
    <div style={{ margin: "10px" }}>
      <img src={image} alt="Logo" />
      <h1>{title}</h1>
      {Math.floor(calories)} calories
    </div>
  );
};

export default RecipeCard;
