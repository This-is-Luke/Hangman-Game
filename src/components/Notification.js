// Notification.js
/* 
This is the notification component, it is intended to simply render 
a message to the user when they have already entered a letter.
*/

import React, { useEffect } from 'react';
import Styled from 'styled-components';

/*
The Styled component below is used to style the notification message.
The message is displayed in red and is centered on the screen.
*/
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

/*
below is the main function of the component, it takes in two props:
showNotification and handleShowNotification. The showNotification prop
is a boolean value that is used to determine whether or not to show the
notification message. The handleShowNotification prop is a function that
is used to set the showNotification prop to false, which will hide the
notification message.
*/

const Notification = ({ showNotification, handleShowNotification }) => {
  useEffect(() => {
    if (showNotification) {
      // if showNotification is true, set a timer to hide the notification
      const timer = setTimeout(() => {
        handleShowNotification(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showNotification, handleShowNotification]);
/*
Here is the return statement for the component. If showNotification is true,
then the notification message will be displayed. If showNotification is false,
then the notification message will not be displayed.
*/
  return showNotification ? (
    <NotificationContainer className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </NotificationContainer>
  ) : null;
};

export default Notification;
