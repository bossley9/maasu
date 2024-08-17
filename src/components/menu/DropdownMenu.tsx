import { Menu } from "./types";
import { A } from "../Link";

// https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript
// https://www.w3.org/WAI/tutorials/menus/flyout/#flyoutnavkbbtn

// this menu assumes only one nested level max since it prevents over-complexity

// it also assumes all links are relative and internal

const ulClassNames = "lstn pa0 ma0";
const liClassNames = "pointer px2";

const itemClassNames = "ff-averta c-text-light hov-c-primary-main fw700";

const mouseOutTimeout = 100;

type MenuProps = { menu: Menu; className?: string };

export function DropdownMenu({ menu, className = "" }: MenuProps) {
  const keys = Object.keys(menu);

  return (
    <nav aria-label="menu" class={className}>
      <ul class={ulClassNames}>
        {keys.map((k) => {
          const item = menu[k];
          return typeof item === "string" ? (
            <DropdownItem name={k} url={item as string} className="dib" />
          ) : (
            <DropdownSubmenu title={k}>
              {Object.keys(item).map((sk) => (
                <DropdownItem
                  name={sk}
                  url={item[sk] as string}
                  className="db"
                />
              ))}
            </DropdownSubmenu>
          );
        })}
      </ul>
    </nav>
  );
}

type SubmenuProps = {
  title: string;
  children?: JSX.Element;
};

function DropdownSubmenu({ title, children }: SubmenuProps) {
  const isOpen = false;
  // const setIsOpen = (_newState: boolean) => {};
  // let timer = -1;

  // const handleMouseOver = () => {
  //   setIsOpen(true);
  //   window.clearTimeout(timer);
  // };

  // const handleMouseOut = () => {
  //   timer = window.setTimeout(() => setIsOpen(false), mouseOutTimeout);
  // };

  // const handleBlur = () => {
  //   // if (el.current && !el.current.contains(e.relatedTarget as Node)) {
  //   // setIsOpen(false);
  //   // }
  // };

  // const handleClick = () => setIsOpen(!isOpen);

  return (
    <li
      // onMouseOver={handleMouseOver}
      // onMouseOut={handleMouseOut}
      // onBlur={handleBlur}
      class={`${liClassNames} posr dib`}
    >
      <button
        class={`clearall ${itemClassNames}`}
        // onClick={handleClick}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {title}
      </button>
      <ul
        class={`${ulClassNames} posa pa1 bs2 bg-bg-main ${!isOpen ? "dn" : ""}`}
      >
        {children}
      </ul>
    </li>
  );
}

type ItemProps = {
  name: string;
  url: string;
  className?: string;
};

function DropdownItem({ name, url, className = "" }: ItemProps) {
  return (
    <li class={`${liClassNames} ${itemClassNames} ${className}`}>
      <a href={url} class="db tdn c-inh">
        <div class="pa2">{name}</div>
      </a>
    </li>
  );
}
