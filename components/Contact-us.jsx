"use client";

export default function Contact() {
  return (
    <section className="bg-gray-100 py-8 mx-4 md:mx-10 lg:mx-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 md:px-8 lg:px-8 bg-white rounded-lg p-8">
        <h2 className="text-center font-semibold mb-1 text-[26px] text-[#222] capitalize font-bold text-center outline-none leading-normal">
          Contact Form
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your name*"
              className="w-full text-gray-800 text-sm rounded py-3 outline-none focus:ring-0 h-[40px] border border-[#ebeaea] rounded-[2px] float-left mb-[10px] px-[10px] "
            />
            <input
              type="email"
              placeholder="Your email*"
              className="w-full text-gray-800 rounded text-sm py-3 outline-none focus:ring-0 h-[40px] border border-[#ebeaea] rounded-[2px] float-left mb-[10px] px-[10px] "
            />
          </div>

          <textarea
            rows="8"
            placeholder="Your message *"
            className="w-full h-45 resize-none border text-gray-900 text-sm border-gray-300 rounded px-4 py-2 outline-none focus:ring-0 "
          >
          </textarea>

          <button
            type="submit"
            className="text-[12px] bg-[#ff395c] h-[36px] rounded-[17px] px-[45px] leading-[36px] capitalize border-0 font-bold mt-[5px] cursor-pointer"
          >
            Send Us
          </button>
        </form>
      </div>

      <br />


      <section>
        <div className="relative flex item-center mt-5 bg-gray-100 shadow-none mb-8">
          <hr className="border-1 border-red-400 ml-16 w-full item-center" />
          <span className="text-gray-700 absolute bottom-[-8px] text-sm left-1 font-serif ">
            Address
          </span>
        </div>

        <div className="mt-1 text-[#666]">
          <h3 className="font-bold outline-none text-[16px] leading-[1.1]">Maganlal Chikki Products Pvt Ltd</h3>
          <p className="font-serif ">Shed No. 49A & B, Opp. Monsento LICEL, Nangargaon, Lonavala 410401 Dist. Pune</p>
          <p className="text-black font-normal">Online store:- www.maganlalchikki.in</p>
          <p className="mt-2 font-mono mb-2">Ph. No. :- +912114274060 I Mobile No. :- +917666530969</p>
          <p className="mb-2">Contact Time :- 9 AM To 6 PM</p>
          <p className="mb-2">Factory Closed – Thursday</p>
          <p className="hover:text-red-400">sales@maganlalchikki.in</p>
        </div>
      </section>

      <div className="mt-10 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30224.789384342756!2d73.38613984544226!3d18.749129061180764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be80144b3f9e9e9%3A0x91bb5731ddaacefe!2sMaganlal%20Chikki%20Products%20Pvt.%20Ltd.%20(Chikki%20Manufacturing%20Factory)!5e0!3m2!1sen!2sin!4v1772978681099!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-screen pointer-event-none"
        />
      </div>


    </section>
  );
}