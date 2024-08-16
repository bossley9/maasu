import { APP_NAME_LONG, LOGO_HEIGHT, SOCIAL } from "../constants";
import { Icon } from "./Icon";
import { A } from "./Link";

const textLinkClassNames = "tdn c-inh hov-tdu mx1 hov-c-primary-main";

export function FooterComponent() {
  return (
    <footer class="w-100 py5 mt6 bg-bg-main">
      <div class="container df fd-c-s jc-sb">
        <div class="w-100 w-30-ns pb5-s">
          <A href="/">
            <img
              src="/assets/branding/logo.svg"
              alt={APP_NAME_LONG}
              style={`height:${LOGO_HEIGHT}`}
            />
          </A>
        </div>
        <div class="w-100 w-30-ns">
          <div class="df jc-fs mb2">
            {SOCIAL.map((s, i) => (
              <a
                key={i}
                class="c-inh mx2 hov-c-primary-main"
                href={s.url}
                aria-label={s.name}
              >
                <Icon className="fs1" icon={s.icon} />
              </a>
            ))}
          </div>
          <div class="df mb2">
            <A href="/donate" className={textLinkClassNames}>
              Donate to our cause
            </A>
            <span aria-hidden="true">|</span>
            <A href="/contact" className={textLinkClassNames}>
              Contact us
            </A>
          </div>
          <div>
            &copy; {new Date().getUTCFullYear()} {APP_NAME_LONG}. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
