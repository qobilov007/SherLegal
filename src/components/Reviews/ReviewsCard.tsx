

export default function ReviewCard({
    name,
    role,
    text,
    img,
  }: {
    name: string
    role: string
    text: string
    img: string
  }) {
    return (
      <article
      style={{backgroundColor: "rgba(255, 255, 255, 0.02)"}}
        className="
          relative cursor-pointer rounded-[32px] p-6 
            transition-all duration-300 shadow-effect border-2 border-[rgba(255,255,255,0.13)] backdrop-blur-[12px]
        "
      >
        <div className="relative z-[10] flex items-center gap-4">
          <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-white">{role}</p>
          </div>
            <p className="mt-4 text-white">{text}</p>
        </div>
      </article>
    )
  }
  
