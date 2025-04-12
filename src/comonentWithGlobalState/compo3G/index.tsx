import { useState, useEffect } from 'react'
import useStore from '../../globalState'

const Compo3G = () => {
  const { isDark, toggleTheme, count, todos } = useStore()
  return (
    <div className={`p-4 border rounded-lg ${isDark ? 'bg-gray-800 text-white' : 'bg-yellow-100'}`}>
      <h2 className="text-xl font-bold mb-4">组件3G - 全局主题切换</h2>
      <p className="mb-2">当前计数: {count}</p>
      <p className="mb-2">待办事项数量: {todos.length}</p>
      <button 
        className={`${
          isDark ? 'bg-yellow-400' : 'bg-gray-800 text-white'
        } px-4 py-2 rounded hover:opacity-90`}
        onClick={toggleTheme}
      >
        切换全局主题
      </button>
    </div>
  )
}

export default Compo3G
