import React, { useState, useEffect } from 'react';

const UltraSimpleTimer: React.FC = () => {
    const [time, setTime] = useState<number>(0);
    const [active, setActive] = useState<boolean>(false);

    useEffect(() => {
        let interval: number | null = null;
        if (active) {
            interval = setInterval(() => setTime((t) => t + 1), 1000);
        }
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [active]);

    return (
        <div className="p-8 bg-gray-100 rounded-md">
            <p className="text-4xl font-bold">{time}</p>
            <button className="m-2 p-2 bg-green-500 text-white" onClick={() => setActive(true)}>开始</button>
            <button className="m-2 p-2 bg-red-500 text-white" onClick={() => setActive(false)}>停止</button>
            <button className="m-2 p-2 bg-yellow-500 text-white" onClick={() => setTime(0)}>重置</button>
        </div>
    );
};

export default UltraSimpleTimer;
    