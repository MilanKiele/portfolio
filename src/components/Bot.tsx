import Spline from "@splinetool/react-spline";
import Link from "next/link";

export default function Bot() {
    return (
        <section className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-0 px-6 py-8">
            {/* AI Bot Spline */}
            <div className="w-full md:w-1/2 h-[720px] flex justify-center">
                <Spline scene="/spline/bot.spline" className="max-w-full bg-white" />
            </div>

            {/* AI Agent Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-black">
                    Get Your Custom AI Agent Now!
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-lg">
                    Elevate your business with an AI-powered assistant designed for sales, customer service, or automating your workflow. Enhance customer experience and streamline operations effortlessly.
                </p>
                <Link
                    className="mt-6 px-6 py-3 text-lg font-semibold rounded-lg bg-[#00FFFF] text-black hover:bg-[#008B8B] transition-all"
                    href="/pricing"
                >
                    View Pricing
                </Link>
            </div>
        </section>
    );
}
