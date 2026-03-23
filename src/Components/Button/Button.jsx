import style from "./Button.module.css";

export default function Button({ 
  children, 
  href, 
  inView, 
  className = "", 
  onClick 
}) {
  const Tag = href ? "a" : "button";

  return (
    <Tag
      href={href}
      onClick={onClick}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={`
        ${style.baseButton} 
        ${inView ? style.show : style.hide} 
        ${className}
      `}
    >
      {children}
    </Tag>
  );
}