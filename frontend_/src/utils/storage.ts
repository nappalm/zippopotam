import { ZipCode } from "../types";

const KEY = "zippoopotam-data";


export const getLocalData = (): ZipCode[]  => {
  const store = localStorage.getItem(KEY);
  return JSON.parse(store || `[]`);
}

export const updateOrCreate = (item: ZipCode) => {
  const store = localStorage.getItem(KEY);
  if (!store) {
    localStorage.setItem(KEY, JSON.stringify([item]))
    return;
  }
  
  const data = [...getLocalData(), item];
  localStorage.setItem(KEY, JSON.stringify(data))  
}

export const clearData = () => {
  localStorage.removeItem(KEY)
}
