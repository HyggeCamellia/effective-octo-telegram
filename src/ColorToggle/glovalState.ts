import { create } from 'zustand'; // 修复重复导入，保留正确形式

interface GlobalState {
  currentHour: number; // 必须存在的属性
  isDark: boolean;
  setTime: (hour: number) => void; // 添加参数类型声明
  initializeClock: () => void;
}

export default create<GlobalState>((set) => ({
  currentHour: 6,
  isDark: false,
  setTime: (hour: number) => set({ // 显式声明参数类型
    currentHour: hour % 24,
    isDark: hour < 6 || hour >= 18
  }),
  initializeClock: () => {
    set({ currentHour: 6, isDark: false });
  }
}));