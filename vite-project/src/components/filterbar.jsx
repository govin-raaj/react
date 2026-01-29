function FilterBar({ activeCategory, onChange }) {
  const categories = ["all", "frontend", "fullstack", "ai"];

  return (
    <section className="flex justify-center gap-3 my-6 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`
            px-4 py-2 rounded-full font-bold text-sm
            transition-all duration-200
            ${
              activeCategory === category
                ? "bg-black text-white scale-105"
                : "bg-white/30 text-black hover:bg-white/50"
            }
          `}
        >
          {category.toUpperCase()}
        </button>
      ))}
    </section>
  );
}

export default FilterBar;
