import { FiPlusCircle } from "react-icons/fi"

const CreateProductBtn = ({ setOpenCreateModal }) => {
  return (
    <div
        className="flex gap-1 items-center bg-slate-900 rounded-2xl w-fit px-5 py-2 text-white hover:text-yellow-500 transition-all duration-300 text-center cursor-pointer text-xl uppercase"
        onClick={() => setOpenCreateModal(true)}
    >
        <FiPlusCircle />
        Criar
    </div>
  )
}

export default CreateProductBtn