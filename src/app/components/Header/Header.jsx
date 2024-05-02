import { AiOutlineUser } from "react-icons/ai";
import ModalUser from "./ModalUser";

export default function Header() {
    return (
        <div className="flex justify-center bg-green-500 items-center px-1 h-full py-4">
        <header className="flex space-x-64 gap-x-32">
            <h1 className="text-center">Cat List</h1>
            <button> + Add Cat</button>
            <button ><AiOutlineUser /></button>
            <ModalUser />
        </header>
        </div>
    )
}