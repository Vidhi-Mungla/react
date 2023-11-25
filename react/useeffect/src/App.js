import './App.css';
import Chat from './ChatRoom';
import TriggerElementOnScroll, { Box } from './TriggerElementOnScroll';
import ModalDialog from './ModalDialog';
import UseEffectHook from './UseEffectHook';
import TestModal from './TestModal';
import { CreateConnetion } from './CreateConnection';

function App() {


  return (
    <div className="App">
    <UseEffectHook/>
      <ModalDialog/>
      <TestModal/>
      <CreateConnetion/>
   <Chat/>

   <TriggerElementOnScroll/>
   <Box/>
   <TriggerElementOnScroll/>

    </div>
  );
}

export default App;