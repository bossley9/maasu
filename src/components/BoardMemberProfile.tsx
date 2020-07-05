import React, { FC } from 'react'
import { BoardMember } from 'store/Board/types'
import { Link } from '@reach/router'
import { ARBox, Cell } from 'components'

type Props = {
  member: BoardMember
}

export const BoardMemberProfile: FC<Props> = ({ member }) => {
  const name = member.alias || `${member.fname} ${member.mname} ${member.lname}`
  return (
    <Cell auto sm={6} md={4} lg={3}>
      <ARBox resizeable>
        <Link to={`/board/${member.id}`} className="c-inh tdn">
          <div className="w-100 h-100 pa2 tc profile-board">
            <img src={member.imageUrl} alt={name} />
            <p className="ma0 fw700">{name}</p>
            <span>{member.positionTitle}</span>
          </div>
        </Link>
      </ARBox>
    </Cell>
  )
}
