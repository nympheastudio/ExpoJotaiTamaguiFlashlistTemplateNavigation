// src/utils/atomWithAsyncStorage.js
import { atom } from 'jotai';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function atomWithAsyncStorage(key, initialValue) {
  const baseAtom = atom(initialValue);
  const derivedAtom = atom(
    (get) => get(baseAtom),
    async (get, set, update) => {
      const newValue = typeof update === 'function' ? update(get(baseAtom)) : update;
      set(baseAtom, newValue);
      await AsyncStorage.setItem(key, JSON.stringify(newValue));
    }
  );

  derivedAtom.onMount = (setAtom) => {
    (async () => {
      const item = await AsyncStorage.getItem(key);
      if (item !== null) {
        setAtom(JSON.parse(item));
      }
    })();
  };

  return derivedAtom;
}
