export const getFoodDetails = (id) => {
  try {
    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((result) => result.json())
      .then((json) => json);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getDrinksDetails = (id) => {
  try {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((results) => results.json())
      .then((json) => json);
  } catch (error) {
    console.error(error);
  }
};
