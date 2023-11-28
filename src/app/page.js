"use client"
import { useSelect } from "@material-tailwind/react";
import Image from "next/image";
import { useSelector } from "react-redux/es/hooks/useSelector";


export default function Home() {
  const dark_mode = useSelector((state) => state.dark_mode.value)
  const backgroundImageUrl=dark_mode? "url(images/image1.png)":""
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 " style={{backgroundImage:backgroundImageUrl}}>
     
      <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
         Understand User Flow. 
        <span class="sm:block"> This is Home Page. </span>
        
      </h1>

    </main>
  );
}



