// src/store/jotaiState.js
import { atomWithAsyncStorage } from '../hooks/atomWithAsyncStorage';

// Define your persistent atoms here
export const homeCountAtom = atomWithAsyncStorage('homeCount', 0);
export const exampleCountAtom = atomWithAsyncStorage('exampleCount', 0);