import React from 'react'
import styled from 'styled-components'
import { Menu, MenuProps } from '../shared/menu'
import { randomClassName } from '../../lib/rcn'
import { UserMenuItem } from './users-menu-item'

const rcn = randomClassName()

type User = {
  icon: React.ReactNode
  name: string
  role: string
}

const UsersMenu: FC<MenuProps<User>> = ({ ...props }) => {
  return (
    <Menu
      {...props}
      menuClassName={rcn('users-menu')}
      renderOption={(option) => <UserMenuItem user={option} />}
    />
  )
}

const StyledUsersMenu: typeof UsersMenu = styled(UsersMenu)`
  .${rcn('users-menu')} {
    margin: 10px 0;
  }
`

export { User, StyledUsersMenu as UsersMenu }
