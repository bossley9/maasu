import { JSX } from "@bossley9/sjsx/jsx-runtime";

type Props = {
  children?: JSX.Element;
  className?: string;
};

export function Block({ children, className = "" }: Props) {
  return <div class={`my4${className ? " " + className : ""}`}>{children}</div>;
}
