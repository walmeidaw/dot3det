'use client';

import { useEffect, useState } from "react";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

import { App } from "./config";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";

import style from './notification.module.scss'
import localforage from "localforage";

export default function NotificationCenter() {
  const [token, setToken] = useState(null)

  const messaging = getMessaging(App);

  getToken(messaging, { vapidKey: process.env.NEXT_PUBLIC_FIREBASE_KEY }).then((currentToken) => {
    if (currentToken) {
      setToken(currentToken)
      localforage.setItem('USER_TOKEN', currentToken )
    } else {
      console.log('No registration token available. Request permission to generate one.');
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
  });

  function Notify({ title, body, image = undefined }) {
    return (
      <div className={ style.Notify }>
        { image && <div className={ style.Image }><Image src={ image } alt="title" fill={true} /></div> }
        <div className={ style.Title }>{title}</div>
        <div className={ style.Body }>{body}</div>
      </div>
    )
  }

  function AlertNotification( data ){
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification( data.title , data );
    }
  }

  onMessage(messaging, message => {
    if( message.data.type.includes('in-app') ){
      toast( <Notify {...message.notification} /> )
    }

    if( message.data.type.includes('out-app') ){
      AlertNotification( message.notification )
    }
  })

  useEffect(() => {
    function requestPermission() {
      Notification.requestPermission()
    }

    requestPermission()
    return;
  }, [])

  return <><ToastContainer /></>
}