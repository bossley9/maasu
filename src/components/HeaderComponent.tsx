import { DropdownMenu } from "./menu/DropdownMenu";
import { ModalMenu } from "./menu/ModalMenu";
import { APP_NAME_LONG, HEADER_HEIGHT, LOGO_HEIGHT, MENU } from "../constants";
import { A } from "./Link";

export function HeaderComponent() {
  return (
    <>
      <header class="w-100 bg-bg-main posf z1">
        <div class="container">
          <div class="df ai-c jc-sb px4-nl" style={`height:${HEADER_HEIGHT}`}>
            <A href="/" className="df ai-c">
              <img
                src="/assets/branding/logo.svg"
                alt={APP_NAME_LONG}
                style={`height:${LOGO_HEIGHT}`}
              />
            </A>
            <DropdownMenu menu={MENU} className="dn db-l" />
            <ModalMenu
              menu={MENU}
              triggerClassNames="db dn-l"
              menuClassNames="db dn-l bg-bg-main"
            />
          </div>
        </div>
      </header>
      <div aria-hidden="true" style={`min-height:${HEADER_HEIGHT}`} />
    </>
  );
}
