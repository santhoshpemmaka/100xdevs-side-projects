'use client';

import React, { useEffect } from 'react';
import { io } from 'socket.io-client';


interface SocketProviderProps {
    children?: React.ReactNode
}

interface ISocketContext {
    sendMessage: (msg: string) => any;
}


const SocketContext = React.createContext<any>(null);


export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
    const sendMessage = React.useCallback((msg: string) => {
        console.log("Send Message", msg);
    }, []);
     
    useEffect(() => {
        const _socket = io("http://localhost:8000");

        return () => {
            _socket.disconnect();
        }
    },[])
    return (
        <SocketContext.Provider value={null}>
            {children}
        </SocketContext.Provider>
    )
}