import React, { useState, ChangeEvent } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { GlobalStyle } from './global-style'
import { Menu } from './components/shared/menu'
import { CompanyIcon } from './icons/company-icon'
import { UsersMenu, User } from './components/users-menu/users-menu'

console.info(`⚛️ ${React.version}`)

const CenteredMenu: typeof Menu = styled(Menu)`
  align-self: center;
  margin: 0 auto;
  font-family: Inter;
`

const CenteredUsersMenu: typeof UsersMenu = styled(UsersMenu)`
  align-self: center;
  margin: 0 auto;
  font-family: Inter;
`

const users: User[] = [
  {
    icon: <CompanyIcon />,
    name: 'Ross Rich',
    role: 'Manager'
  },
  {
    icon: <CompanyIcon />,
    name: 'Harry Avery',
    role: 'Associate'
  },
  {
    icon: <CompanyIcon />,
    name: 'Amit Patel',
    role: 'Associate'
  },
  {
    icon: <CompanyIcon />,
    name: 'Suzy Anderson',
    role: 'Associate'
  }
]

const App = () => {
  const [userFilter, setUserFilter] = useState('')
  const userOptions = users.filter(
    (user) =>
      !userFilter || user.name.toUpperCase().includes(userFilter.toUpperCase())
  )

  return (
    <>
      <GlobalStyle />
      <CenteredMenu
        options={['My evaluations', 'My steps']}
        onChange={console.log}
        value="My steps"
      />
      <CenteredUsersMenu
        options={userOptions}
        onChange={console.log}
        value={users[3]}
        hasInput
        inputProps={{
          placeholder: 'Filter by name',
          onChange: (e: ChangeEvent<HTMLInputElement>) =>
            setUserFilter(e.target.value)
        }}
      />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

module.hot && module.hot.accept()
