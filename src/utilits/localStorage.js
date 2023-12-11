

import { useState, useEffect } from "react";
const getStorageData = function (key, value) {
  const data = localStorage.getItem(key);
  const parsedData = JSON.parse(data);
  return parsedData || value;
};

const useStorageData = function (key, value) {
  const [storageValue, setStorageValue] = useState(getStorageData(key, value));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storageValue));
  }, [key, storageValue]);

  return [storageValue, setStorageValue];
};

export default useStorageData;
