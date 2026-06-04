import Image from "next/image";

interface CommonCardProps {
  data: {
    name: string;
    description: React.ReactNode;
    image: string;
  };
  onClick?: () => void;
}

export default function CommonCard({ data, onClick }: CommonCardProps) {
  return (
    <div
      className="group rounded-xl flex flex-row items-center border bg-muted/40 text-muted-foreground/80 border-border text-sm hover:text-primary/60 cursor-pointer hover:bg-muted transition-all duration-150 gap-1 hover:shadow-sm h-40 overflow-hidden relative select-none"
      onClick={onClick}
    >
      <Image
        src={data.image}
        alt={data.name}
        width={290}
        height={128}
        className="w-full h-full object-cover"
      />
      <div className="absolute z-10 inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(225,224,224)_80%)] hover:bg-[linear-gradient(to_bottom,transparent_0%,rgba(225,224,224)_100%)] flex flex-col self-end h-full transition-all duration-150">
        <div className="mt-auto px-6 pb-5 flex flex-col gap-1">
          <span className="font-medium text-lg">{data.name}</span>
          <span className=" text-muted-foreground/80">{data.description}</span>
        </div>
      </div>
    </div>
  );
}
