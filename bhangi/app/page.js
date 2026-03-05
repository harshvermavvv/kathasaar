"use client";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const sliderImages = [
    { src: "/images/slider1.png", link: "" },
    { src: "/images/slider2.png", link: "/aarti" },
    { src: "/images/slider3.png", link: "/chalisa" },
    { src: "/images/slider4.png", link: "/vratkatha" },
  ];

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer bg-white/70 hover:bg-white p-2 rounded-full shadow-md"
      onClick={onClick}
    >
      <FaArrowLeft className="text-yellow-900 text-lg" />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer bg-white/70 hover:bg-white p-2 rounded-full shadow-md"
      onClick={onClick}
    >
      <FaArrowRight className="text-yellow-900 text-lg" />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    pauseOnHover: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="min-h-screen bg-[#fefae0] bg-[url('/images/bg-pattern-light.png')] bg-cover bg-fixed">
      {/* Full-width Slider Section */}
      <div className="w-full overflow-hidden relative">
        <Slider {...settings}>
          {sliderImages.map((img, i) => (
            <div key={i}>
              <Link href={img.link}>
                <div className="relative w-full h-[60vh] md:h-[80vh] cursor-pointer">
                  <Image
                    src={img.src}
                    alt={`Kathasaar Slider ${i + 1}`}
                    layout="fill"
                    objectFit=""
                    priority={i === 0}
                    className="brightness-100"
                  />
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      {/* Main container below the slider */}
      <div className="container mx-auto px-4 py-12 text-center">
        {/* Intro Section */}
        <h1 className="text-5xl font-bold text-yellow-900 mb-6 animate-fade-in">
          कथासार में आपका स्वागत है
        </h1>
        <p className="text-lg text-yellow-800 max-w-2xl mx-auto animate-fade-in delay-100">
          यहाँ आपको सभी देवी-देवताओं की आरतियाँ, चालीसा और व्रत कथाएँ हिन्दी भाषा में मिलेंगी। <br />
          इस पवित्र संग्रह से आप भक्ति और श्रद्धा की अनुभूति कर सकते हैं।
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              href: "/aarti",
              image: "/images/aarti.jpg",
              title: "आरती",
              desc: "सभी देवी-देवताओं की आरतियों का संग्रह",
            },
            {
              href: "/chalisa",
              image: "/images/chalisa.jpg",
              title: "चालीसा",
              desc: "श्री हनुमान, दुर्गा, शिव आदि की चालीसाएँ",
            },
            {
              href: "/vratkatha",
              image: "/images/vrat.jpg",
              title: "व्रत कथा",
              desc: "एकादशी व्रत और अन्य उपवास कथाओं का संग्रह",
            },
          ].map((item, index) => (
            <Link key={index} href={item.href}>
              <div className="relative flex flex-col h-full backdrop-blur-sm bg-white/70 border border-[#e2be83] rounded-2xl shadow-xl hover:shadow-yellow-500 hover:scale-105 transition-all duration-300 ease-in-out p-6 cursor-pointer text-center overflow-hidden group">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="rounded-xl mb-4 object-cover border border-yellow-100"
                />
                <h3 className="text-2xl font-bold text-yellow-900 group-hover:text-[#a87100] transition">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm mt-2 flex-grow">{item.desc}</p>
                <span className="text-yellow-700 text-sm mt-4 font-medium group-hover:underline">
                  और पढ़ें →
                </span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-100/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
              </div>
            </Link>
          ))}
        </div>

        {/* About Section */}
        <div className="mt-20 bg-white/60 rounded-2xl border border-yellow-200 shadow-md p-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 backdrop-blur-sm">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/kathasaar about.png"
              alt="Kathasaar"
              width={500}
              height={500}
              className="rounded-xl shadow-lg border border-yellow-100"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl font-bold text-yellow-900 mb-4">कथासार के बारे में</h2>
            <p className="text-gray-800 text-base leading-relaxed">
              <strong>कथासार</strong> एक भक्तिमय डिजिटल मंच है जहाँ आप हिन्दी भाषा में
              <span className="text-yellow-800 font-medium"> आरतियाँ, चालीसा और व्रत कथाएँ </span>
              पढ़ सकते हैं और डाउनलोड कर सकते हैं , सुन सकते हैं। यह वेबसाइट सनातन संस्कृति के दिव्य साहित्य को सहज, सुंदर और सुलभ रूप में प्रस्तुत करने का प्रयास है।
              <br /><br />
              यहाँ की प्रत्येक सामग्री शुद्ध भाव, श्रद्धा और भक्तिपूर्वक संकलित की गई है ताकि हर साधक अपने दैनिक उपासना पथ पर इसका लाभ उठा सके।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
