type Props = {
    title: string;
  };
  
  export default function DefaultBanner({ title }: Props) {
    return (
      <div className="bg-[#2A2A2A] flex items-center justify-center text-white py-20 pt-30 text-center h-[300px]">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
      </div>
    );
  }