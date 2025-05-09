import '../App.css'
import { useNavigate, useLocation } from 'react-router';
import homeIcon from '../assets/home-icon.png';
import videoIcon from '../assets/video-icon.png';
import userIcon from '../assets/user-icon.png'; 

export function Container({children, title, backgroundColor}: {children: React.ReactNode, title: string, backgroundColor: string}) {
  const nav = useNavigate();
  const location = useLocation();

  function getActivePath(path: string) {
    return location.pathname === path ? "bg-primary" : "";
  }

  return (
    <view className={backgroundColor}>
      {/* Header */}
      <view className="header | fixed w-[200vw] h-[110vw] -top-[70vw] -left-[14vw] rounded-full -rotate-[10deg] bg-primary shadow-[inset_0px_12.93px_28.74px_0px_#ffd28db2] z-10" />
      <view className="container | relative h-screen flex flex-col items-center justify-center mx-[24px]">
        <text className="title | absolute z-20 top-24 text-4xl font-bold text-center mx-auto mb-6">{title}</text>

        {/* Content */}
        {children}

        {/* Navigation */}
        <view className="nav-container | absolute bottom-10 flex items-center justify-center gap-6 mt-20 mx-auto">
          <view bindtap={() => nav('/')} className={`button ${getActivePath('/')}`}>
            <image className="w-10 h-10" src={homeIcon} mode="aspectFill"/>
          </view>
          <view bindtap={() => nav('/researcher-video')} className={`button ${getActivePath('/researcher-video')}`}>
            <image className="w-10 h-10" src={videoIcon} mode="aspectFill"/>
          </view>
          <view bindtap={() => nav('/video-publication')} className={`button ${getActivePath('/video-publication')}`}>
            <image className="w-10 h-10" src={userIcon} mode="aspectFill"/>
          </view>
        </view>
      </view>   
    </view>
  )
}