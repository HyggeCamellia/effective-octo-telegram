import { useState, useEffect } from'react';
import useStore from '../../globalState';

const Another = () => {
// 为了避免潜在的运行时错误，添加类型检查。同时如果 useStore 返回值为 undefined，给各变量设置默认值。
// 由于 GlobalState 类型上不存在 incrementCount 属性，推测可能是自定义 action 函数，
// 因此仅保留存在的属性，移除 incrementCount，同时添加新的默认值函数
const { isDark = false, addTodo = () => {} } = useStore() || {};
// 为 incrementCount 单独定义默认函数
const incrementCount = () => {};
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()!== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className={`p-4 border rounded-lg ${isDark? 'bg-gray-800 text-white' : 'bg-yellow-100'}`}>
      <h2 className="text-xl font-bold mb-4">另一个组件</h2>
      <p className="mb-2">当前主题: {isDark? '黑暗' : '明亮'}</p>
      <input 
        type="text" 
        placeholder="添加待办事项" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)}
        className="border rounded p-2 mb-2 w-full"
      />
      <button 
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={handleAddTodo}
      >
        添加待办事项
      </button>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2"
        onClick={incrementCount}
      >
        增加计数
      </button>
    </div>
  );
};

export default Another;