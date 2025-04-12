import { useState, useEffect } from 'react'

const Compo3 = () => {
  const [isDark, setIsDark] = useState(false)
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={`p-4 border rounded-lg ${isDark ? 'bg-gray-800 text-white' : 'bg-yellow-100'}`}>
      <h2 className="text-xl font-bold mb-4">组件3 - 主题切换</h2>
      <p className="mb-2">当前时间: {time.toLocaleTimeString()}</p>
      <button 
        className={`${
          isDark ? 'bg-yellow-500' : 'bg-gray-800 text-white'
        } px-4 py-2 rounded hover:opacity-90`}
        onClick={() => setIsDark(!isDark)}
      >
        切换主题
      </button>
    </div>
  )
}

export default Compo3