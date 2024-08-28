import React from 'react';
import { useRecipe } from '../RecipeContext'; // Adjust the path if necessary
import './FavoritesPage.css';
const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = useRecipe();

  const handleRemoveFromFavorites = (recipeUri) => {
    if (removeFromFavorites) {
      removeFromFavorites(recipeUri);
    }
  };

  if (!favorites || favorites.length === 0) {
    return <p>No favorites added yet.</p>;
  }

  return (
    <div className="favorites-page">
      {favorites.map((recipe) => (
        <div key={recipe.uri} className="recipe-card">
          <h3>{recipe.label}</h3>
          <img src={recipe.image} alt={recipe.label} />
          <p>{recipe.source}</p>
          <button onClick={() => handleRemoveFromFavorites(recipe.uri)}>Remove from Favorites</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;
