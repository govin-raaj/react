function Card({
  title,
  description,
  image,
  repo,
  demo,
  tech = [],
}) {
  return (
    <section
      className="
        bg-linear-45 from-[#E2AB7F] to-[#C05850] p-5 rounded-xl border-3 border-white shadow-md hover:shadow-xl  hover:shadow-white duration-1000 hover:-translate-y-2 overflow-hidden ">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image.src}
          alt={image.alt}
          className=" w-16 h-16 sm:w-20 sm:h-20 rounded-full ring-2 ring-black"/>

        <h3 className="text-xl sm:text-2xl font-extrabold">{title}</h3>
      </div>

      <p className="text-sm sm:text-base font-medium mb-4">
        {description}
      </p>


      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item) => (
          <span
            key={item}
            className=" text-xs font-semibold  bg-white/20 px-3 py-1 rounded-full hover:translate-y-1 duration-75">{item} </span>
        ))}
      </div>


      <div className="flex gap-3">
        {repo && (
          <a
            href={repo}
            target="_blank"
            className="  text-sm font-bold  bg-black text-white px-4 py-2 rounded-lg  hover:bg-gray-800 hover:scale-105" >GitHub</a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            className="  text-sm font-bold  bg-white text-black px-4 py-2 rounded-lg  hover:bg-gray-200 hover:scale-105" >Live Demo</a>
        )}
      </div>
    </section>
  );
}

export default Card;
