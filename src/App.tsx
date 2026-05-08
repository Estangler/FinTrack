import DashboardContainer from "./components/dashboard/DashboardContainer";
import Sidebar from "./components/sidebar/Sidebar";
import TransactionModal from "./components/modal/TransactionModal";
import { useState } from "react";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <div className="flex">
      <Sidebar />
      <DashboardContainer handleModal={handleModal} />
      <TransactionModal handleModal={handleModal} isModalOpen={modalIsOpen} />
    </div>
  );
}

export default App;
