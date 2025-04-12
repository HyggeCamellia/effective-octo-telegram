import useStore from '../../globalState'

const Compo1G = () => {
  const { count, increaseCount, isDark } = useStore()

  return (
    <div className={`p-4 border rounded-lg h-[200px] ${isDark ? 'bg-blue-400 text-white' : 'bg-blue-800'}`}>
      <h2 className="text-xl font-bold mb-4">组件1G - 全局状态计数器</h2>
      <p className="mb-2">全局计数: {count}</p>
      <button 
        className={`${
          isDark ? 'bg-blue-400' : 'bg-blue-500'
        } text-white px-4 py-2 rounded hover:opacity-90`}
        onClick={increaseCount}
      >
        增加
      </button>
    </div>
  )
}

export default Compo1G

