// src/components/Counter.tsx
import { useCounterStore } from '../store/counterStore';

export default function Counter() {
  // 3. 从store获取状态和操作
  const { count, increment, decrement, reset } = useCounterStore();

  // 4. 根据数值决定文字颜色
  const textColor = count > 0 ? 'text-green-600' : 
                    count < 0 ? 'text-red-600' : 'text-gray-800';

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">全局状态计数器</h2>
      
      <div className={`text-6xl font-bold mb-6 text-center ${textColor}`}>
        {count}
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          -1
        </button>
        
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          重置
        </button>
        
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          +1
        </button>
      </div>
    </div>
  );
}