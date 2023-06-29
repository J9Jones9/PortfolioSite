import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='main'>
            <img className='object-contain object-fill w-full h-screen object-cover' src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/20'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>
                        I'm Jack Jones
                    </h1>
                    <h2 className='flex sm: text-3xl text-2xl pt-4 text-grey-800'>I'm a
                        <TypeAnimation
                            sequence={[
                                'Developer',
                                2000, // wait 2s"
                                'Software Engineer',
                                2000,
                                'Tech Enthusiast',
                                2000,

                            ]}
                            wrapper="div"
                            cursor={true}
                            style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
                            repeat={Infinity} />
                    </h2>
                    <div className='flex justify-between p-6 max-w-[200px] w-full'>
                        <FaTwitter className='cursor-pointer' size={20} />
                        <FaFacebookF className='cursor-pointer' size={20} />
                        <FaInstagram className='cursor-pointer' size={20} />
                        <a href='https://www.linkedin.com/in/jack-jones999/'>
                            <FaLinkedinIn className='cursor-pointer' size={20} />
                        </a>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main