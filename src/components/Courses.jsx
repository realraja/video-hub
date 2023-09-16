import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiFillCode } from 'react-icons/ai'
import { Link } from 'react-router-dom'




const Courses = () => {

    const [input,setInput] = useState('');




  return (
    <Container maxW={'container.xl'} h={'100vh'} p={16}>
      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <AiFillCode size={'10vmax'} /> 

        
            <HStack>
              <form>
                <Input required type='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Enter Course Code?' w={'400px'} marginRight={4} />
                <Link  to={input}>
                  <Button colorScheme='purple' type='submit'>Enter</Button>
                </Link>
              </form>  
            </HStack>

      </VStack>
    </Container>
  )
}

export default Courses
// djfguehfrg77d6fsdyfhyugh67e87e487re7y3w7eruh77478389r