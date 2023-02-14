import "./Button.styles.css";

type ButtonProps = {
  className: string;
  children?: string | JSX.Element;
};

export const Button = ({ children, className }: ButtonProps) => {
  return <button className={className}>{children}</button>;
};
