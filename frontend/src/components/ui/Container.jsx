const Container = ({ children }) => {
  return (
    <section
        className="md:w-[80%] w-full min-h-screen mx-auto md:border-x-2 border-gray-500 px-10 py-15 bg-slate-800 text-white"
    >
        { children }
    </section>
  )
}

export default Container