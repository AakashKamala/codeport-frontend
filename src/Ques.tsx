import React, { useEffect, useState } from 'react';
import { io, Socket } from "socket.io-client";
import { arr } from './data/arr';
import "./ques.css"

const Ques : React.FC = () => {
  const [question, setQuestion] = useState('');
  const [socket, setSocket] = useState<Socket | null>(null);
  const [answer, setAnswer] = useState('');
  const [index, setIndex] = useState('');

  const handleAnswer = (e: any) => {
    const userAnswer = e.target.value;
    setAnswer(userAnswer);
    console.log("Answer:", userAnswer);

    socket?.emit("sol", userAnswer, index)
  };

  useEffect(() => {
    const currentIndex: any = window.location.pathname[1];
    console.log("Index:", currentIndex);
    setIndex(currentIndex);
    setQuestion(arr[currentIndex] || "Question not found");
  }, []);

  useEffect(() => {
    const newSocket: any = io("https://codeport-backend.onrender.com");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socket || !index) return;

    socket.emit("ques", index);

    socket.on("welcome", (data: any) => {
      console.log("Welcome:", data.message);
      setAnswer(data.answer)
    });

    socket.on("soln", (data: any) => {
      console.log("Solution:", data.message);
      setAnswer(data.message)
    });

    return () => {
      socket.off("welcome");
      socket.off("soln");
    };
  }, [socket, index]);

  return (
    <div>
      <h1>{question}</h1>
      <textarea className='text'
        rows={20}
        cols={80}
        value={answer}
        onChange={handleAnswer}
      ></textarea>
    </div>
  );
};

export default Ques;
