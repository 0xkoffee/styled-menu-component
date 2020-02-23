import React from 'react'
import styled from 'styled-components'
import { User } from './users-menu'

interface UserMenuItemProps {
  user: User
}

const Icon = styled('div')`
  margin-right: 11px;
`

const Name = styled('div')`
  font-size: 14px;
  line-height: 20px;
  margin-right: 8px;
`

const Role = styled('div')`
  color: #60789a;
  [data-selected='true']:not(:hover) > div > & {
    color: #d1e3f8;
  }
`

const UserMenuItem: FC<UserMenuItemProps> = ({ user, className }) => (
  <div className={className}>
    <Icon>{user.icon}</Icon>
    <Name>{user.name}</Name>
    <Role>{user.role}</Role>
  </div>
)

const StyledUserMenuItem = styled(UserMenuItem)<UserMenuItemProps>`
  display: flex;
  align-items: center;
  height: 40px;
`

export { StyledUserMenuItem as UserMenuItem, UserMenuItemProps }
