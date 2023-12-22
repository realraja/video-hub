import {
  Heading,
  Stack,
  VStack,
  Text,
  Button,
  AspectRatio,
} from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineDownload } from 'react-icons/ai';

import data from '../assets/courseData.json';
import { globalContext } from '../context';

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

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('30/8/2023');

  const { course } = useContext(globalContext);

  const params = useParams();

  console.log(course, params.index, params.videoid);

  useEffect(() => {
    if (
      course === undefined ||
      params.index === undefined ||
      params.videoid === undefined
    ) {
      setName('lecture 1');
    } else {
      if (
        course === 'djfguehfrg77d6fsdyfhyugh67e87e487re7y3w7eruh77478389r' ||
        course === 'ABHIMANYU_BSC_SECOND_YEAR'
      ) {
        if (data[course].materials.subjects.length) {
          setName(
            data[course].materials.subjects[params.index].categories[
              params.videoid
            ].materials[0].name
          );
          setDate(
            data[course].materials.subjects[params.index].categories[
              params.videoid
            ].materials[0].created_at
          );
          setVideoSrc(
            data[course].materials.subjects[params.index].categories[
              params.videoid
            ].materials[0].link
          );
        }
      }
    }
  }, [params, course]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      {course === undefined ||
      params.index === undefined ||
      params.videoid === undefined ? (
        <LocalVideoData
          name={name}
          setName={setName}
          date={'30/8/2023'}
          videosArr={videosArr}
          videoSrc={videoSrc}
          setVideoSrc={setVideoSrc}
        />
      ) : (
        ( (course === 'djfguehfrg77d6fsdyfhyugh67e87e487re7y3w7eruh77478389r' || course === 'ABHIMANYU_BSC_SECOND_YEAR') && (data[course].materials.subjects.length > params.index &&
          data[course].materials.subjects[params.index].categories.length >
            params.videoid) )? (
              <VideoData
                name={name}
                setName={setName}
                date={date}
                setDate={setDate}
                videosArr={
                  data[course].materials.subjects[params.index].categories[
                    params.videoid
                  ].materials
                }
                videoSrc={videoSrc}
                setVideoSrc={setVideoSrc}
              />
          ) : (
            <LocalVideoData
              name={name}
              setName={setName}
              date={'30/8/2023'}
              videosArr={videosArr}
              videoSrc={videoSrc}
              setVideoSrc={setVideoSrc}
            />
          )
      )}
    </Stack>
  );
};

const LocalVideoData = ({
  name,
  date,
  videosArr,
  videoSrc,
  setVideoSrc,
  setName,
}) => (
  <>
    <VideoSrcData name={name} date={date} videoSrc={videoSrc} />

    <VStack
      w={['full', 'xl']}
      alignItems={'stretch'}
      p={8}
      spacing={8}
      overflowY={'auto'}
    >
      {videosArr.map((item, index) => (
        <>
          {
            <Button
              variant={'ghost'}
              p={6}
              colorScheme="purple"
              onClick={() => {
                setVideoSrc(item);
                setName(`Lecture ${index + 1}`);
              }}
            >
              Lecture {index + 1}
            </Button>
          }
        </>
      ))}
    </VStack>
  </>
);

const VideoData = ({
  name,
  date,
  videosArr,
  videoSrc,
  setVideoSrc,
  setDate,
  setName,
}) => (
  <>
    <VideoSrcData name={name} date={date} videoSrc={videoSrc} />

    <VStack
      w={['full', 'xl']}
      alignItems={'stretch'}
      p={8}
      spacing={8}
      overflowY={'auto'}
    >
      {videosArr.map((item, index) => (
        <>
          {item.link.substring(0, 3) === 'htt' ? (
            <Button
              variant={'ghost'}
              p={6}
              colorScheme="purple"
              onClick={() => {
                setVideoSrc(item.link);
                setDate(item.created_at);
                setName(item.name);
              }}
            >
              Lecture {index + 1}
            </Button>
          ) : (
            <Button variant={'outline'} p={6} colorScheme="pink">
              <Link
                style={{ display: 'flex' }}
                to={'https://api2.funedulearn.com/' + item.link}
              >
                <Text marginRight={8}>PDF {index + 1}</Text>

                <AiOutlineDownload size={'25px'} />
              </Link>
            </Button>
          )}
        </>
      ))}
    </VStack>
  </>
);

const VideoSrcData = ({ videoSrc, name, date }) => (
  <VStack w={'full'}>
    {videoSrc.substring(0, 16) === 'https://youtu.be' ? (
      <AspectRatio width={'100%'} ratio={16 / 9}>
        <iframe
          title="naruto"
          src={`https://www.youtube.com/embed/${videoSrc.substring(16)}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
        />
      </AspectRatio>
    ) : (
      <video
        controls
        controlsList="nodownload"
        src={videoSrc}
        style={{ width: '100%' }}
      ></video>
    )}

    <VStack alignItems={'flex-start'} p={8} w={'full'} overflowY={'auto'}>
      <Heading>{name}</Heading>
      <p>{date}</p>
      <Text>Lorem, ipsum dolor sit {videoSrc}</Text>
    </VStack>
  </VStack>
);

export default Videos;

/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/QI4fH7S8tts?si=S6MzyDCiX9lrdZ2S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

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
