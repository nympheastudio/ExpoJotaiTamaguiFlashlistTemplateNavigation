// src/store/settingsAtoms.js
import { atomWithAsyncStorage } from '../hooks/atomWithAsyncStorage';

export const primaryColorAtom = atomWithAsyncStorage('primaryColor', '#6200ea');
export const fontSizeAtom = atomWithAsyncStorage('fontSize', 16);
export const darkModeAtom = atomWithAsyncStorage('darkMode', false);
