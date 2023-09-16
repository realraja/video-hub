import { Heading, Stack, VStack, Text, Button, AspectRatio} from '@chakra-ui/react'
import React,{useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineDownload } from 'react-icons/ai';

import data from '../assets/courseData.json'

const Videos = () => {

    const videosArr = [
        'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
        'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
        'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
        'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
        'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
        'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
        'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
      ];

    const [videoSrc, setVideoSrc ] = useState(videosArr[0]);
    const [name, setName ] = useState('');
    const [date, setDate ] = useState('30/8/2023');

    const params = useParams();

    console.log(params.id,params.index,params.videoid);

    useEffect(()=>{

        if(params.id === undefined || params.index === undefined || params.videoid === undefined){
            setName('lecture 1')
        }else{
            if(params.id === 'djfguehfrg77d6fsdyfhyugh67e87e487re7y3w7eruh77478389r' && data[params.id].materials.subjects.length){
                setName(data[params.id].materials.subjects[params.index].categories[params.videoid].materials[0].name)
                setDate(data[params.id].materials.subjects[params.index].categories[params.videoid].materials[0].created_at)
                setVideoSrc(data[params.id].materials.subjects[params.index].categories[params.videoid].materials[0].link)
            }
        }
        
        
        
    },[params])

  return (
    <Stack direction={['column','row']} h={'100vh'}>

        {
            (params.id === undefined || params.index === undefined || params.videoid === undefined)?(
                <VideoData name={'rajaq'} date={'30/8/2023'} videosArr={videosArr} videoSrc={videoSrc} setVideoSrc={setVideoSrc} />
            ):(<>
            {
                (params.id === 'djfguehfrg77d6fsdyfhyugh67e87e487re7y3w7eruh77478389r' && data[params.id].materials.subjects.length > params.index && data[params.id].materials.subjects[params.index].categories.length > params.videoid)?(<>
                
                    <VideoData name={name} setName={setName} date={date} setDate={setDate} videosArr={data[params.id].materials.subjects[params.index].categories[params.videoid].materials} videoSrc={videoSrc} setVideoSrc={setVideoSrc} />
                </>):(
                    <VideoData name={'zzz'} date={'30/8/2023'} videosArr={videosArr} videoSrc={videoSrc} setVideoSrc={setVideoSrc} />
                )
            }
            </>)
        }
        
        
      
    </Stack>
  )
}

const VideoData = ({name,date,videosArr,videoSrc,setVideoSrc,setDate,setName})=>(<>
 {/*<Container width={'100%'} height={'100%'} >
          <iframe style={{width:'100%',height:'100%'}} src="https://www.youtube.com/embed/TpEFs3qGH3E?ref=0" title='youtub video' allowfullscreen></iframe> 
        </Container> */}
    <VideoSrcData name={name} date={date} videoSrc={videoSrc} />

    <VStack w={['full','xl']} alignItems={'stretch'} p={8} spacing={8} overflowY={'auto'}>
            {
                videosArr.map((item,index) =>(<>
                {
                    (item.link.substring(0,3) === 'htt')?(
                        <Button variant={'ghost'} p={6} colorScheme='purple'  onClick={()=>{setVideoSrc(item.link); setDate(item.created_at); setName(item.name);}}>
                        Lecture {index + 1}
                    </Button>
                    ):(
                        
                        <Button variant={'outline'} p={6} colorScheme='pink'>
                            <Link style={{display:'flex'}} to={'https://api2.funedulearn.com/'+item.link} >
                        <Text marginRight={8}>PDF {index + 1}</Text>

                        <AiOutlineDownload size={'25px'} />
                        </Link>
                    </Button>
                    )
                }
                </>
                    
                ))
            }
        </VStack>
</>)

const VideoSrcData = ({videoSrc,name,date}) =>(<VStack w={'full'}>

    {
        (videoSrc.substring(0,16) === 'https://youtu.be')?(<AspectRatio width={'100%'} ratio={16 / 9}>
        <iframe
          title='naruto'
          src={`https://www.youtube.com/embed/${videoSrc.substring(16)}`}
          allowFullScreen
        />
      </AspectRatio>):(
            <video controls controlsList='nodownload' src={videoSrc} style={{width:'100%',}}></video>
        )
    }
    


<VStack alignItems={'flex-start'} p={8} w={'full'} overflowY={'auto'} >
    
    <Heading>{name}</Heading>
    <p>{date}</p> 
    <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae architecto libero quaerat laborum? Eaque molestiae facere tempora officia itaque? Corporis totam cumque ea aut excepturi, temporibus ullam omnis possimus earum animi quasi. Dolores placeat aliquid blanditiis ad. Voluptate, similique rem. Iste animi, iusto aliquid repudiandae aperiam eligendi quos deleniti officia. Veritatis recusandae similique numquam nulla nostrum cum fugiat dolorum iure officiis! Praesentium esse ratione voluptatum laudantium laboriosam fugit, aut, explicabo nihil totam vitae enim voluptas? Earum qui ratione consectetur eos obcaecati alias exercitationem quis autem! Consequuntur velit praesentium obcaecati porro numquam aut debitis consectetur fugit accusantium temporibus asperiores sunt fuga omnis, quam deleniti, saepe quod reprehenderit ab quasi. Pariatur quod a non! Voluptatem accusantium reiciendis deserunt fugit sunt ad, suscipit vitae distinctio doloribus corporis quos officiis adipisci ut asperiores voluptatum earum animi aperiam quidem. Doloribus nesciunt debitis odio error, ad repellendus sapiente illo tenetur molestiae veritatis quam delectus. Maiores necessitatibus voluptatum facilis, molestias reiciendis qui, non consequatur nemo est saepe sunt odio vitae fugit enim, eum voluptas. Dignissimos quibusdam vel dolore impedit ut fugiat debitis natus aliquid vitae error, modi doloribus ad quos placeat nihil facere voluptate inventore alias accusamus dolor ab nemo earum ipsam consectetur. Ut explicabo necessitatibus odit accusamus placeat reprehenderit beatae molestiae velit provident dolore nesciunt cumque, quos quam repellendus. Eaque quis eligendi accusantium ducimus aliquam. Optio eius eos asperiores accusamus magni error, rem veritatis quas corporis, ea consequuntur ipsa neque ex maiores {videoSrc} placeat ipsum libero! Maiores perferendis, autem temporibus minima quaerat porro facilis dolores asperiores quia aliquam similique voluptatibus iste quam cupiditate iusto quod dicta soluta ipsum illo veniam rerum excepturi. Quisquam non consequuntur commodi dolore, magni fugit optio laboriosam eum dicta animi voluptas corrupti tenetur aut aliquid ipsa! Magnam repellendus totam est praesentium, placeat dignissimos impedit incidunt animi cum possimus nam quas eum excepturi laborum dolores aliquam quasi aut minus ducimus, ullam distinctio error sint. Officia sapiente nostrum architecto voluptate eveniet minima nisi quo ad assumenda quod impedit ipsa quasi perspiciatis consequatur, aspernatur commodi iure error quaerat vel ducimus? Officia cumque rem sint reiciendis veritatis ipsum adipisci aspernatur quibusdam ipsam veniam? Inventore repudiandae in possimus aut ipsa ea sit dignissimos perspiciatis libero necessitatibus ducimus ipsam deleniti impedit sequi adipisci unde reprehenderit, perferendis optio quasi eius voluptatem! Ipsam totam cupiditate rem. Exercitationem delectus suscipit commodi aliquid. Nam ad officiis est consectetur sequi iure ipsa doloremque nobis facilis assumenda. Magnam, sit, consequatur minus itaque, laborum expedita totam saepe sunt incidunt laudantium minima? Ad, enim repudiandae? Corrupti ipsam, eos repudiandae explicabo quae assumenda dolor maiores! Quam ratione facere dignissimos asperiores unde, ea, sit praesentium sint blanditiis eligendi voluptatum. Perspiciatis dolores velit tenetur eos veniam temporibus dolorum quos illum explicabo repudiandae tempora aliquid, vel voluptatum ad in amet quam quaerat nemo consectetur odit numquam. Quae velit odio laboriosam laborum accusantium laudantium asperiores consequatur suscipit! Molestias, facilis nostrum ipsum hic perferendis inventore fugiat placeat totam esse ratione. Impedit quasi, ipsa, suscipit dolore officiis maxime cupiditate quia deleniti placeat reprehenderit veniam error earum mollitia illo ut magnam consectetur. Maxime, ex illo.
    </Text>
</VStack>
</VStack>  )

export default Videos





/*
allow_dl
: 
true
attempts
: 
0
batch_id
: 
"60eaa09365055cf132458257"
created_at
: 
"2021-07-12T12:49:17.382Z"
free
: 
false
institute_id
: 
"5f2ba95af9d3f8a4486ff219"
link
: 
"https://youtu.be/hvjLP1-Ku-o"
locked
: 
true
name
: 
"introduction"
saved
: 
false
status
: 
0
teacher_id
: 
{_id: '5f2f857fde603ee20c01552f', name: 'Admin'}
type
: 
2
updated_at
: 
"2021-07-12T12:49:17.383Z"
__v
: 
0
_id
: 
"60ec3a4deec77ef111b7d97a"
*/