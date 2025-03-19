import React from 'react'
import styled from 'styled-components'
import Marquee from 'react-fast-marquee'

// 🎨 Styled Components (ออกแบบ UI)
const CenterBarStyle = styled.div`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(50, 50, 50, 0.6));
  backdrop-filter: blur(10px);
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 60px;
  margin-top: 20px;
`

const MarqueeText = styled(Marquee)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffcc00;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  width: 100%;
`

const CenterBar = ({ ServiceCode, WallBoardText }) => {
  const filteredItems = WallBoardText.filter((item) => item.Queue === ServiceCode)

  return (
    <CenterBarStyle>
      <MarqueeText speed={60} gradient={true} gradientColor={[0, 0, 0]}>
        {filteredItems.length > 0 ? filteredItems[0].BannerText : 'No announcements at the moment'}
      </MarqueeText>
    </CenterBarStyle>
  )
}

export default CenterBar
