// @utils/atoms.js
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// Example atom
export const countAtom = atomWithStorage('count', 0);

// Add more atoms as needed