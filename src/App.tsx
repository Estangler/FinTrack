import DashboardContainer from "./components/dashboard/DashboardContainer";
import Sidebar from "./components/sidebar/Sidebar";
import TransactionModal from "./components/dashboard/TransactionModal";
import { useState } from "react";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <div className="flex">
      <Sidebar />
      <DashboardContainer handleModal={openModal} />
      <TransactionModal handleModal={openModal} isModalOpen={modalIsOpen} />
    </div>
  );
}

export default App;
