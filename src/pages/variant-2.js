import Hero from '@components/Hero'
import { Container, Grid, Image } from '@components/core'
import { photos, baseUrl } from '@lib/data';

export default function Home() {
  return (
    <Container>
      <Hero title='Amazing Gallery Photos' subTitle='Native Lazyload' />
      <Grid>
        {
          photos.map((url, index) => (
            <Image loading={index < 3 ? 'eager' : 'lazy'} src={`${baseUrl}tr:w-500,h-400,fo-auto/${url}`} />
          ))
        }
      </Grid>
    </Container>
  )
}

