import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';
import { FiOctagon } from "react-icons/fi";
import React from 'react'



const Home = () => {
  return (
    <>
        <div className='grid grid-cols-[50%_auto] bg-gray-800 text-white mx-6 py-5 px-16 border-2 border-cyan-500'>
            <div className='mt-14 ml-6'>
                <h3 className='font-semibold text-xl'>Hello, It's Me</h3> 
                <h1 className='font-bold text-3xl mt-2'>Malia Raees</h1> 
                <h3 className='font-semibold text-lg mt-2'>And I'm a Frontend Developer !</h3> 
                <p className='mt-4'>"I'm a web developer with a passion for crafting dynamic, user-friendly websites. I thrive on turning ideas into engaging online experiences."</p>
                <div className='flex gap-5 mt-4'>
                    <FaFacebook style={{color: 'cyan', fontSize: '20px'}}/> <FaInstagram style={{color: 'cyan', fontSize: '20px'}}/> <FaLinkedin style={{color: 'cyan', fontSize: '20px'}}/> <FaGithub style={{color: 'cyan', fontSize: '20px'}}/>
                </div>
                    <Button className='mt-4 rounded-full text-black bg-cyan-500 hover:bg-cyan-700'>Download CV</Button>
            </div>
            <div className='flex items-center justify-center'>
                <FiOctagon style={{fontSize: '220px', color: 'cyan', boxShadow: 'inset 0 4px 20px rgba(0, 0, 0, 0.7)'}} className='z-20 rounded'/>
                <Image src="/mypic1.png" alt="myPic" height={0} width={180} className='absolute bottom-[40%] ml-4 h-52 z-30'></Image>
                <div style={{boxShadow: 'inset 0 4px 20px rgba(0, 0, 0, 1)'}} className='absolute w-40 h-20 -mb-24 rounded-[50%] bg-cyan-500 z-10'></div>
            </div>
        </div>
    </>
  )
}

export default Home