import '../App.css'
import { useNavigate } from 'react-router';
import homeIcon from '../assets/home-icon.png';
import accountIcon from '../assets/user-icon.png';
import settingsIcon from '../assets/settings-icon.png'; 

export function Container({children, title, backgroundColor}: {children: React.ReactNode, title: string, backgroundColor: string}) {
  const nav = useNavigate();

  return (
    <view className={backgroundColor}>
      <view className="background-circle" />
      <view className="main-content">
        <text className="title-text">{title}</text>
        {children}

        <view className="navigation-container">
          <view bindtap={() => nav('/')} className="button">
            <image className="icon-image" src={homeIcon} mode="aspectFill"/>
            <text className="button-text">Home</text>
          </view>
          <view bindtap={() => nav('/account')} className="button">
            <image className="icon-image" src={accountIcon} mode="aspectFill"/>
            <text className="button-text">Account</text>
          </view>
          <view bindtap={() => nav('/settings')} className="button">
            <image className="icon-image" src={settingsIcon} mode="aspectFill"/>
            <text className="button-text">Settings</text>
          </view>
        </view>
      </view>   
    </view>
  )
}