import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const authAtom = atomWithStorage("auth", {id: null, role: null, token: null});
export const userAtom = atom(null);

