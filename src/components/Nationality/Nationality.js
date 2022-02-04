import React, { useEffect, useState } from 'react';
import fetchApi from '../../services/fetchApi';

export default function Nationality() {
  const [countries, setCountrie] = useState();

  const fecthCountry = () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
    fetchApi(url).then((response) => setCountrie(response));

    console.log(countries);
  };

  useEffect(() => {
    fecthCountry();
  }, []);

  return (
    <div>
      <p>paises</p>
    </div>
  );
}
