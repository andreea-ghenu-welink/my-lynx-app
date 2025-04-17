import { useEffect, useState } from '@lynx-js/react';
import { useNavigate } from 'react-router';
import { Container } from '../components/Container.tsx';
import homeIcon from '../assets/home-icon.png';
import studentIcon from '../assets/student-icon.png';
import buildingIcon from '../assets/building-icon.png';
import '../App.css';

const VIDEO_PUBLICATION_URL = "https://lt.org/node/4930?_format=json";
const AUTHOR_URL = "https://lt.org/node/4928?_format=json";
const INSTITUTION_URL = "https://lt.org/node/4346?_format=json";
const COVER_IMAGE_URL = "https://lt.org/sites/default/files/video/covers/Escobar%20Karla_Coverphoto.jpg";

export function VideoPublication() {
  const nav = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  // Data collections
  const [authorData, setAuthorData] = useState({});
  const [videoData, setVideoData] = useState({});
  const [institutionData, setInstitutionData] = useState({});
  
  useEffect(() => {
    handleFetchData();
  }, []);

  const handleFetchData = async () => {
    setShowLoader(true);

    try {
      await fetchData(AUTHOR_URL, setAuthorData);
      await fetchData(VIDEO_PUBLICATION_URL, setVideoData);
      await fetchData(INSTITUTION_URL, setInstitutionData);

    } catch (error){
      console.error(error);
    } finally {
      setShowLoader(false);
      setIsLoading(false);
    }
  }

  const fetchData = async (dataUrl: string, setterFn: (data: any) => void) => {
    const data = await fetch(dataUrl).then(res => res.json());
    setterFn(data);
  }

  // Function to strip HTML tags from text
  const stripHtmlTags = (html: string) => {
    if (!html) return '';
    return html.replace(/<\/?[^>]+(>|$)/g, '');
  };

  return (
    <view className="w-full h-full px-6 mt-16">
      <view className="flex items-center gap-4">
        <text className="text-3xl font-semibold">Video Publication</text>
        <view bindtap={() => nav('/')} className={`button | fixed right-4 bottom-6 bg-primary rounded-full`}>
          <image className="w-12 h-12" src={homeIcon} mode="aspectFill"/>
        </view>
      </view>
      <scroll-view
        scroll-orientation="vertical" className="w-full h-[calc(100vh-120px)] mt-8"
      >
      <view>
        { isLoading ? (
          showLoader && (
            <view className="loader | border-r-accent mt-48 w-16 h-16 mx-auto"></view>
          )) : 
          ( 
            <view>
              {/* Video Publication */}
              <view className="video-publication | relative flex flex-col">
                <image className="w-[340px] h-56 rounded-bl-2xl" src={COVER_IMAGE_URL} mode="aspectFill"/>
                <view className="flex flex-col gap-4 pt-6 pb-8">
                  <text className="absolute -top-14 left-6 text-xl text-white">
                    {authorData.title?.[0]?.value}
                  </text>
                  <text className="text-2xl font-semibold">
                    {videoData.title?.[0]?.value}
                  </text>
                  <text className="text-xl">
                    {videoData.field_abstract?.[0]?.value}
                  </text>
                  <view className="flex gap-x-2">
                    <text className="text-xl font-semibold">DOI:</text> 
                    <text className="text-xl">{videoData.field_doi?.[0]?.value}</text>
                  </view>
                </view>
              </view>

              {/* Researcher */}
              <view className="researcher | flex flex-col gap-5 py-8 border-t border-dark">
                <view className="flex items-center gap-4">
                  <image className="w-10 h-10" src={studentIcon} mode="aspectFill"/>
                  <text className="text-2xl font-semibold">
                    Researcher
                  </text>
                </view>
                <text className="text-xl">{authorData.field_bio?.[0]?.value}</text>
              </view>

              {/* Institution */}
              <view className="institution | flex flex-col gap-5 pt-8 pb-4 border-t border-dark">
                <view className="flex items-center gap-4">
                  <image className="w-10 h-10" src={buildingIcon} mode="aspectFill"/>
                  <text className="text-2xl font-semibold">
                    Institution
                  </text>
                </view>
                <text className="text-xl font-semibold">{institutionData.title?.[0]?.value}</text>
                <text className="text-xl">{stripHtmlTags(institutionData.field_description?.[0]?.value)}</text>
              </view>

              {/* Credit */}
              <view className="credit | flex flex-col gap-5 py-8 border-t border-dark">
                <text className="text-2xl font-semibold">
                  Credit
                </text>
               
                <view className="flex flex-col gap-2">
                  <text className="text-xl">© and Latest Thinking</text>
                  <text className="text-xl">This work is licensed under CC-BY 4.0</text>
                </view>
              </view>
            </view>
          ) }
        </view>
      </scroll-view>
    </view>
  )
}
