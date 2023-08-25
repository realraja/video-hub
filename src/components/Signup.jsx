import { Button, Container, Heading, Input, VStack, Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={'container.xl'} minH={'100vh'} p={16} >
      <form>
        <VStack alignItems={'stretch'} spacing={8} w={['full','96']} m={'auto'} my={16}>
            <Heading>Video Hub</Heading>
            <Avatar alignSelf={'center'} boxSize={32} />
            <Input type="text" placeholder='Name' required focusBorderColor={'purple.500'} />
            <Input type="email" placeholder='Email' required focusBorderColor={'purple.500'} />
            <Input type="password" placeholder='Password' required focusBorderColor={'purple.500'} />
            <Input type="password" placeholder='Comfirm Password' required focusBorderColor={'purple.500'} />


            <Button colorScheme='purple' type='submit'>Sign Up</Button>

            <Text textAlign={'right'}>
                Old User?
                <Button variant={Link} colorScheme='purple'>
                    <Link to={'/login'}>Log In</Link>
                </Button>
            </Text>
        </VStack>
      </form>
    </Container>
  )
}


export default Signup
