import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import { APP_NAME_LONG } from "../constants";
import { ModalComponent } from "../components/ModalComponent";

type Props = {
  children?: JSX.Element;
  title?: string;
};

export function BaseLayout({ title, children }: Props) {
  return (
    <>
      {"<!DOCTYPE html>"}
      <html>
        <head>
          <title>{title ? `${title} - ${APP_NAME_LONG}` : APP_NAME_LONG}</title>
        </head>
        <body>
          <HeaderComponent />
          {children}
          <FooterComponent />
          <ModalComponent />
        </body>
      </html>
    </>
  );
}
