import React from 'react'
import styled from 'styled-components/macro'

import { COLORS, QUERIES, WEIGHTS } from '../../constants'
import Logo from '../Logo'
import SuperHeader from '../SuperHeader'
import MobileMenu from '../MobileMenu'
import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MobileIcons>
          <UnstyledButton>
            <VisuallyHidden>Cart</VisuallyHidden>
            <Icon id="shopping-bag" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton>
            <VisuallyHidden>Search</VisuallyHidden>
            <SearchIcon id="search" strokeWidth={1} size={24} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <VisuallyHidden>Show menu</VisuallyHidden>
            <Icon id="menu" strokeWidth={1} />
          </UnstyledButton>
        </MobileIcons>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  )
}

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.tablet} {
    border-top: 4px solid ${COLORS.gray[900]};
    justify-content: space-between;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERIES.tablet} {
    display: none;
  }
`

const Side = styled.div`
  flex: 1;
`

const MobileIcons = styled.div`
  display: none;

    @media ${QUERIES.tablet} {
      display: flex;
      gap: 24px;
      justify-content: flex-end;
    }
`

const SearchIcon = styled(Icon)`
  width: 24px;
  height: 24px;
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`

export default Header
