import Hero from '@components/Hero'
import { Container } from '@components/core'

/**
 * External Dependencies
 */
import styled from 'styled-components';
import Link from 'next/link';

const List = styled.ul`
  list-style: none;
  padding: 50px;
`

const Item = styled.li`
  margin-bottom: 20px;

  a {
    color: #fff;
  }
`

export default function Home() {
  return (
    <Container>
      <Hero title='Amazing Gallery Photos' />
      <List>
        <Item>
          <Link href='variant-1'>
            Baseline
          </Link>
        </Item>
        <Item>
          <Link href='variant-2'>
            Native Lazyload
          </Link>
        </Item>
        <Item>
          <Link href='variant-3'>
            Lazyload with javascript
          </Link>
        </Item>
        <Item>
          <Link href='variant-4'>
            Lazyload with javascript + Placeholder with LQIP
          </Link>
        </Item>
      </List>
    </Container>
  )
}
