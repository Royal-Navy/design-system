/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import classNames from 'classnames'
import uuid from 'uuid'
import {
  IconKeyboardArrowDown,
  IconKeyboardArrowRight,
} from '@royalnavy/icon-library'

interface NavItemWithLabelProps {
  children?:
    | React.ReactElement<NavItemProps>
    | React.ReactElement<NavItemProps>[]
  isActive?: boolean
  label?: string
  link?: never
}

interface NavItemWithLinkProps {
  children?: never
  isActive?: boolean
  label?: never
  link?: React.ReactElement<AnchorType> | React.ReactElement<LinkType>
}

export type NavItemProps = NavItemWithLabelProps | NavItemWithLinkProps

function hasActiveChild(
  children:
    | React.ReactElement<NavItemProps>
    | React.ReactElement<NavItemProps>[]
): boolean {
  if (children) {
    const childrenAsArray = children as React.ReactElement<NavItemProps>[]

    return childrenAsArray.some(
      child => child.props.isActive || hasActiveChild(child.props.children)
    )
  }

  return false
}

function getLabel(
  label: string,
  isOpen: boolean,
  hasChildren: boolean,
  className: string
) {
  const icon = isOpen ? <IconKeyboardArrowRight /> : <IconKeyboardArrowDown />
  return (
    <span className={className}>
      {label}
      {hasChildren && icon}
    </span>
  )
}

function getLink(
  link: React.ReactElement<AnchorType> | React.ReactElement<LinkType>,
  className: string
) {
  return React.cloneElement(link as React.ReactElement<any>, {
    ...link.props,
    className,
  })
}

export const NavItem: React.FC<NavItemProps> = ({
  children,
  isActive,
  label,
  link,
}) => {
  const [isOpen, setIsOpen] = useState(hasActiveChild(children))
  const listItemClasses = classNames('rn-nav__list-item', {
    'is-open': isOpen,
  })
  const textClasses = classNames('rn-nav__item', { 'is-active': isActive })
  const text = label
    ? getLabel(label, isOpen, !!children, textClasses)
    : getLink(link, textClasses)

  return (
    <li
      className={listItemClasses}
      data-testid="nav-item"
      key={uuid()}
      onClick={e => {
        e.stopPropagation()
        if (children) {
          setIsOpen(!isOpen)
        }
      }}
    >
      {text}
      {children && <ul className="rn-nav__list">{children}</ul>}
    </li>
  )
}

NavItem.displayName = 'NavItem'
