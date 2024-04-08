import { Link } from './Link'
import { APP_NAME_LONG, LOGO_HEIGHT, SOCIAL } from '../constants'
import { Icon, IconName } from './Icon'

const textLinkClassNames = 'tdn c-inh hov-tdu mx1 hov-c-primary-main'

export function FooterComponent() {
  return (
    <footer className="w-100 py5 mt6 bg-bg-main">
      <div className="container df fd-c-s jc-sb">
        <div className="w-100 w-30-ns pb5-s">
          <Link to="/">
            <img
              src="/assets/branding/logo.svg"
              alt={APP_NAME_LONG}
              style={{ height: LOGO_HEIGHT }}
            />
          </Link>
        </div>

        <div className="w-100 w-30-ns">
          <div className="df jc-fs mb2">
            {SOCIAL.map((s, i) => (
              <a
                key={i}
                className="c-inh mx2 hov-c-primary-main"
                href={s.url}
                aria-label={s.name}
              >
                <Icon className="fs1" prefix="fab" icon={s.icon as IconName} />
              </a>
            ))}
          </div>

          <div className="df mb2">
            <Link to="/donate" className={textLinkClassNames}>
              Donate to our cause
            </Link>
            <span aria-hidden="true">|</span>
            <Link to="/contact" className={textLinkClassNames}>
              Contact us
            </Link>
          </div>

          <div>
            &copy; {new Date().getUTCFullYear()} {APP_NAME_LONG}. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
