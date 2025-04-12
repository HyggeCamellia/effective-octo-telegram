import { useState } from 'react'

const Compo1 = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="p-4 border rounded-lg bg-blue-100">
      <h2 className="text-xl font-bold mb-4">组件1 - 计数器</h2>
      <p className="mb-2">当前计数: {count}</p>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => setCount(count + 1)}
      >
        增加
      </button>
    </div>
  )
}

export default Compo1


