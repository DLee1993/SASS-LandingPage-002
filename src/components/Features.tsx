import FeatureIcon from "@/assets/icons/ecosystem.svg";

const features = [
    {
        title: "Integration Ecosystem",
        description:
            "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
    },
    {
        title: "Goal Setting and Tracking",
        description:
            "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
    },
    {
        title: "Secure Data Encryption",
        description:
            "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
    },
];

export const Features = () => {
    return (
        <section className="py-24">
            <div className="container">
                <h2 className="text-5xl md:text-6xl text-center font-bold tracking-tighter">
                    Everything you need
                </h2>
                <p className="max-w-xl mx-auto text-center text-white/50 mt-5">
                    Enjoy customizable lists, team work tools, and smart tracking all in one place.
                    Set tasks, get reminders, and see your progress simply and quickly.
                </p>
                <ul className="columns-1 md:columns-3 w-10/12 mx-auto mt-16 space-y-4">
                    {features.map((feature, index) => (
                        <li
                            key={index}
                            className="px-5 py-10 max-w-[330px] h-[312px] lg:h-auto mx-auto flex flex-col justify-center items-center gap-y-5 border-white/30 border-[1px] rounded-xl"
                        >
                            <figure>
                                <FeatureIcon />
                            </figure>
                            <article>
                                <h3 className="font-bold text-center">{feature.title}</h3>
                                <p className="text-white/50 text-center pt-2">
                                    {feature.description}
                                </p>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
