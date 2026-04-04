type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "lightblue" | "darkbtn";
  };
  
  export function Button({ children, variant = "primary" }: ButtonProps) {
    const baseStyles =
      "rounded-full  px-6 py-3 text-sm font-medium min-w-[150px] cursor-pointer";
  
    const variants = {
      primary: "bg-[#4ECDC4] text-white hover:bg-[#45B7B8]",
      secondary:"bg-transparent border border-[#4ECDC4] text-gray-800 hover:bg-[#4ECDC4] hover:text-white",
      lightblue:"bg-cyan-500 text-white hover:bg-cyan-600 hover:text-white",
      darkbtn:"bg-[#2A2A2A] text-white hover:bg-cyan-600 hover:text-white",
    };
  
    return (
      <button className={`${baseStyles} ${variants[variant]}`}>
        {children}
      </button>
    );
  }