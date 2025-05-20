interface ServiceCardProps {
  title: string;
  imageSrc: string;
  description: string;
  bgColor?: string;
}

export const ServiceCard = ({
  title,
  imageSrc,
  description,
  bgColor = "bg-whiteC",
}: ServiceCardProps) => {
  return (
    <article
      className={`p-8 h-auto w-auto 2xl:h-[30rem] 2xl:w-[26rem] 3xl:w-[28rem]  rounded-2xl overflow-hidden 
                 shadow-sm hover:shadow-xl hover:bg-sweetPinkC transition-all duration-300 
                 ${bgColor} flex flex-col h-full`}
    >
      <header className="mb-4">
        <h2 className="pb-2 text-xl font-semibold border-b text-purpleC border-purpleC">
          {title}
        </h2>
      </header>

      <div className="flex-grow h-48 mb-4 overflow-hidden rounded-2xl">
        <img
          src={imageSrc}
          alt={`Imagen de ${title}`}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      <p className="text-[#1e293b] mb-4">{description}</p>
    </article>
  );
};
