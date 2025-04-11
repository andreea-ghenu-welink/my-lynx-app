import { useCallback, useEffect, useState } from '@lynx-js/react'

import './App.css'
import ltLogo from './assets/lt-logo-small.png'
import homeIcon from './assets/home-icon.png'
import userIcon from './assets/user-icon.png' 
import settingsIcon from './assets/settings-icon.png'

export function App() {
  return (
    <view className="app-container">
      <view className="background-circle" />
      <view className="main-content">
        <view className="banner-container">
          <view className="logo-container">
            <image src={ltLogo} mode="aspectFit" className="logo-image" />
            <text className="title-text">Latest Thinking</text>
          </view>
        </view>
        <view className="content-section">
          <text className="navigation-text">Menu</text>
          <view className="navigation-container">
            <view>
              <image src={homeIcon} mode="aspectFit" className="icon-image" />
            </view>
            <view>
              <image src={userIcon} mode="aspectFit" className="icon-image" />
            </view>
            <view>
              <image src={settingsIcon} mode="aspectFit" className="icon-image" />
            </view>
          </view>
        </view>
      </view> 
    </view>
  )
}
