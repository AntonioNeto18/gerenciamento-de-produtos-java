import { FiEdit2, FiTrash2 } from "react-icons/fi";

const Product = ({ product, handleDeleteProduct, setOpenUpdateModal, setSelectedProduct }) => {
  return (
    <div className="w-full p-5 relative min-h-20 h-full shadow-sm rounded-2xl shadow-white bg-slate-400 my-5">
        
        <div
            className="absolute right-3 top-2 flex gap-2 text-lg"
        >  
            <span
                className="text-gray-700 hover:text-black transition-all duration-300 cursor-pointer"
                onClick={() => {
                    setSelectedProduct(product)
                    setOpenUpdateModal(true)
                }}
            >
                <FiEdit2 />
            </span>
            <span
                className="text-gray-700 hover:text-red-500 transition-all duration-300 cursor-pointer"
                onClick={() => handleDeleteProduct(product.id)}
            >
                <FiTrash2 />
            </span>
        </div>

        <div
            className="flex flex-col "
        >
            <span
                className="text-2xl capitalize text-black font-semibold"
            >
                { product.name } <span className="text-lg text-gray-700">({ product.stock })</span>
            </span>
            <span
                className="text-lg text-gray-600 font-bold"
            >
                R$ { product.price.toFixed(2).replace(".", ",") } por unidade
            </span>
            <span
                className="text-xl text-gray-600 font-bold"
            >
                Descrição: 
                <span
                    className="ml-2 font-semibold"
                >
                    { product.description }
                </span>
            </span>
        </div>
    </div>
  )
}

export default Product