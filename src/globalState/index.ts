import { create } from 'zustand'

interface GlobalState {
  count: number
  todos: string[]
  isDark: boolean
  name: string // 新增字符串状态
  increaseCount: () => void
  addTodo: (todo: string) => void
  toggleTheme: () => void
  setName: (value: string) => void // 新增状态更新方法
}

const useStore = create<GlobalState>((set) => ({
  count: 0,
  todos: [],
  isDark: true,
  name: '', // 初始化默认值
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  addTodo: (todo: string) => set((state) => ({ todos: [...state.todos, todo] })),
  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
  setName: (value) => set({ name: value }) // 实现状态更新
}))

export default useStore