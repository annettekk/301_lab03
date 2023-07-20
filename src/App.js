
import './App.css';
import data from "./data.json"

import Main from "./components/Main";
import SelectedBeast from "./components/SelectedBeast";
import { useState } from 'react';

import Header from "./components/Header";

function App() {

  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const [beastData, setBeastData] = useState(data);

  function handleBeastData(event) {
      
    const filteredBeasts = data.filter(beast => beast.horns === parseInt(event.target.value));
    event.target.value === '' ? setBeastData(data) : setBeastData(filteredBeasts) ;
    
  }

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
      <Header handleBeastData={handleBeastData}/>
      <Main beastData={beastData} handleModal={handleModal} />
      {modal &&<SelectedBeast modalContent={modalContent} closeModal={closeModal}/>}
    </div>
  );
}

export default App;
