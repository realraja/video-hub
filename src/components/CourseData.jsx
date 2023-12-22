import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import data from '../assets/courseData.json'
import {  Heading, Container, HStack, VStack, Box, Button } from '@chakra-ui/react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { globalContext } from '../context';

const useQuary = ()=>{
    return new URLSearchParams(useLocation().search)
}

const CourseData = () => {


    const {course,setCourse} = useContext(globalContext);

    let query = useQuary().get('index');

    // query === null? query=99999 :


    // console.log(query,data[params.id].materials.subjects[0]);

    

    // let courseInnerData = data[params.id].materials.subjects;
    

  return (
    <Container maxW={'container.xl'} width={'100%'} minH={'100vh'}  p={20} >
        
            {


                (course === 'djfguehfrg77d6fsdyfhyugh67e87e487re7y3w7eruh77478389r' || course === 'ABHIMANYU_BSC_SECOND_YEAR')?(
                    <PrintCards api={data[course].materials.subjects} query={query} setCourse={setCourse} />
                    ):(     
                        <ErrorPage setCourse={setCourse} />                    
                    )


                    // (query)?<h1>hello</h1>: <h2>pro</h2>   data[params.id].materials.subjects.length > query
                
                
            }
            
        
    </Container>
  )
}


const PrintCards = ({api,query,setCourse})=>(
    <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
        {
            (api.length > query && query !== null)?<>
            {
            api[query].categories.map((item,index)=>(
                <SubjectCards name={item.name} url={''+query+'/'+index} key={index} />
            ))
            }</>:<>
            {
            api.map((item,index)=>(
                <SubjectCards name={item.name} url={'?index='+index} key={index} />
            ))
            }</>
            
        }

        <VStack w={'100%'}>

<Button onClick={()=> setCourse(null)} margin={8}  colorScheme='red'> <AiOutlineArrowLeft /> Delete Course</Button>
        </VStack>

    </HStack>
)

const ErrorPage = ({setCourse}) =>(
    <Box textAlign={'Center'} justifyContent={'center'}>
                        <Heading size={'4xl'} margin={8} fontWeight={'medium'} color={'purple.300'} textTransform={'uppercase'} >404! ERROR</Heading>
                        <Heading size={'md'} fontWeight={'medium'} color={'purple.300'} textTransform={'uppercase'} >Sorry! This course is not avlaibal.
                         Please try another Code.</Heading>

                         
                            <Button onClick={()=> setCourse(null)} margin={8} colorScheme='purple'> <AiOutlineArrowLeft /> Go Back</Button>
                       
                    </Box>
)

const SubjectCards = ({name,url}) => (
    <Link to={url}>
        <VStack w={'430px'} h={'120px'} shadow={'2xl'} justifyContent={'center'}  p={8} borderRadius={'lg'} transition={'all 0.3s'} m={4}
        css={{"&:hover":{
            transform:'scale(1.1)',
        }}}>
            <Heading size={'md'} fontWeight={'medium'} color={'purple.300'} textTransform={'uppercase'} >{name}</Heading>
        </VStack>

    </Link>
)

export default CourseData
