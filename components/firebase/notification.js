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
	const [messaging, setMessaging] = useState(null)

	function Notify({ title, body, image = undefined }) {
		return (
			<div className={style.Notify}>
				{image && <div className={style.Image}><Image src={image} alt="title" fill={true} /></div>}
				<div className={style.Title}>{title}</div>
				<div className={style.Body}>{body}</div>
			</div>
		)
	}

	function GetToken(){
		getToken(messaging, { vapidKey: process.env.NEXT_PUBLIC_FIREBASE_KEY }).then((currentToken) => {
			if (currentToken) {
				localforage.setItem('USER_TOKEN', currentToken)
			} else {
				console.log('No registration token available. Request permission to generate one.');
			}
		}).catch((err) => {
			console.log('An error occurred while retrieving token. ', err);
		});
	}

	function RegisterMessageListener() {
		onMessage(messaging, message => {
			if (message.data.type.includes('in-app')) {
				toast(<Notify {...message.notification} />)
			}

			if (message.data.type.includes('out-app')) {
				AlertNotification(message.notification)
			}
		})
	}

	function AlertNotification(data) {
		if ("Notification" in window && Notification.permission === "granted") {
			new Notification( data.title, {
				...data,
				badge: 'https://dot3det.vercel.app/static/icons/shortcuts/badge.png',
            	icon: 'https://dot3det.vercel.app/static/icons/windows11/Square150x150Logo.scale-400.png'
			});
		}
	}

	useEffect(() => {
		setMessaging( getMessaging(App) )
		return;
	}, [])

	useEffect(() => {		
		if(messaging){
			localforage.getItem('USER_TOKEN').then( value => {
				if( !value ){
					GetToken()
				}
			})

			RegisterMessageListener()
		}
	}, [ messaging ])

	return <><ToastContainer /></>
}