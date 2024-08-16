const newTabProps = { target: "_blank", rel: "noreferrer noopener" };
const classNames = "c-text-main tdu hov-c-primary-main";

type AProps = {
  children?: JSX.Element;
  href: string;
  className?: string;
};

export function A({ children, href, className = "" }: AProps) {
  return (
    <a {...newTabProps} href={href} class={`${classNames} ${className}`}>
      {children}
    </a>
  );
}
