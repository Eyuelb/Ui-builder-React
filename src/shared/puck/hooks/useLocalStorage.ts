import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useOptimistic,
  useState,
  useTransition,
} from "react";
const isBrowser = typeof window !== "undefined";
type UseStorageState<T> = [T, (newValue: T) => void];
export function useStorage<T>(key: string, initialValue: T) {
  const { getItem, setItem, removeItem } = useLocalStorage<T>();
  const [isPending, startTransition] = useTransition();

  
  const [data, setData] = useState(() => {
    const storedValue = getItem(key);
    if (storedValue === null) {
      setItem(key, initialValue);
      return initialValue;
    }
    return storedValue;
  });

  // Save function to set data with localStorage and optimistic update
  const saveData = useCallback((newData: T) => {
    startTransition(() => {
      setData(newData);
    });
    setItem(key, newData);
  }, []);

  // Remove function to clear data from localStorage
  const removeData = useCallback(() => {
    removeItem(key);
    setData(initialValue);
  }, []);

  return { data, saveData, removeData, isPending };
}

export function useLocalStorage<T>() {
  const setItem = useCallback((key: string, value: T) => {
    if (isBrowser) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, []);
  const getItem = useCallback((key: string): T | null => {
    if (isBrowser) {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : (null as T);
    } else {
      return null;
    }
  }, []);
  const removeItem = useCallback((key: string) => {
    if (isBrowser) {
      return localStorage.removeItem(key);
    }
  }, []);
  return { getItem, setItem, removeItem };
}
