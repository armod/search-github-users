import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Follwers from './Followers'

const User = () => {
  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Card></Card>
        <Follwers></Follwers>
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default User
