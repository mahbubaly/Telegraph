import React from 'react';
import oval from '../../assets/Images/Oval.png'
import img from '../../assets/Images/image.png'
import wife from '../../assets/Images/wife.png'
import roundBg from '../../assets/Images/round.png'
import women from '../../assets/Images/women.png'
import gf from '../../assets/Images/gf.png'
import frnd from '../../assets/Images/boy.png'
import { BsShieldFillCheck } from 'react-icons/bs';
import { SiStackshare } from 'react-icons/si';
import { AiFillMessage } from 'react-icons/ai';


const Messaging = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 justify-center items-center  lg:mt-10'>

                <div className='p-5'>
                    <img src={oval} alt="" />
                    <img src={img} alt="" className='lg:ml-16 z-40  lg:-mt-[30%] xl:-mt-[20%] md:ml-10 ml-8 md:-mt-[40%]  -mt-[50%]' />


                    <div className='lg:-mt-[44%] lg:ml-20 md:block hidden xl:-mt-[30%] -mt-[50%] ml-0  xl:ml-52 text-black z-50 relative'>
                        <div className='flex  border-2 z-40 bg-white   gap-2 items-center rounded-lg p-2 w-[390px] '>
                            <img src={wife} className='rounded-[50%] w-16' alt="" />
                            <div>
                                <h2 className='text-xl font-semibold'>Wife</h2>
                                <p>It is a long established fact that a…</p>
                            </div>
                            <div>
                                <p>11:39</p>
                                <p className='text-white rounded-3xl w-9 text-center bg-primary'> 10</p>
                            </div>

                        </div>
                        <div className='flex border-2 ml-8 bg-white my-4 gap-2 items-center rounded-lg p-2 w-[390px] '>
                            <img src={gf} className='rounded-[50%] w-16' alt="" />
                            <div>
                                <h2 className='text-xl font-semibold'>Girlfriend</h2>
                                <p>It is a long established fact that a…</p>
                            </div>
                            <div>
                                <p>11:39</p>
                                <p className='text-white rounded-3xl w-9 text-center bg-primary'> 10</p>
                            </div>

                        </div>
                        <div className='flex border-2 bg-white ml-16 gap-2 items-center rounded-lg p-2 w-[390px] '>
                            <img src={frnd} className='rounded-[50%] w-16' alt="" />
                            <div>
                                <h2 className='text-xl font-semibold'>Unknown Girl</h2>
                                <p>It is a long established fact that a…</p>
                            </div>
                            <div>
                                <p>11:39</p>
                                <p className='text-white rounded-3xl w-9 text-center bg-primary'> 10</p>
                            </div>

                        </div>
                    </div>
                </div>


                <div>
                    <section className="">
                        <div
                            className=" px-4 py-5  lg:flex  lg:items-center"
                        >
                            <div className="">
                                <h1 className=" text-3xl font-bold">
                                    Simple, Personal, Real Time Messaging
                                </h1>

                                <p className="mt-4 sm:text-xl/relaxed">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br /> <br />

                                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                                </p>


                            </div>
                        </div>
                    </section>
                </div>










            </div>

            {/*  */}
            <div>
                <section className="md:flex justify-around mt-14  gap-4">
                    <div className=" px-4 py-10 lg:flex  ">
                        <div className=" max-w-xl ">
                            <h1 className="text-3xl font-bold  ">
                                Sharing Cool Stuff With Your Community

                            </h1>

                            <p className="mt-4 sm:text-xl/relaxed">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                            </p>
                            <p className="mt-2 sm:text-xl/relaxed">
                                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                            </p>


                        </div>
                    </div>

                    <div>



                        <div className="card lg:w-60 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <BsShieldFillCheck className='w-10 h-10 text-primary' />
                                <h1 className='text-lg font-semibold'>Security by Default</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content.</p>

                            </div>
                        </div>
                        <div className="card lg:w-60 lg:ml-[250px]  lg:-mt-16  my-3 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <SiStackshare className='w-8 h-8 text-primary' />
                                <h1 className='text-lg font-semibold'>Document Share</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content.</p>

                            </div>
                        </div>

                        <div className="card lg:w-60 lg:-mt-40 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <AiFillMessage className='w-10 h-10 text-primary' />
                                <h1 className='text-lg font-semibold'>Say What's On Your Mind</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content.</p>

                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 justify-center items-center  lg:mt-10'>

                <div className='p-5'>
                    <div className='flex   lg:justify-end 2xl:justify-center '>
                        <img src={oval} alt="" className='' />
                    </div>
                    <img src={women} alt="" className='lg:ml-10 lg:-mt-[40%] xl:ml-32  xl:-mt-[25%] md:ml-10  md:-mt-[40%]  -mt-[45%]' />


                    <div className='lg:-mt-[60%] xl:-mt-[40%] 2xl:-mt-[35%] -mt-[50%] lg:ml-44 xl:ml-[220px]'>
                        <img src={roundBg} className='' alt="" />
                    </div>
                </div>


                <div>
                    <section className="">
                        <div
                            className=" px-4 py-5  lg:flex  lg:items-center"
                        >
                            <div className="">
                                <h1 className=" text-3xl font-bold">
                                    Keep In Touch With The Groups Of People.
                                </h1>

                                <p className="mt-4 sm:text-xl/relaxed max-w-xl">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                </p>


                            </div>
                        </div>
                    </section>
                </div>










            </div>




            {/* Footer */}


            <section className="bg-gray-900 rounded-2xl text-white lg:mx-4">
                <div
                    className="mx-auto max-w-screen-[2160px] px-4 py-32   lg:items-center"
                >
                    <div className=" text-center">
                        <h1
                            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                        >
                            Let’s Start With Quick App

                        </h1>

                        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                            tenetur fuga ducimus numquam ea!
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded border  bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                href="/get-started"
                            >
                                Request For Early Access
                            </a>


                        </div>
                    </div>
                </div>


            </section>
            <div className='md:flex my-5 lg:mt-[80px] justify-between p-2 text-[#00194A]'>
                <div>
                    <p className='text-lg font-bold'>© Telegraph. 2020 — All rights reserved.</p>
                </div>
                <div className='flex gap-6 lg:justify-start justify-center text-[#00194A]'>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>Facebook</p>
                </div>
            </div>







        </>
    );
};

export default Messaging;