import React from 'react'
import styled from 'styled-components/macro'

import { QUERIES, WEIGHTS } from '../../constants'

import Breadcrumbs from '../Breadcrumbs'
import Select from '../Select'
import Spacer from '../Spacer'
import ShoeSidebar from '../ShoeSidebar'
import ShoeGrid from '../ShoeGrid'

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <TitleWrapper>
            <MobileBreadcrumbs>
              <ShoeBreadcrumbs />
            </MobileBreadcrumbs>
            <Title>Running</Title>
          </TitleWrapper>
          <SortWrapper>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </SortWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <ShoeBreadcrumbs />
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${QUERIES.tablet} {
    display: none;
  }
`

const MainColumn = styled.div`
  flex: 1;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${QUERIES.tablet} {
    align-items: center;
  }
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const MobileBreadcrumbs = styled.div`
  display: none;
  @media ${QUERIES.tablet} {
    display: block;
  }
`

const ShoeBreadcrumbs = () => (
  <Breadcrumbs>
    <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
  </Breadcrumbs>
)

const SortWrapper = styled.div`
  @media ${QUERIES.phone} {
    display: none;
  }
`

export default ShoeIndex
