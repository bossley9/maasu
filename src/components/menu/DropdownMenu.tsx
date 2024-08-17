import { Menu } from "./types";

const ulClassNames = "lstn pa0 ma0";
const liClassNames = "pointer px2";

const itemClassNames = "ff-averta c-text-light hov-c-primary-main fw700";

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
      <script>
        {`
        document.querySelectorAll(".js-dropdown").forEach(function(dropdown) {
          let timer = -1
          const button = dropdown.querySelector("button")
          const submenu = dropdown.querySelector("ul")

          function openMenu() {
            submenu.style.display = "block"
            window.clearTimeout(timer)
            button.ariaExpanded = true
          }

          function closeMenu() {
            submenu.style.display = "none"
            button.ariaExpanded = false
          }

          dropdown.addEventListener("mouseover", openMenu)

          dropdown.addEventListener("mouseout", function() {
            timer = window.setTimeout(closeMenu, 100)
          })

          button.addEventListener("click", function() {
            if (submenu.style.display === "block") {
              closeMenu()
            } else {
              openMenu()
            }
          })
        })
        `}
      </script>
    </nav>
  );
}

type SubmenuProps = {
  title: string;
  children?: JSX.Element;
};

function DropdownSubmenu({ title, children }: SubmenuProps) {
  return (
    <li class={`${liClassNames} posr dib js-dropdown`}>
      <button
        class={`clearall ${itemClassNames}`}
        aria-haspopup="true"
        aria-expanded="false"
      >
        {title}
      </button>
      <ul class={`${ulClassNames} bg-bg-main submenu`} style="display:none">
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
