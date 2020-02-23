import React, { useMemo, useRef } from 'react'
import { MenuItem } from './menu-item'
import styled from 'styled-components'

interface PlainMenuProps<T> {
  options: T[]
  value: T
  onChange?: (option: T) => void
  renderOption?: (option: T) => React.ReactNode
  className?: string
  itemClassName?: string
}

function getRandomString(): string {
  return Math.random()
    .toString(36)
    .substring(5)
}

type Option<T> = {
  value: T
  key: string
}

function PlainMenu<T>(props: PlainMenuProps<T>): React.ReactElement {
  const { className, renderOption, value, itemClassName, onChange } = props
  const options = useRef<Option<T>[]>([])

  useMemo(() => {
    const newOptions: Option<T>[] = props.options.map((option) => ({
      value: option,
      key:
        options.current?.find((opt) => opt.value === option)?.key ||
        getRandomString()
    }))
    options.current = newOptions
  }, [props.options])

  return (
    <div className={className}>
      {options.current.map((option) => (
        <MenuItem
          key={option.key}
          selected={value === option.value}
          className={itemClassName}
          onClick={() => onChange?.(option.value)}
        >
          {renderOption?.(option.value) || option.value}
        </MenuItem>
      ))}
    </div>
  )
}

const StyledPlainMenu: typeof PlainMenu = styled(PlainMenu)``

export { PlainMenuProps, StyledPlainMenu as PlainMenu }
