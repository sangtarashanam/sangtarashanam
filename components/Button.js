const Button = ({
  color = "green",
  size = "md",
  children,
  className,
  ...props
}) => {
  const user = { name: "mahdi", user: "mahdi" };
  const myObj = { age: 15, user };
  const colors = {
    red: "bg-rose-500 text-white",
    green: "bg-green-500 text-white",
    yellow: "bg-yellow-500 text-white",
    blue:"bg-blue-700 text-white",
  };
  const sizes = {
    sm: "px-1 py-0.5 text-sm",
    md: "px-3 py-1 text-sm",
    lg: "px-3 py-1.5",
    xl: "px-4 py-2 text-lg",
  };
  return (
    <button
      className={` hover:bg-gray-200 hover:text-black px-4 py-2 m-2 ${colors[color]} ${sizes[size]} rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
