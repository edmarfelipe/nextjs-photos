import Hero from '@components/Hero'
import { Container, Grid, Image } from '@components/core'
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
      <Hero title='Amazing Gallery Photos' subTitle='Lazyload with javascript + Placeholder with LQIP' />
      <Grid>
        {
          photos.map((url, index) => (
            <Card>
              <ProgressiveImage
                rootMargin="0% 0% 0%"
                src={`${baseUrl}tr:w-500,h-400,fo-auto/${url}`}
                placeholder={`${baseUrl}tr:w-8,h-8/${url}`}
                noLazyLoad={index < 3}
              >
                {(src, loading) => <Image className={loading ? 'loading' : 'loaded'} src={src} />}
              </ProgressiveImage>
            </Card>
          ))
        }
      </Grid>
    </Container>
  )
}
