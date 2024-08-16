import { Block } from "./Block";

type Props = {
  children?: JSX.Element;
  title: string;
  className?: string;
};

export function TextBlock({ children, title, className = "" }: Props) {
  return (
    <Block>
      <section class={className}>
        <h4 class="title4 tc my2">{title}</h4>
        {children}
      </section>
    </Block>
  );
}
