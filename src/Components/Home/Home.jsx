import React from 'react';
import banner from '../../assets/Images/Group 6.png'
import { AiFillAndroid, AiOutlineMacCommand } from 'react-icons/ai';
import { HiOutlineCloudDownload } from 'react-icons/hi';
import { BsApple, BsWindows } from 'react-icons/bs';
import Messaging from './Messaging';

const Home = () => {
    return (
        <>
            <div className='max-w-screen-[1920px] lg:w-screen-2xl mx-auto'>
                <div className='flex justify-between xl:pt-9 p-4 xl:px-16'>
                    <h1 className='text-primary font-bold text-xl '>Telegraph</h1>
                    <div className='xl:pr-20'>
                        <button href='#' className='btn  bg-primary text-white rounded-3xl font-bold'>Try Beta</button>

                    </div>
                </div>



                <div>


                    <section>




                        <div className='grid lg:grid-cols-2 grid-cols-1 justify-center items-center'>

                            <div
                                className="  pt-10 pb-5 sm:px-6 lg:flex  lg:items-center lg:px-8"
                            >
                                <div className="p-5  ltr:sm:text-left rtl:sm:text-right">
                                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                                        Simple. Secure.
                                        Reliable messaging.


                                    </h1>

                                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
                                    </p>

                                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                                        <a
                                            href="#"
                                            className="block w-full rounded-3xl bg-primary px-12 py-3 text-lg font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                                        >
                                            Request For Early Access
                                        </a>


                                    </div>
                                </div>
                            </div>

                            <div>
                                <img src={banner} className='md:w-[75%]' alt="" />
                            </div>

                        </div>
                    </section>



                </div>




                <div className='lg:flex justify-center'>
                    <div className='grid md:grid-cols-3 lg:p-0 p-5   grid-cols-1 gap-10  mt-6  lg:mt-10'>

                        <div className="card xl:w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title"><AiFillAndroid className='w-10 h-10 text-primary' /> </h2>
                                <h1 className='text-lg font-semibold'>Android</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                <div className="card-actions justify-end">
                                    <p className='underline text-slate-300 hover:text-black'>
                                        Try Beta For Free
                                    </p>
                                    <HiOutlineCloudDownload className='w-6 h-6 text-primary' />

                                </div>
                            </div>
                        </div>


                        <div className="card xl:w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title"><BsApple className='w-10 h-10 text-primary' /> </h2>
                                <h1 className='text-lg font-semibold'>iPhone</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                <div className="card-actions justify-end">
                                    <p className='underline text-slate-300 hover:text-black'>
                                        Try Beta For Free
                                    </p>
                                    <HiOutlineCloudDownload className='w-6 h-6 text-primary' />

                                </div>
                            </div>
                        </div>
                        <div className="card xl:w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title"> <AiOutlineMacCommand className='w-10 h-10 text-primary' /> <BsWindows className='w-10 h-10 text-primary' /> </h2>
                                <h1 className='text-lg font-semibold'>Mac or Windows</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                <div className="card-actions justify-end">
                                    <p className='underline text-slate-300 hover:text-black'>
                                        Try Beta For Free
                                    </p>
                                    <HiOutlineCloudDownload className='w-6 h-6 text-primary' />

                                </div>
                            </div>
                        </div>


                    </div>
                </div>




                <Messaging />




            </div>

        </>
    );
};

export default Home;