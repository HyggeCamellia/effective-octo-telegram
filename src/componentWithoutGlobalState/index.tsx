import Compo1 from "./compo1"
import Compo2 from "./compo2"
import Compo3 from "./compo3"

const ComponentWithoutGlobalState = () => {
    return (
        <>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">独立状态组件示例</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Compo1 />
                    <Compo2 />
                    <Compo3 />
                </div>
            </div>
        </>
    )
}

export default ComponentWithoutGlobalState