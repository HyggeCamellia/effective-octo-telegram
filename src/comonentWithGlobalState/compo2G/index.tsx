import { useState } from 'react'
import useStore from '../../globalState'

const Compo2G = () => {
  
  const { todos, addTodo, isDark } = useStore()
  const [input, setInput] = useState('')

  const handleAdd = () => {
    if (input.trim()) {
      addTodo(input.trim())
      setInput('')
    }
  }

  return (
    <div className={`p-4 border rounded-lg h-[200px] ${isDark ? 'bg-gray-800 text-white' : 'bg-green-100'}`}>
      <h2 className="text-xl font-bold mb-4">组件2G - 全局待办事项</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded flex-1 text-black"
          placeholder="输入待办事项"
        />
        <button 
          className={`${
            isDark ? 'bg-green-400' : 'bg-green-500'
          } text-white px-4 py-2 rounded hover:opacity-90`}
          onClick={handleAdd}
        >
          添加
        </button>
      </div>
      <ul className="list-disc list-inside">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default Compo2G
