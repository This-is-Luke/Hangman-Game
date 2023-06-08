// Notification.js
import React, { useEffect } from 'react';
import Styled from 'styled-components';

const NotificationContainer = Styled.div`
  marin: 0 auto;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: red;
  width: 30rem;
  margin: 0 auto;
`;


const Notification = ({ showNotification, handleShowNotification }) => {
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        handleShowNotification(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showNotification, handleShowNotification]);

  return showNotification ? (
    <NotificationContainer className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </NotificationContainer>
  ) : null;
};

export default Notification;
