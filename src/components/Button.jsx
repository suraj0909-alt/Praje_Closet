import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({
  children,
  to,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
  ...rest
}) {
  const cls = `btn btn-${variant} ${className}`.trim();
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
