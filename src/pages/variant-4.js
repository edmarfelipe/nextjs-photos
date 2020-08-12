import Hero from '@components/Hero'
import { Container, Grid } from '@components/core'
import { photos, baseUrl } from '@lib/data';

/**
 * External Dependencies
 */
import styled from "styled-components";
import ProgressiveImage from "react-progressive-graceful-image";

const Card = styled.div`
  overflow: hidden;

  .loading {
    filter: blur(8px);
  }
`

export default function Home() {
  return (
    <Container>
      <Hero title='Amazing Gallery Photos' />
      <Grid>
        {
          photos.map(url => (
            <Card>
              <ProgressiveImage
                rootMargin="0% 0% 0%"
                threshold={[1]}
                delay={500}
                src={`${baseUrl}tr:w-500,h-400,fo-auto/${url}`}
                placeholder={`${baseUrl}tr:w-16,h-16/${url}`}
              >
                {(src, loading) => <img className={loading ? 'loading' : 'loaded'} src={src} width='500px' height='400px' />}
              </ProgressiveImage>
            </Card>
          ))
        }
      </Grid>
    </Container>
  )
}
