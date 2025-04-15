import { create } from 'zustand';

interface GlobalState {
  isDark: boolean;
  count: number;
  todos: string[];
  toggleTheme: () => void;
  incrementCount: () => void;
  addTodo: (todo: string) => void;
}

const useStore = create<GlobalState>((set) => ({
  isDark: false,
  count: 0,
  todos: [],
  toggleTheme: () => set((state) => ({ isDark:!state.isDark })),
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  addTodo: (todo: string) => set((state) => ({ todos: [...state.todos, todo] })),
}));

export default useStore;