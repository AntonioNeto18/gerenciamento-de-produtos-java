const Subtitle = ({ subtitle }) => {
  return (
    <h2
        className="md:text-3xl text-2xl font-semibold text-center pb-2 border-b-2 border-gray-500 w-fit"
    >
        { subtitle }
    </h2>
  )
}

export default Subtitle