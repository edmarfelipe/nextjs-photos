import Hero from '@components/Hero'
import { Container, Grid } from '@components/core'
import { photos, baseUrl } from '@lib/data';

export default function Home() {
  return (
    <Container>
      <Hero title='Amazing Gallery Photos' />
      <Grid>
        {
          photos.map(url => (
            <img loading="lazy" src={`${baseUrl}tr:w-500,h-400,fo-auto/${url}`} width='500px' height='400px' />
          ))
        }
      </Grid>
    </Container>
  )
}

