import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { NextPage } from 'next'
import { WorkGridItem } from '../components/GridItem'
import Section from '../components/Section'
import Disney from '../public/works/disney.jpg'
import Hulu from '../public/works/hulu_2.jpeg'
import trax from '../public/works/trax.png'
import social from '../public/works/social-dash.png'
const Works: NextPage = () => {
  return (
    <Container mt={10}>
      <Heading fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem
            id={'disney-clone'}
            title={'Disney plus+ clone'}
            thumbnail={Disney}
          >
            A clone of Disney plus+ website
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id={'Hulu-clone'} title={'Hulu clone'} thumbnail={Hulu}>
            A clone of Hulu website
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id={'trax'} title={'Trax'} thumbnail={trax}>
            A modern music app inspired by Spotify and build with next js
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id={'social-dash'}
            title={'Awesome-dash'}
            thumbnail={social}
          >
            A public wall made with nesxtjs and prisma.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
