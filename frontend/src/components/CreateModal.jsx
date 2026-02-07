import { useState } from "react"
import Subtitle from "./ui/Subtitle"
import Input from "./ui/Input"

const CreateModal = ({ setOpenCreateModal, handleCreateProduct }) => {
  
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState()
  const [stock, setStock] = useState()
  
  return (
    <div
        className="absolute inset-0 flex justify-center items-center h-screen w-full bg-black/50 z-10"
    >
        <div
            className="w-[85%] bg-slate-800 rounded-2xl relative z-20 p-2 text-white"
        >
            <span 
                className="text-2xl text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 w-10 h-10 flex justify-center items-center font-extrabold absolute right-4 top-3 cursor-pointer"
                onClick={() => setOpenCreateModal(false)}
            >
                X
            </span>

            <Subtitle 
                subtitle="Cadastratar Produto"
            />

            <form
                className="mt-10 flex flex-col gap-2"
                onSubmit={(e) => {
                    e.preventDefault();
                    const product = {
                        "name": name,
                        "description": description,
                        "price": price,
                        "stock": stock
                    };
                    handleCreateProduct(product);
                }}
            >
                <Input 
                    label="Nome do produto"
                    placeholder="Digite o nome do produto"
                    type="text"
                    value={ name }
                    setValue={ setName }
                />

                <Input 
                    label="Descrição do produto"
                    placeholder="Escreva uma breve descrição do produto"
                    type="text"
                    value={ description }
                    setValue={ setDescription }
                    textarea={ true }
                />

                <Input 
                    label="Preço do produto"
                    placeholder="Digite o preço do produto"
                    type="number"
                    value={ price }
                    setValue={ setPrice }
                />

                <Input 
                    label="Quantidade do produto"
                    placeholder="Digite a quantidade do produto"
                    type="number"
                    value={ stock }
                    setValue={ setStock }
                />

                <button
                    className="bg-slate-500 text-lg font-extrabold uppercase py-2 mt-5 rounded-2xl cursor-pointer hover:bg-slate-600 transition-all duration-300"
                    type="submit"
                >
                    Cadastrar
                </button>

            </form>

        </div>
    </div>
  )
}

export default CreateModal