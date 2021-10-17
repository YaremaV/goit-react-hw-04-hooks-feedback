import React from 'react';
import './notification.css';

export default function Notification({ message }) {
  return <p className="message">{message}</p>;
}
