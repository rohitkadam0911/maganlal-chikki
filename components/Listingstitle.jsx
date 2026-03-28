
const ListingsTitle = ({title}) => {
    return (
        <>
            <section className="bg-gray-100">
                <div className="relative">
                    <img src="/bg-bread.jpg" alt="" className="h-50 w-300">
                    </img>
                    <p className="flex justify-center text-white-800 text-3xl font-serif absolute top-10 left-145">
                        {title}
                    </p>
                    <div className=" text-white-800 text-sm font-serif absolute top-20 left-143">
                        <ul className="flex justify-between items-center gap-2">
                            <li>
                                <a href="/" className="active hover:text-red-600 cursor-pointer">Home</a>
                                <span> |</span>
                            </li>
                            <li className="text-red-600">{title}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ListingsTitle;