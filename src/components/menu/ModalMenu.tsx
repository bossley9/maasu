import { Menu } from "./types";
import { Icon } from "../Icon";
import { MODAL_ID_BUTTON } from "../ModalComponent";

type Props = {
  triggerClassNames?: string;
};

const ICON_SIZE = "32px";

export function ModalMenu({ triggerClassNames = "" }: Props) {
  return (
    <div class={triggerClassNames}>
      <MenuTriggerButton
        id={MODAL_ID_BUTTON}
        className="clearall hov-c-primary-main"
      >
        <Icon icon="bars" className="fs2" />
      </MenuTriggerButton>
    </div>
  );
}

type RenderMenuProps = {
  menu: Menu;
};

export function RenderMenu({ menu }: RenderMenuProps) {
  const keys = Object.keys(menu);

  const itemClassNames = "db fs2 c-text-light ff-averta fw700";
  const linkClassNames = "c-text-main hov-c-primary-main";

  const renderLink = (name: string, url: string) => (
    <a
      href={url}
      class={`clearall ${itemClassNames} ${linkClassNames} navlink`}
    >
      {name}
    </a>
  );

  return (
    <div class="h-100">
      <div class="dialog-container container pt5">
        <form method="dialog">
          <MenuTriggerButton className="clearall">
            <Icon icon="times" className="fs3 hov-c-primary-main" />
          </MenuTriggerButton>
        </form>

        <nav aria-label="menu" class="tc py5">
          <ul class="clearall lstn">
            {keys.map((k) => {
              const item = menu[k];
              return typeof item === "string" ? (
                <li class="py4">{renderLink(k, item)}</li>
              ) : (
                <li class="py2">
                  <span class={itemClassNames}>{k}</span>
                  <ul class="clearall">
                    {Object.keys(item).map((sk) =>
                      renderLink(sk, item[sk] as string),
                    )}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

type MenuTriggerButtonProps = {
  children?: JSX.Element;
  className?: string;
  id?: string;
};
function MenuTriggerButton({
  id,
  className = "",
  children,
}: MenuTriggerButtonProps) {
  return (
    <button
      {...(id && { id })}
      class={className}
      style={`height:${ICON_SIZE};width:${ICON_SIZE}`}
    >
      {children}
    </button>
  );
}
