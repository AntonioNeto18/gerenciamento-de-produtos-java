const Input = ({ label, type, placeholder, value, setValue, textarea = false }) => {
    return (
        <div className="flex flex-col gap-1">
            <label
                className="ml-1 text-lg font-bold text-white"
            >
                { label }
            </label>

            { textarea ? (
                <textarea
                    className="w-full bg-gray-700 border-2 border-gray-900 px-2 h-40 text-lg text-white"
                    placeholder={ placeholder }
                    value={ value }
                    onChange={(e) => setValue(e.target.value)}
                >

                </textarea>
            ) : (
                <input
                    type={ type }
                    className="w-full bg-gray-700 border-2 border-gray-900 px-2 h-fit text-lg text-white"
                    placeholder={ placeholder }
                    value={ value }
                    onChange={(e) => setValue(e.target.value)}
                />
            )}

            
        </div>
    )
}

export default Input