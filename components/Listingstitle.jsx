const ListingsTitle = ({ title }) => {
  return (
    <section className="bg-gray-100">
      <div className="relative">

        {/* Image */}
        <img
          src="/bg-bread.jpg"
          alt=""
          className="w-full h-[120px] sm:h-[150px] md:h-[180px] object-cover"
        />

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">

          {/* Title */}
          <p className="text-white text-xl sm:text-2xl md:text-3xl font-serif">
            {title}
          </p>

          {/* Breadcrumb */}
          <div className="mt-2 text-white text-xs sm:text-sm font-serif">
            <ul className="flex items-center gap-2">
              <li>
                <a href="/" className="hover:text-red-500">Home</a>
                <span> |</span>
              </li>
              <li className="text-red-400">{title}</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ListingsTitle