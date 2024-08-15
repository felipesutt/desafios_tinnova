import React from "react";
import { IoClose } from "react-icons/io5";
import "./createVehicleModal.css"

export default function CreateVehicleModal({modalVisibilityHandler, submitHandler, changeHandler}){
    return(
        <div className="w-[50rem] h-[37.5rem] bg-[#294d5e] rounded-2xl">
            <form className="relative px-8 py-8 h-full text-white" onSubmit={submitHandler}>
                <div className="absolute right-8 top-8 justify-end pb-10">
                    <button onClick={modalVisibilityHandler} type="button"><IoClose className="w-8 h-8"></IoClose></button>
                </div>
                <div className="flex flex-col h-full pt-16 justify-between">
                    <div className="h-10 px-8 flex justify-between">
                        <label>Veículo: <input className='h-full rounded-lg outline-none text-black pl-2' name="veiculo" onChange={changeHandler} placeholder="Veículo" type="text" /></label>
                        <label>Marca: <input className='h-full rounded-lg outline-none text-black pl-2' name="marca" onChange={changeHandler} placeholder="Marca" type="text" /></label>
                    </div>
                    <div className="h-10 px-8 flex justify-between">
                        <label>Ano: <input className='h-full rounded-lg outline-none text-black pl-2' name="ano" onChange={changeHandler} placeholder="Ano" type="number" /></label>
                        <label>Descrição: <input className='h-full w-80 rounded-lg outline-none text-black pl-2' name="descricao" onChange={changeHandler} placeholder="Descrição" type="text" /></label>
                    </div>
                    <div className="h-10 px-8 flex justify-between gap-8">
                        <label>
                            Vendido: <select className='h-full w-80 rounded-lg outline-none text-black pl-2' name="vendido" onChange={changeHandler}>
                                        <option value='true'>Sim</option>
                                        <option value='false'>Não</option>
                                    </select>
                        </label>
                    </div>
                    <div className="flex justify-end">
                        <button className='bg-[#FFD001] px-2 py-2 rounded-lg text-black font-semibold'>Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}