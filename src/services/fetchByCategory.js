async function fetchByCategory(category, type) {
  const domain = type === 'meals' ? 'themealdb' : 'thecocktaildb';
  const url = `https://www.${domain}.com/api/json/v1/1/filter.php?c=${category}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default fetchByCategory;
