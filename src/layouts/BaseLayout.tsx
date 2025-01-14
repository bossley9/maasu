import { JSX } from "@bossley9/sjsx/jsx-runtime";
import { HeaderComponent } from "@/components/HeaderComponent";
import { FooterComponent } from "@/components/FooterComponent";
import { APP_NAME_LONG } from "@/constants";
import { ModalComponent } from "@/components/ModalComponent";

type Props = {
  children?: JSX.Element;
  title?: string;
};

export function BaseLayout({ title, children }: Props) {
  return (
    <>
      {"<!DOCTYPE html>"}
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#222222" />

          <meta
            name="author"
            content="The Midwest Asian Pacific Islander Desi American Students Union"
          />
          <meta
            name="description"
            content="The website for the Midwest Asian Pacific Islander Desi American Students Union"
          />
          <meta
            property="og:title"
            content="The Midwest Asian Pacific Islander desi American Students Union"
          />
          <meta
            property="og:description"
            content="The Website for MAASU, promoting awareness and change within the Asian Pacific Islander American community"
          />

          <link rel="manifest" href="/manifest.json" />

          <link rel="stylesheet" href="/styles/main.css" />

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
