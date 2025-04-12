import { useEffect, useState } from 'react'

const Compo2 = () => {
  const [todos, setTodos] = useState<string[]>([])
  const [input, setInput] = useState('')

  const handleAdd = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()])
      setInput('')
    }
  }

  return (
    <div className="p-4 border rounded-lg bg-green-100">
      <h2 className="text-xl font-bold mb-4">组件2 - 待办事项</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded flex-1"
          placeholder="输入待办事项"
        />
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
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

export default Compo2