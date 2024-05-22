import { PropsWithChildren, createContext, useContext, useState } from "react";
import { ZipCode } from "../types";
import { clearData, getLocalData, updateOrCreate } from "../utils/storage";
interface Props {
  data: ZipCode[];
  mutate?: (item: ZipCode) => void;
  remove?: VoidFunction;
}

const ContextProvider = createContext<Props>({
  data: []
});

export function StoreContext({ children }: PropsWithChildren) {
  const data = getLocalData();
  const [store, setStore] = useState(data);

  const mutate = (item: ZipCode) => {
    setStore([...store, item]);
    updateOrCreate(item);
  };

  const remove = () => {
    setStore([]);
    clearData();
  };

  const last5Elements = data.slice(-5);

  return (
    <ContextProvider.Provider
      value={{
        data: last5Elements.reverse(),
        mutate,
        remove
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useStoreContext = (): Props => {
  return useContext(ContextProvider);
};
