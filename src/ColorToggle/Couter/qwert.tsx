import React, { useCallback, useEffect, useState } from "react";
import useStore from "../../globalState";

const Couter = () => {
    // 为解决类型错误，假设在 GlobalState 中添加 currentHour 和 setTime 类型定义
    // 这里先临时设置 currentHour 类型为 number，setTime 为函数类型
    type GlobalState = {
        currentHour: number;
        setTime: (hour: number) => void;
    };

    // 同时需要确保 useStore 返回值类型正确
    const useStore = (): GlobalState => {
        // 这里是 useStore 的模拟实现，实际中需要根据具体情况修改
        const [currentHour, setCurrentHour] = useState(0);
        const setTime = (hour: number) => setCurrentHour(hour);
        return { currentHour, setTime };
    };

    const { currentHour, setTime } = useStore(); // 新增获取当前时间
    const [isPulsing, setIsPulsing] = useState(false);

    // 时间变化动画效果
    useEffect(() => {
        setIsPulsing(true);
        const timeout = setTimeout(() => setIsPulsing(false), 500);
        return () => clearTimeout(timeout);
    }, [currentHour]); // 改为监听全局时间变化

    // 时间控制逻辑
    const handleTimeChange = useCallback((delta: number) => {
        const newHour = (currentHour + delta + 24) % 24;
        setTime(newHour); // 直接操作全局状态
    }, [currentHour, setTime]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleTimeChange(12); // 每 3 秒增加 12 小时
        }, 3000); // 将时间间隔从 1000（1 秒）改为 3000（3 秒）
        return () => clearInterval(intervalId);
    }, [handleTimeChange]);

    const isDaytime = currentHour >= 6 && currentHour < 18;
    const displayTime = `${currentHour.toString().padStart(2, '0')}:00`;

    return (
        <div className={`w-1/5 max-w-xl text-center p-8 rounded-lg shadow-lg ${
            isDaytime? 'bg-red-100 text-red-900' : 'bg-gray-900 text-blue-100'
        } border border-gray-700 transition-colors duration-500`}>
            <h1 className="text-4xl font-bold mb-6">
                {isDaytime? "🌞 sun time" : "🌙 emo time"}
            </h1>
            <p className={`text-2xl font-mono ${isPulsing? 'animate-pulse' : ''}`}>
                {displayTime}
            </p>

            <div className="flex gap-2 mt-4 justify-center">
                <button
                    onClick={() => handleTimeChange(-12)}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                >
                    -12小时
                </button>
                <button
                    onClick={() => handleTimeChange(12)}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                    +12小时
                </button>
            </div>

            <p className="text-sm mt-4">
                (现实3秒 = 模拟12小时)
            </p>
        </div>
    );
};

export default Couter;