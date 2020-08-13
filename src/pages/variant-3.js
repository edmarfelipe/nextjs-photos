import Hero from '@components/Hero'
import { Container, Grid, Spinner, Image } from '@components/core'
import { photos, baseUrl } from '@lib/data';

/**
 * External Dependencies
 */
import styled from "styled-components";
import ProgressiveImage from "react-progressive-graceful-image";

const Card = styled(ProgressiveImage)`
  overflow: hidden;
`

const Placeholder = styled.div`
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Home() {
  return (
    <Container>
      <Hero title='Amazing Gallery Photos' />
      <Grid>
        {
          photos.map(url => (
            <Card
              key={url}
              rootMargin="0% 0% 0%"
              src={`${baseUrl}tr:w-500,h-400,fo-auto/${url}`}
              placeholder=''
            >
              {(src, loading) => {
                return loading ?
                  <Placeholder>
                    <Spinner />
                  </Placeholder> :
                  <Image src={src} />;
              }}
            </Card>
          ))
        }
      </Grid>
    </Container>
  )
}

