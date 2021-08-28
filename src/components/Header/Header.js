import React from 'react'
import styled from 'styled-components/macro'

import { QUERIES } from '../../constants'
import Logo from '../Logo'
import SuperHeader from '../SuperHeader'
import MobileMenu from '../MobileMenu'
import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <Filler />
        <MobileActions>
          <ShoppingBagButton>
            <VisuallyHidden>Open cart</VisuallyHidden>
            <Icon id="shopping-bag" />
          </ShoppingBagButton>
          <UnstyledButton>
            <VisuallyHidden>Search</VisuallyHidden>
            <Icon id="search" />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <VisuallyHidden>Open menu</VisuallyHidden>
            <Icon id="menu" />
          </UnstyledButton>
        </MobileActions>
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
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tablet} {
    border-top: 4px solid var(--color-gray-900);
    justify-content: space-between;
    align-items: center;
  }

  @media ${QUERIES.phone} {
    padding-left: 16px;
    padding-right: 16px;
  }
`

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1.5rem, 6vw - 2rem, 3rem);
  margin: 0px 48px;

  @media ${QUERIES.tablet} {
    display: none;
  }
`

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tablet} {
    flex: revert;
  }
`
const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tablet} {
    display: none;
  }
`

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tablet} {
    display: flex;
    gap: 32px;
  }

  @media ${QUERIES.phone} {
    gap: 16px;
  }
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`

export default Header
