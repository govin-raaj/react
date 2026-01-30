function Card() {
    const beliefs = [
        {
            title: "User centric research",
            desc: "and design (qual & quant) is key to defining unique differentiated customer experiences",
        },
        {
            title: "Prototyping",
            desc: "early and often is critical to the design process and can be applied to all types of challenges; services, products, experiences, and business models",
        },
        {
            title: "Design solutions",
            desc: "must always balance user desirability, technical feasibility, and business viability to be successful",
        },
        {
            title: "Designing for sustainable",
            desc: "teams with a culture where members feel challenged, supported, and empowered lead to better outcomes",
        },
        {
            title: "Fostering sustainable teams",
            desc: "by nurturing a culture of psychological safety, shared purpose, and ownership—leading to long‑term impact",
        },
    ];


    return (
        <section className="relative z-10 mt-40 px-6 pb-24">
            <h2 className="text-center text-3xl md:text-4xl font-semibold mb-16">
                Things I believe...
            </h2>
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {beliefs.map((item, idx) => (
                    <div
                        key={idx}
                        className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:border-white/20 transition"
                    >
                        <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Card