import { Box ,Container,Heading, Img, Stack , Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos : 'absolute',
  left : '50%',
  top : '50%',
  transform:'translate(-50%, -50%)',
  textTransform : 'uppercase',
  p:'4',
  size:'2xl'
}

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading textTransform={'uppercase'} maxW={'fit-content'} borderBottom={'2px solid'} py={'2'} margin={'auto'}>
          services
        </Heading>

        <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column', 'row']}>

          <Img src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'} />

          <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis reprehenderit laboriosam temporibus fugiat quae soluta nisi quos repellendus qui quod, ex numquam deserunt expedita incidunt iste voluptate ea voluptas odit ipsam quam ducimus provident! Omnis reiciendis dolores sed dolor vel dignissimos perferendis excepturi officiis aliquam, eligendi accusamus obcaecati adipisci velit repudiandae magnam eos illo rerum perspiciatis minima nisi odit! Nam dignissimos vero eius illo quasi temporibus nostrum quos, culpa optio saepe maiores a repudiandae reprehenderit incidunt eum explicabo labore, natus quibusdam obcaecati sunt veniam commodi quod! Aliquid architecto ipsa iusto cum facere vitae voluptates quidem dolorum, mollitia adipisci nam incidunt placeat. Fugiat minima omnis, perferendis debitis sed eius? Culpa perferendis ut rem blanditiis, illo mollitia tenetur cupiditate id assumenda aliquam dolore consequuntur accusantium, fugit alias, veniam sit tempore deserunt minus quaerat ipsa! Provident labore iusto dolor libero dolores corrupti corporis quo doloribus sequi culpa quos ullam fuga, architecto rem eos.
          </Text>

        </Stack>
      </Container>
    </Box>
  );
}

const MyCarousel = () =>(
    <Carousel autoPlay infiniteLoop interval={2000} showStatus={false} showArrows={false} showThumbs={false}>
        <Box w={'full'} h={'100vh'}>
            <Img src={img1} h="full" w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Watch The Future</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Img src={img2} h="full" w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Gaming is Future</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Img src={img3} h="full" w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Gaming on console</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Img src={img4} h="full" w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Space Gaming is Cool</Heading>
        </Box>
    </Carousel>
);

export default Home
