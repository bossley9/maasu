import React, { FC } from 'react'
import {
  APP_NAME,
  CONFERENCE_NAME,
  CONFERENCE_YEAR,
  CONFERENCE_TYPE,
  CONFERENCE_DATE_RANGE,
  SOCIAL,
} from 'constants/strings'

export const HeroBannerComponent: FC = () => {
  return (
    <div className="ttu ffhind fw700 mb9 pb6">
      <h2 className="mt9 tc">
        <span className="fs3-ns fs2-s dpb">
          {CONFERENCE_YEAR} {APP_NAME} {CONFERENCE_TYPE}
        </span>
        <a
          className="tdn"
          href={SOCIAL.filter((s) => s.name === 'facebook')[0].url}
        >
          <em className="fsn fs4 fs2-s ls2 fflibre fggold db">
            {CONFERENCE_NAME}
          </em>
        </a>
        <span className="fs3-ns fs2-s db">{CONFERENCE_DATE_RANGE}</span>
      </h2>
    </div>
  )
}