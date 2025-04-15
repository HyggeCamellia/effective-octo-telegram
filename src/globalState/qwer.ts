import { create } from 'zustand';

interface GlobalState {
    timerTime: number;
    textColor: string;
    setTimerTime: (time: number) => void;
    setTextColor: (color: string) => void;
}

const useGlobalStore = create<GlobalState>((set) => ({
    timerTime: 0,
    textColor: 'red',
    setTimerTime: (time) => set({ timerTime: time }),
    setTextColor: (color) => set({ textColor: color })
}));

export default useGlobalStore;
    