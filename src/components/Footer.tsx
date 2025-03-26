'use client';

export default function Footer() {
    return (
        <footer className="w-full bg-[#5D2514] text-white md:py-12 md:px-6 p-2">
            <div className="mt-8 border-gray-700 md:pt-4 pb-4 text-center text-[12px] md:text-[18px] text-white">
                &copy; {new Date().getFullYear()} Mantra Resturent. All rights reserved.
                <p>
                    Developed by{" "}
                    <a 
                        href="https://www.verveautomation.com" // Replace with the correct URL
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-500"
                    >
                        Verveautomation (PVT) LTD
                    </a>
                </p>
            </div>
        </footer>
    );
}