const newTabProps = { target: "_blank", rel: "noreferrer noopener" };
const classNames = "c-text-main tdu hov-c-primary-main";

type AProps = {
  newTab?: boolean;
  children?: JSX.Element;
  href: string;
  className?: string;
};

export function A({ newTab = false, children, href, className = "" }: AProps) {
  return (
    <a
      {...(newTab ? newTabProps : {})}
      href={href}
      class={`${classNames} ${className}`}
    >
      {children}
    </a>
  );
}
