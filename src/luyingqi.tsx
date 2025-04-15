import React, { useState } from 'react';

// 定义颜色切换组件
const ColorToggle: React.FC = () => {
  // 使用 useState 管理颜色状态，初始颜色为红色
  const [color, setColor] = useState<string>('red');

  // 定义切换颜色的函数
  const toggleColor = () => {
    setColor(color === 'red' ? 'blue' : 'red');
  };

  return (
    <div>
      <button onClick={toggleColor}>切换颜色</button>
      <p style={{ color }}>这是一段带颜色的文字</p>
    </div>
  );
};

export default ColorToggle;