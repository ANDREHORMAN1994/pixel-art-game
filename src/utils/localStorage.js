export function readLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function writeLocalStorage(key, value) {
  const currentLocalStorage = readLocalStorage(key);
  if (currentLocalStorage) {
    if (currentLocalStorage.some(({ name }) => name === value.name)) {
      const newLocalStorage = currentLocalStorage.map((item) => {
        if (item.name === value.name) {
          return value;
        }
        return item;
      });
      localStorage.setItem(key, JSON.stringify(newLocalStorage));
    } else {
      localStorage.setItem(key, JSON.stringify([...currentLocalStorage, value]));
    }
  } else {
    localStorage.setItem(key, JSON.stringify([value]));
  }
}
