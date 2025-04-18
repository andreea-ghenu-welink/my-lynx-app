import { useState } from '@lynx-js/react';
import { useNavigate } from 'react-router';
import { Container } from '../components/Container.tsx';
import '../App.css';
import downArrowIcon from '../assets/down-arrow.png';

const VIDEO_PUBLICATION_URL = "https://lt.org/node/4930?_format=json";
const AUTHOR_URL = "https://lt.org/node/4928?_format=json";
const COVER_IMAGE_URL = "https://lt.org/sites/default/files/video/covers/Escobar%20Karla_Coverphoto.jpg";

export function ResearcherVideo() {
  const [isLoading, setIsLoading] = useState(true);
  const [authorData, setAuthorData] = useState({});
  const [videoTitle, setVideoTitle] = useState('');
  const [showLoader, setShowLoader] = useState(false);

  const nav = useNavigate();
  
  const placeholder = 
    <view className="flex flex-col gap-3 items-center justify-center">
      <text className="text-3xl leading-relaxed text-center text-white mb-4 mx-auto">
        Click the <text className="text-3xl text-gray-300">Fetch Data</text> button below to discover and display researcher video details
      </text>
      <image className="bounce-animation | w-16 h-16" src={downArrowIcon} mode="aspectFill"/>
    </view>

  const handleFetchData = async () => {
    setShowLoader(true);

    try {
      await fetchAuthorData();
      await fetchVideoTitle();

    } catch (error){
      console.error(error);
    } finally {
      setShowLoader(false);
      setIsLoading(false);
    }
  }

  const fetchAuthorData = async () => {
    const data = await fetch(AUTHOR_URL).then(res => res.json());
    setAuthorData(data);
  }

  const fetchVideoTitle = async () => {
    const data = await fetch(VIDEO_PUBLICATION_URL).then(res => res.json());
    setVideoTitle(data.title[0].value);
  }

  const handleClearData = () => {
    setAuthorData([]);
    setIsLoading(true);
    setShowLoader(false);
    setVideoTitle('');
  }

  return (
    <Container title="Video" backgroundColor="video-container">
      { isLoading ? (
        showLoader ? (
          <view className="loader | w-16 h-16"></view>
        ) : (
          placeholder
        )
      ) : (
        <view className="video-card | flex flex-col bg-white rounded-xl overflow-hidden" bindtap={() => nav("/video-publication")}>
          <image className="w-100 h-48" src={COVER_IMAGE_URL} mode="aspectFill"/>
          <view className="flex flex-col gap-4 px-4 py-6">
            <text className="text-xl font-semibold mx-auto">
              {videoTitle}
            </text>
            <text className="text-xl font-normal">
              {authorData.title[0].value}
            </text>
          </view>
        </view>
      ) }

      <view className="buttons-container | absolute bottom-40 flex gap-4 mt-10">
        <view className="button | bg-primary px-6 py-4" bindtap={handleFetchData}>
          <text className="text-2xl text-center font-semibold mx-auto">
            Fetch Data
          </text>
        </view>
        <view className="button | px-6 py-4" bindtap={handleClearData}>
          <text className="text-2xl text-center font-semibold mx-auto">
            Clear Data
          </text>
        </view>
      </view>
    </Container>
  )
}
