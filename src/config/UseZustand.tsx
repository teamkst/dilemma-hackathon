import { create } from "zustand";

type CounterState = {
  data: string[];
  count: number;
  setData: (prop: any) => void;
  setCount: (prop: any) => void;
};

export const UseZustand = create<CounterState>((set) => ({
  data: [],
  count: 0,
  setData: (prop) => set({ data: prop }),
  setCount: (prop) => set({ data: prop }),
}));
