import React from "react";
import axios from "axios";
import { FaPen, FaTrash } from "react-icons/fa";
import EditVehicleModal from "../editVehicleModal/editVehicleModal.jsx";
import "./list_item.css"

export default function ListItem({ID, vehicle, brand, year, description, refresh, editVisibilityHandler, changeHandler, isEditVisible, formData, setFormData}){

    function onDelete(){
        axios.delete(`http://localhost:3000/veiculos/${ID}`)
        .then((response) => {
            console.log(response.data);
            refresh();
        })
        .catch((error) => {
          console.log(error);
        })
    }

    function onEdit(){
        editVisibilityHandler();
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:3000/veiculos/${ID}`, formData)
        .then((response) => {
            console.log(response.data);
            refresh(true);
            setFormData({
                veiculo: '',
                marca: '',
                ano: '',
                descricao: '',
                vendido: 'false'
            });
        })
        .catch((error) => {
          console.log(error);
          refresh();
        })
        editVisibilityHandler();
      };

    return(
        <div className="h-36 w-full border-b-black border-b-2 flex flex-row items-center">
            <div className="w-full h-full px-8 flex flex-row justify-between items-center text-white">
                <p>{ID}</p>
                <div>
                    <p>Veículo: {vehicle}</p>
                    <p>Marca: {brand}</p>
                    <p>Ano: {year}</p>
                </div>
                <div>
                    <p>Descrição: {description}</p>
                </div>
                <div className="flex flex-row gap-2">
                    <button onClick={onEdit} className='text-black bg-white rounded-lg px-2 py-2'>
                        <FaPen></FaPen>
                    </button>
                    <button onClick={onDelete} className='text-black bg-white rounded-lg px-2 py-2'>
                        <FaTrash></FaTrash>
                    </button>
                    {isEditVisible && (
                        <div className="absolute top-0 left-0 w-screen h-screen bg-[#2b2b2b9f] flex items-center justify-center">
                            <EditVehicleModal modalVisibilityHandler={editVisibilityHandler} submitHandler={handleEditSubmit} changeHandler={changeHandler} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}