import { MouseEvent } from 'react'
import styled from 'styled-components'
import { Colors, FontWeights } from '../../lib/style-guide'

interface MenuItemProps {
  onClick?: (ev: MouseEvent<HTMLDivElement>) => void
  selected?: boolean
}

const MenuItem = styled('div').attrs((props: MenuItemProps) => ({
  'data-selected': props.selected
}))<MenuItemProps>`
  display: flex;
  flex-direction: row;
  min-height: 39px;
  align-items: center;
  box-shadow: 0 0 0 #000;
  padding: 0 20px;
  font-size: 14px;
  font-weight: ${FontWeights.PR};
  cursor: pointer;

  &:hover {
    background: ${Colors.BG3};
    color: inherit;
  }

  ${(props) =>
    props.selected &&
    `
    background: #1E75D8;
    color: ${Colors.PureWhite};
  `}
`

export { MenuItem, MenuItemProps }
