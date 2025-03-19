import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

// 🌟 Styled Components (ออกแบบ UI)
const DateTimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  color: #ffcc00;
  font-size: 2rem;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 10px;
  text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.3);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1s ease-in-out;
  width: fit-content;
  min-width: 250px;
  margin: auto;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000) // อัปเดตทุก ๆ 1 วินาที

    return () => clearInterval(intervalId) // ล้าง interval เมื่อ component ถูก unmount
  }, [])

  const formatDate = (date) => {
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()

    return `${hours}:${minutes}:${seconds} | ${day}/${month}/${year}`
  }

  return <DateTimeContainer>{formatDate(currentTime)}</DateTimeContainer>
}

export default DateTime
