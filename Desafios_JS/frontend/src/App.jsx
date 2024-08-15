import React, { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import ListItem from "./components/listItem/list_item.jsx";
import CreateVehicleModal from "./components/createVehicleModal/createVehicleModal.jsx";
import axios from 'axios';
import './App.css'

function App() {

  const [vehicles, setVehicles] = useState([]);
  const [isCreateVehicleVisible, setCreateVehicleVisible] = useState(false);
  const [isEditVehicleVisible, setEditVehicleVisible] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [formData, setFormData] = useState({
    veiculo: '',
    marca: '',
    ano: '',
    descricao: '',
    vendido: false
  });

  useEffect(() => {
    axios.get('http://localhost:3000/veiculos')
    .then((response) => {
      console.log(response.data);
      setVehicles(response.data);
    })
    .catch(() => {
      console.log("error");
    })
  }, [refresh]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSaveSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/veiculos', formData)
    .then((response) => {
      console.log(response.data);
      handleRefresh();
      setFormData({
        veiculo: '',
        marca: '',
        ano: '',
        descricao: '',
        vendido: false
      });
    })
    .catch((error) => {
      console.log(error);
      handleRefresh();
    })
    handleCreateModalVisibility();
  };

  function handleCreateModalVisibility(){
    if (isCreateVehicleVisible){
      setCreateVehicleVisible(false);
    }
    else{
      setCreateVehicleVisible(true);
    }
  }

  function handleEditModalVisibility(){
    if (isEditVehicleVisible){
      setEditVehicleVisible(false);
    }
    else{
      setEditVehicleVisible(true);
    }
  }

  function handleRefresh(){
    if (refresh){
      setRefresh(false);
    }
    else{
      setRefresh(true);
    }
  }

  return (
    <div className='w-full h-screen bg-zinc-800'>
      <header className='w-full h-20 pt-3 flex justify-center items-center bg-transparent'>
        <div className='h-full w-[50rem] px-3 rounded-2xl bg-[#072C3F] flex justify-between items-center'>
          <div className='flex flex-row gap-2'>
            <div className='flex flex-row gap-2 justify-center items-center text-white'>
              <FaMagnifyingGlass></FaMagnifyingGlass>
              <input className='h-full rounded-lg outline-none text-black pl-2' placeholder='Procurar por ID' type="text" />
            </div>
            <button className='text-black bg-white rounded-lg px-2 py-2'>
              <FaFilter></FaFilter>
            </button>
          </div>
          <button onClick={handleCreateModalVisibility} className='bg-[#FFD001] px-2 py-2 rounded-lg'>Cadastrar veículo</button>
        </div>
      </header>
      <body className='mt-8 mx-8'>
        <div className='mb-3 px-3 py-3 bg-[#072C3F] rounded-2xl w-full max-h-[46.875rem] min-h-[31.25rem] overflow-y-scroll overflow-x-hidden'>
          {vehicles.map((vehicle) => (
            <ListItem key={vehicle.id} ID={vehicle.id} vehicle={vehicle.veiculo} brand={vehicle.marca} year={vehicle.ano} description={vehicle.descricao} refresh={handleRefresh} editVisibilityHandler={handleEditModalVisibility} changeHandler={handleChange} isEditVisible={isEditVehicleVisible} formData={formData} setFormData={setFormData} />
          ))}
        </div>
        {isCreateVehicleVisible && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-[#2b2b2b9f] flex items-center justify-center">
            <CreateVehicleModal modalVisibilityHandler={handleCreateModalVisibility} submitHandler={handleSaveSubmit} changeHandler={handleChange} />
          </div>
        )}
      </body>
    </div>
  )
}

export default App
