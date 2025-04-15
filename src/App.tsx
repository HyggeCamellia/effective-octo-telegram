import React from 'react';
import ComponentWithGlobalState from './comonentWithGlobalState';
import ColorToggle from './ColorToggle/UltraSimpleTimer/lyq';
import UltraSimpleTimer from './ColorToggle/whd';
import Couter from './ColorToggle/Couter/qwert';
import Compo5G from './ColorToggle/Compo5G/quanjv';
import Another from './ColorToggle/Compo5G/Another';
const App = () => {

  return (
   <>
      <UltraSimpleTimer />
   <ColorToggle />
   <Couter />
   <Compo5G />
   <Another />
 
    </>
  );
}


export default App;
