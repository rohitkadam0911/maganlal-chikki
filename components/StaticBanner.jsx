export default function StaticBanner() {

  const banners = [
    {
      id: "2",
      title: "Palak (Spinach) Sev 800 Grm",
      banner_image:
        "https://appy.trycatchtech.com/uploads/maganlalchikki/856ed0df1543eb9dc2558153c2bd2204.jpg",
    },
    {
      id: "3",
      title: "Anjeer Dry Fruit Roll – 500 Gm",
      banner_image:
        "https://appy.trycatchtech.com/uploads/maganlalchikki/bcb3ff17e992db6004e9c70ababace3a.jpg",
    },
    {
      id: "1",
      title: "Til (Sesame) Chikki – 200 Gm",
      banner_image:
        "https://appy.trycatchtech.com/uploads/maganlalchikki/cbb5c93caccae4783f52f3bdc2c4ec2d.jpg",
    },
  ];

  return (
    <div className="bg-gray-200 py-6 ">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {banners.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-lg">

              <img
                src={item.banner_image}
                alt={item.title}
                className="w-full h-[200px] object-cover hover:opacity-80 transition-transform duration-300"
              />

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}