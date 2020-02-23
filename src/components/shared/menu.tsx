import React from 'react'
import styled from 'styled-components'
import { PlainMenuProps, PlainMenu } from './plain-menu'
import { Colors } from '../../lib/style-guide'

interface MenuProps<T> extends PlainMenuProps<T> {
  hasInput?: boolean
  inputProps?: object
  menuClassName?: string
}

const Input = styled('input')`
  outline: none;
  font-size: 14px;
  line-height: 20px;
  margin: 16px 21px 13px 21px;

  ::placeholder {
    color: #8299b6;
  }
`

const Divider = styled('hr')`
  display: flex;
  border: none;
  background-color: #deecfc;
  height: 1px;
  width: '100%';
`

const StyledPlainMenu: typeof PlainMenu = styled(PlainMenu)`
  margin: 7px 0;
`

function Menu<T>(props: MenuProps<T>): React.ReactElement {
  const { inputProps, hasInput, className, menuClassName, ...menuProps } = props

  return (
    <div className={className}>
      {hasInput && (
        <>
          <Input {...inputProps} />
          <Divider />
        </>
      )}
      <StyledPlainMenu {...menuProps} className={menuClassName} />
    </div>
  )
}

const StyledMenu: typeof Menu = styled(Menu)`
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #d1e3f8;
  box-shadow: 0px 4px 12px rgba(107, 133, 163, 0.06),
    0px 4px 16px rgba(50, 132, 225, 0.16);
  background: ${Colors.PureWhite};
`

export { StyledMenu as Menu, MenuProps }
