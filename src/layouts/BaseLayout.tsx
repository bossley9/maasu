import { APP_NAME_LONG } from "../constants";

type Props = {
  children?: JSX.Element;
  title?: string;
};

export function BaseLayout({ title, children }: Props) {
  return (
    <html>
      <head>
        <title>{title ? `${title} - ${APP_NAME_LONG}` : APP_NAME_LONG}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
