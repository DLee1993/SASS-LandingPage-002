import Plus from "@/assets/icons/plus.svg";

const items = [
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
    },
    {
        question: "How does the pricing work for teams?",
        answer: "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
    },
    {
        question: "Can I change my plan later?",
        answer: "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
    },
    {
        question: "Is my data secure?",
        answer: "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
    },
];

export const FAQs = () => {
    return (
        <section className="py-24  bg-[linear-gradient(to_top,#000,#200d42_34%,#4f21a1_65%)]">
            <div className="container">
                <div className="flex flex-col items-center">
                    <h2 className="text-5xl md:text-6xl text-center font-bold tracking-tighter max-w-[672px]">
                        Frequently asked questions
                    </h2>
                </div>
                <div className="grid divide-y divide-neutral-200 max-w-2xl mx-auto mt-12">
                    {items.map((item, index) => (
                        <div key={index} className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span>{item.question}</span>
                                    <span className="transition group-open:rotate-180">
                                        <Plus />
                                    </span>
                                </summary>
                                <p className="mt-3 group-open:animate-fadeIn">
                                    {item.answer}
                                </p>
                            </details>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
