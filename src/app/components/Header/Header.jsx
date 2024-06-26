'use client';

import { useState } from "react";
import PopUpUsuario from "./PopUpUsuario";

import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";


export default function Header() {
    const [count, setCount] = useState(0);
    return (
        <div className="flex justify-center bg-green-500 items-center px-1 h-full py-4">
        <header className="flex space-x-64 gap-x-32">
            <h1 className="text-center">Cat List</h1>
            <button> + Add Cat</button>
            <PopUpUsuario />
            {/* <button onClick={()=> setShow(true)}><AiOutlineUser /></button> */}
            {/* <Modal show={show}/> */}
        </header>
        </div>
    )
}