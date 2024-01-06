type Button = {
    children: JSX.Element;
    className:string
}

export const Button = ({ children, className }:Button) => {
  return (
      <button type="submit" className={`bg-blue-950 p-1 m-3 text-white ${className}`}>
      {children}
    </button>
  );
};
