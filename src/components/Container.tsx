import '../App.css'
import { useNavigate } from 'react-router';
import homeIcon from '../assets/home-icon.png';
import accountIcon from '../assets/user-icon.png';
import settingsIcon from '../assets/settings-icon.png'; 

export function Container({children, title, backgroundColor}: {children: React.ReactNode, title: string, backgroundColor: string}) {
  const nav = useNavigate();

  return (
    <view className={backgroundColor}>
      <view className="fixed w-[200vw] h-[110vw] top-[-70vw] left-[-14.27vw] rounded-full rotate-[15.25deg] bg-primary shadow-[inset_0px_12.93px_28.74px_0px_#ffd28db2] z-0" />
      <view className="relative z-[1] h-screen flex flex-col items-center justify-center mx-[24px]">
        <text className="text-4xl font-bold text-center mx-auto mb-[24px] text-white">{title}</text>
        {children}

        <view className="flex flex-col items-center justify-center gap-1 mt-12 mx-auto">
          <view bindtap={() => nav('/')} className="button">
            <image className="w-8 h-8" src={homeIcon} mode="aspectFill"/>
            <text className="text-2xl font-bold text-dark">Home</text>
          </view>
          <view bindtap={() => nav('/account')} className="button">
            <image className="w-8 h-8" src={accountIcon} mode="aspectFill"/>
            <text className="text-2xl font-bold text-dark">Account</text>
          </view>
          <view bindtap={() => nav('/settings')} className="button">
            <image className="w-8 h-8" src={settingsIcon} mode="aspectFill"/>
            <text className="text-2xl font-bold text-dark">Settings</text>
          </view>
        </view>
      </view>   
    </view>
  )
}