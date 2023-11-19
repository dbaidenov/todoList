//вместо того чтоб для каждого компонента создавать состояние локального хранилища
//лучше сделаем общий свой стэйтмент
//и будем экспортировать
//Это хороший подход, который позволяет вам управлять состоянием, сохраненным в локальном хранилище,
//в едином месте, что упрощает код и предотвращает дублирование логики работы с локальным хранилищем
//в разных компонентах.

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
  //снаружи когда используем где то эту функцию
  //возвращается состояние и функция для изменения состояния
  //то есть если там снаружи в компонентах если где то изменяется состояние,
  //срабатывает useEffect, так как он всегда зависит от изменения storageValue или Key
  //короче говоря useState и useEffect всегда срабатывают где бы мы их не указывали, даже внутри функции другого
  //js файла или же внутри другого компонента, без разницы короче.
  //главное использовать их внутри компонентов React или пользовательских хуков))

  //и собственно возвращаем состояние и функция для изменения состояния)
  //для махинации где угодно с ними
  return [storageValue, setStorageValue];
};

export default useStorageData;
