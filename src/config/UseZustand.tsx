import { create } from "zustand";

type CounterState = {};

export const UseZustand = create<CounterState>((set) => ({}));
