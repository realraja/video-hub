import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { AiFillCode } from 'react-icons/ai'
import { globalContext } from '../context';
import Cookies from 'js-cookie';

import CourseData from './CourseData';



const Courses = () => {

    const [input,setInput] = useState('');

    const {course} = useContext(globalContext);
   
    // const navigate = useNavigate();

const handleButton = () =>{
  // navigate(input);
  Cookies.set("course", input,{ expires: 365 });
}


if(course === null){
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={16}>
      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <AiFillCode size={'10vmax'} /> 

            <HStack>
              <form >
                <Input required type='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Enter Course Code?' w={'400px'} marginRight={4} />
              
                  <Button onClick={handleButton} colorScheme='purple' type='submit'>Enter</Button>
              </form>  
            </HStack>

      </VStack>
    </Container>
  )
}

return(
  <div>
    <CourseData />
  </div>
)
}

export default Courses
// djfguehfrg77d6fsdyfhyugh67e87e487re7y3w7eruh77478389r