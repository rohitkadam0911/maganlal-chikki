  "use client";

  export default function AboutSection() {

    const data = {
      title: "WELCOME TO MAGANLAL CHIKKI",
      description: `We are the leading manufacturers, exporters and suppliers of Chikki, Dry Fruit Rolls, 
                      Fudges, Jellies, and Savouries (Namkeens). Our hand-made products are made in a clean 
                      and hygienic environment and are packed efficiently to retain their aroma and taste.
                      Chikki Store is an online sales platform for chikki, dry fruit roll, fudges & savouries. 
                      We oversee content creation, content processing and content management along with collection 
                      and order dispatchment.As a distinguished authority within our respective fields, visitors turn
                      to us for trusted recommendations on their buying decisions. We are located at Lonavala and 
                      continuously strive to provide quality and satisfaction. We employ traditional methods to prepare 
                      these delicacies, thereby making them easy to digest and extremely nutritious.`,

      description2: `We are working under the able guidance of our mentor, Mr. Dhruv Agarrwal, whose rich industrial experience, 
                      has always motivated and inspired us to cater to the varied requirements of our clients, and march
                      ahead of our counterparts in the food industry.`,

      description3: `We understand the significance of quality in our
                      particular field, and therefore we closely observe the production process and maintain quality standards. 
                      Furthermore, to optimally satisfy the taste buds of the end user, we provide unique packaging solutions
                      that preserve the freshness, taste and aroma of the products. Our team of experts has vast experience in this 
                      field and make sure to refrain from using preservatives, artificial color, flavors or any other intoxicating 
                      substances, while making the food items. Based on our honest dealings and wide-spread distribution network, 
                      we are catering to the gastronomic requirements of clients based in Dubai, England, and America.`,

      image: "https://appy.trycatchtech.com/uploads/maganlalchikki/7836f658857a8502ab444d2723490965.jpeg",

      title2: "our team",

      ourteam: `The success and appreciation that precedes us is the outcome of sincerity and 
                dedication of our workforce. Their immense expertise in this particular field and 
                meticulous efforts towards maintaining the quality of our products has earned us 
                numerous accolades from all over the country. Comprising of food experts, chefs, 
                quality controllers, sales and marketing personnel, managing executives, and other 
                skilled workers, our workforce ensures we produce delicious and hygienic products. 
                We are hugely assisted by our team members to improvise our policies and procedures 
                as per the changing trends, thanks to their understanding of the market.`,

      historyTitle: "History",
      historySub: "And the legacy moves on!",
      historyText1: `The incredible journey of Maganlal Chikki started way back in 1880 in Lonavla when Late Shri. Bhivrajji Agarrwal started the company in the name of his son Maganlal. Later the business was taken to new heights by Maganlal and his sons who undertook innovative routes to expand. They used to provide nutritious chikki to the railway workers, on a teak leaf.`,

      historyText2: `Today the company has grown by leaps and bounds. Today the fourth generation – Mangeysh Dhruv Agarrwal is spreading wings in international markets and have even started online shopping.`,

      clientTitle: "CLIENT SATISFACTION",

      clientText: `Our success totally depends on our customers as their likes and dislikes really matter to us. Based on our customer-centric approach and an uncompromising attitude towards maintaining the quality of our products, we have gained overwhelming recognition in the industry. while maintaining long-lasting relations with our existing clients, we also look forward to expanding our clientele base with the timely supply of nutritive and flavorsome products. Further, we are catering to the gastronomic requirements of clients based in Dubai, England, France and America`,
      uspTitle: "OUR USP",

      uspList: [
        "Excellent state-of-the-art infrastructure",
        "Cost-effective and quality products within 'On-Time' delivery",
        "Customer-centric approach",
        "Flavorsome products",
        "Hygienically processed",
        "On-time product delivery",
        "Competitive prices",
        "Ethical business practices",
        "Strong distribution network"
      ]
    }


    return (
      <>
        <section className="bg-[#f5f5f5] py-14">
          {/* **** */}
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Image */}
              <div>
                <img
                  src={data.image}
                  alt="Maganlal Chikki"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* Content */}
              <div>
                <h2 className="text-base font-medium md:text-2lg font-serif text-[#666] mb-4 tracking-wide">
                  {data.title}
                </h2>

                <p className="text-gray-500 pb-3 text-[13px] leading-relaxed text-justify ">
                  {data.description}
                </p>
                <p className="text-gray-500 pb-3 text-[13px] leading-relaxed text-justify ">
                  {data.description2}
                </p>
                <p className="text-gray-500 pb-3 text-[13px] leading-relaxed text-justify ">
                  {data.description3}
                </p>

                <h2 className="text-gray-500 text-justify font-serif mb-3 text-[18px] uppercase font-medium leading-[1.1] outline-none">
                  {data.title2}
                </h2>

                <p className="text-gray-500 pb-3 text-[13px] leading-relaxed text-justify ">
                  {data.ourteam}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-200 py-14 ">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 text-gray-700">

            {/* History */}

            <h2 className="text-2xl font-semibold mb-4 outline-none text-[18px] font-serif leading-[1.1] text-[#666]">
              {data.historyTitle}
            </h2>

            <p className="font-semibold mb-2 text-[#666] outline-none leading-normal font-mono text-[13px]">
              {data.historySub}
            </p>

            {/* <p className="mb-3 ouline-none text-[#666] text-[13px] leading-normal font-mono">
              {data.historyText1}
            </p> */}
            <p className="mb-3 ouline-none text-[#666] text-[13px] leading-normal">
              The incredible journey of Maganlal Chikki started way back in 1880 in Lonavla when 
              <span className="font-semibold"> Late Shri. Bhivrajji Agarrwal </span> 
              started the company in the name of his son <span className="font-semibold"> Maganlal. </span>
              Later the business was taken to new heights by Maganlal and 
              his sons who undertook innovative routes to expand. They used to 
              provide nutritious chikki to the railway workers, on a teak leaf.
            </p>

            <p className="mb-4 ouline-none text-[#666] text-[13px] leading-normal">
              Today the company has grown by leaps and bounds. Today the fourth generation
              –<span className="font-semibold"> Mangeysh Dhruv Agarrwal </span> is spreading wings in international markets and have 
              even started online shopping. 
            </p>

            {/* Client Satisfaction */}

            <h2 className="text-2xl font-semibold mb-4 outline-none mt-8 text-[18px] font-serif leading-[1.1] text-[#666] uppercase">
              {data.clientTitle}
            </h2>

            <p className="mb-3 ouline-none text-[#666] text-[13px] leading-normal">
              {data.clientText}
            </p>

            {/* USP */}

            <h2 className="text-align mb-4 font-serif text-[18px] font-semibold leading-[1.1] outline-none text-[#666]">
              {data.uspTitle}
            </h2>

            <ul className="list-disc pl-6 space-y-0 text-align outline-none text-[#666] text-[13px] leading-normal">

              {data.uspList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}

            </ul>

          </div>
        </section>
      </>
    )
  }