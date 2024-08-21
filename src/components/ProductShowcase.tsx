import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";

export const ProductShowcase = () => {
    return (
        <section className="py-24 bg-[linear-gradient(to_bottom,#000,#200d42_34%,#4f21a1)]">
            <div className="container">
                <h2 className="text-5xl md:text-6xl text-center font-bold tracking-tighter">
                    Intuitive interface
                </h2>
                <p className="max-w-md mx-auto text-center text-white/50 mt-5">
                    Celebrate the joy of accomplishment with an app designed to track your progress,
                    motivate your efforts, and celebrate your successes, one task at a time.
                </p>
                <figure className="grid place-content-center mt-14">
                  <Image src={appScreen} alt="screenshot of app" />
                </figure>
            </div>
        </section>
    );
};
