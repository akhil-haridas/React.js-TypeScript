type Button = {
    children: JSX.Element | string;
    className?: string;
    onClick?: () => void
}

export const Button = ({ children, className }:Button) => {
  return (
      <button type="submit" className={`${className}`}>
      {children}
    </button>
  );
};
