import { useState } from 'react';

// ideia dos hooks tirados das seguintes fontes
// https://usehooks.com/useLocalStorage/
// https://blog.logrocket.com/using-localstorage-react-hooks/

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

export default useLocalStorage;
