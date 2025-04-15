import React, { useState } from 'react';

// 定义卡片组件的属性类型
interface CardProps {
    initialTitle: string;
}

// 定义卡片组件
const CardComponent: React.FC<CardProps> = ({ initialTitle }) => {
    // 使用 useState 钩子来管理标题状态
    const [title, setTitle] = useState(initialTitle);

    // 定义按钮点击事件处理函数
    const handleButtonClick = () => {
        setTitle('标题已更新');
    };

    return (
        <div className="border p-4 rounded shadow-md">
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">这是一个简单的卡片组件示例。</p>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                onClick={handleButtonClick}
            >
                点击更新标题
            </button>
        </div>
    );
};

export default CardComponent;    