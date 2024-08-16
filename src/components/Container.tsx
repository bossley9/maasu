type Props = {
  children?: JSX.Element;
  className?: string;
};

export function Container({ children, className = "" }: Props) {
  return <div class={`container py6 ${className}`}>{children}</div>;
}
