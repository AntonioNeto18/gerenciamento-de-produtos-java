import { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify";
import Container from "./components/ui/Container"
import Title from "./components/ui/Title"
import Api from "./api/Api";
import Product from "./components/Product";
import Subtitle from "./components/ui/Subtitle";
import CreateProductBtn from "./components/CreateProductBtn";
import CreateModal from "./components/CreateModal";
import UpdateModal from "./components/UpdateModal";

function App() {

  const api = new Api();
  const [products, setProducts] = useState([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getProducts = async () => {
    const data = await api.findAllProducts();
    setProducts(data);
  };

  const handleCreateProduct = async (product) => {
    const created = await api.createProduct(product);
    if (created) setOpenCreateModal(false);
    await getProducts();
  }

  const handleDeleteProduct = async (productId) => {
    await api.deleteProduct(productId);
    await getProducts();
  }

  const handleUpdateProduct = async (productId, product) => {
    const updated = await api.updateProduct(productId, product);
    if (updated) {
      setOpenUpdateModal(false);
      setSelectedProduct(null);
    }
    await getProducts();
  }

  useEffect(() => {
    getProducts()
  }, []);

  return (
    <section className="bg-slate-950 min-h-screen">
      {openCreateModal && (
        <CreateModal
          setOpenCreateModal={setOpenCreateModal}
          handleCreateProduct={handleCreateProduct}
        />
      )}

      {openUpdateModal && (
        <UpdateModal 
          setOpenUpdateModal={setOpenUpdateModal}
          setSelectedProduct={selectedProduct}
          selectedProduct={selectedProduct}
          handleUpdateProduct={ handleUpdateProduct }
        />
      )}

      <Container>
        <div
          className="flex justify-center"
        >
          <Title
            title="Gerenciamento de produtos"
          />
        </div>

        <div className="flex flex-col mt-10">
          <div className="flex gap-5 items-center">
            <Subtitle
              subtitle="Produtos"
            />
            <CreateProductBtn
              setOpenCreateModal={setOpenCreateModal}
            />
          </div>
          {products.length == 0 ? (
            <span
              className="text-3xl text-center w-full font-bold uppercase text-gray-400 my-10"
            >
              Nenhum produto encontrado.
            </span>
          ) : (
            <div
              className="flex flex-col gap-5"
            >
              {products.map((p) => (
                <Product
                  key={p.id}
                  product={p}
                  handleDeleteProduct={handleDeleteProduct}
                  setOpenUpdateModal={setOpenUpdateModal}
                  setSelectedProduct={setSelectedProduct}
                />
              ))}
            </div>
          )}
        </div>

        <ToastContainer
          position="top-center"
          toastClassName="w-[500px]"
          autoClose={ 1500 }
          hideProgressBar={ false }
          newestOnTop={ false }
          closeOnClick={ true }
          pauseOnHover={ false }
          rtl={ false }
          theme="dark"
        />

      </Container>
    </section>
  )
}

export default App
