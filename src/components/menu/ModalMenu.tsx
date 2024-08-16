import { Menu } from "./types";
import { Icon } from "../Icon";

type Props = {
  menu: Menu;
  triggerClassNames?: string;
  menuClassNames?: string;
};

const ICON_SIZE = "32px";

export function ModalMenu({
  menu,
  triggerClassNames = "",
  menuClassNames = "",
}: Props) {
  // const dispatch = useDispatch();

  const handleMenuOpen = () => {
    // dispatch(
    //   openModal({
    //     classNames: menuClassNames,
    //     children: <RenderMenu menu={menu} />,
    //   }),
    // );
  };

  return (
    <div class={triggerClassNames}>
      <MenuTriggerButton
        onClick={handleMenuOpen}
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

function RenderMenu({ menu }: RenderMenuProps) {
  // const dispatch = useDispatch();

  const keys = Object.keys(menu);

  const itemClassNames = "db fs2 c-text-light ff-averta fw700";
  const linkClassNames = "c-text-main hov-c-primary-main";

  const handleMenuClose = () => {
    // dispatch(closeModal());
  };

  const handleLinkClick = (url: string) => {
    navigate(url);
    handleMenuClose();
  };

  const renderLink = (name: string, url: string) => (
    <button
      onClick={() => handleLinkClick(url)}
      class={`clearall ${itemClassNames} ${linkClassNames}`}
    >
      {name}
    </button>
  );

  return (
    <div class="h-100">
      <div class="container pt5">
        <MenuTriggerButton onClick={handleMenuClose} className="clearall">
          <Icon icon="times" className="fs3 hov-c-primary-main" />
        </MenuTriggerButton>

        <nav aria-label="menu" class="tc py5">
          <ul class="clearall lstn">
            {keys.map((k) => {
              const item = menu[k];
              return typeof item === "string" ? (
                <li class="py4">{renderLink(k, item)}</li>
              ) : (
                <li className="py2">
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
  onClick: () => void;
};
function MenuTriggerButton({
  onClick,
  className = "",
  children,
}: MenuTriggerButtonProps) {
  return (
    <button
      onClick={onClick}
      class={className}
      style={`height=${ICON_SIZE};width=${ICON_SIZE}`}
    >
      {children}
    </button>
  );
}
