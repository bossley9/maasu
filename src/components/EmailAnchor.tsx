import { A } from "./Link";

interface Props {
  children?: JSX.Element;
  className?: string;
  tabIndex?: number;
}

export function EmailAnchor({ children, className = "", ...props }: Props) {
  return (
    <A className={className} href={`mailto:${children}`} {...props}>
      {children}
    </A>
  );
}

// shorthand
export const EA = EmailAnchor;
