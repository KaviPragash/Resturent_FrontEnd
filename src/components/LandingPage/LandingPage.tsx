import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function QRCodeComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header with rounded bottom */}
      <header className="w-full bg-[#5D2514] md:rounded-b-[300px] rounded-b-[90px] overflow-hidden">
        <div className="container mx-auto px-4 py-6 flex justify-center">
          <div className="w-[120px] md:w-[250px] h-auto">
            <Image
              src="/assets/img/Mantra-removebg-preview.png"
              alt="Mantra Logo"
              width={150}
              height={150}
              layout="responsive"
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center md:py-12 container mx-auto">
        {/* Scan me section */}
        <section className="w-full max-w-md flex flex-col items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5D2514] mb-8 text-center">
            SCAN ME!
          </h1>
          
          <div className="bg-[#5D2514] p-2 rounded-lg shadow-lg w-[200px] md:w-[250px]">
            <div className="bg-white p-3 rounded">
              <Image
                src="/assets/img/b2f34f75-05bd-4324-ac84-592b8cbb28d8.jpg"
                alt="QR Code"
                width={400}
                height={400}
                layout="responsive"
                className="rounded"
              />
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-800 mt-8 text-center leading-relaxed">
            Tap this card with your phone<br />to view our menu
          </p>
        </section>

        {/* CTA Button */}
        <section className="w-full max-w-xs mt-8 md:mt-12">
          <Link href="/" passHref>
              <button className="w-full bg-[#5D2514] hover:bg-[#6d2d1a] text-white font-semibold py-4 px-6 rounded-lg text-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-md">
                Let&apos;s Get Started
                <ArrowRight size={20} className="inline-block" />
              </button>
          </Link>
        </section>
      </main>
    </div>
  );
}