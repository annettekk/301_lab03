
import './App.css';
import data from "./data.json"

import Main from "./components/Main";
import SelectedBeast from "./components/SelectedBeast";
import { useState } from 'react';



function App() {

  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function handleModal(beast) {
    setModal(!modal);
    setModalContent(beast);
  }

  function closeModal() {
    setModal(!modal);
    setModalContent({});
  }

  return (
    <div className="App">
      <Main data={data} handleModal={handleModal} />
      {modal &&<SelectedBeast modalContent={modalContent} closeModal={closeModal}/>}
    </div>
  );
}

export default App;
