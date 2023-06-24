import './App.css';
import { useState } from "react";
import Modal from 'react-modal';

function MyTestModal({ modalShowFlag, setModalShowFlag }) {
  const style = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    content: {
      width: '50%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      padding: '1em',
      textAlign: 'center',
      backgroundColor: '#FFFFFF'
    },
  };
  return (
    <Modal isOpen={modalShowFlag} style={style} onRequestClose={() => setModalShowFlag(false)}>
      <div><b>てすと</b><br/><br/>てすとてすと</div>
      <br/>
      <button onClick={() => setModalShowFlag(false)}>閉じる</button>
    </Modal>
  );
}

function App() {
  const [ modalShowFlag, setModalShowFlag ] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setModalShowFlag(true)}>モーダルを表示</button>
      <MyTestModal modalShowFlag={modalShowFlag} setModalShowFlag={setModalShowFlag} />
    </div>
  );
}

export default App;
