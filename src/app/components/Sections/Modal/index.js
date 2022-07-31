import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle, AiOutlinePlayCircle } from "react-icons/ai";
import { PORTFOLIO } from "../../../data/portfolio";

const Modal = ({ closeModal, popupData }) => {
    const [video, setVideo] = useState(true);

    useEffect(() => {
        !popupData?.video ? setVideo(false) : setVideo(true);
    }, [popupData]);

    return (
        <>
            <div className="h-full w-full flex justify-center items-center border bg-black border-gray-600 flex-col rounded-md">
                <div className="text-right w-full">
                    <button className="text-red-500 text-3xl" onClick={closeModal}>
                        <AiOutlineCloseCircle />
                    </button>
                </div>
                <div className="w-full h-[698px] p-10 overflow-y-scroll scrollbar-hide">
                    <div className="">
                        <h1 className="text-lg md:text-3xl text-white font-[Montserrat] font-semibold">
                            {popupData?.title}
                        </h1>
                        <p className="text-[#696969] text-[15px] font-[Poppins] mt-5">
                            {popupData?.description}
                        </p>
                    </div>
                    <div className="md:columns-2 mt-10 space-y-5">
                        {PORTFOLIO?.popupLinks?.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <span className="text-[#67DB52] ">{item.icon}</span>
                                <a
                                    href="/"
                                    className="text-white underline underline-offset-4 decoration-[#67DB52]"
                                >
                                    {item.url}
                                </a>
                            </div>
                        ))}
                    </div>
                    <div
                        className={`relative w-full max-h-[357px] rounded-md mt-10 ${!video ? "overflow-hidden" : "overflow-y-scroll scrollbar-hide"
                            }`}
                    >
                        {video ? (
                            <div className=" w-full h-full flex justify-center items-center">
                                <video className="w-full" src={popupData?.video}></video>
                                <button className="w-10 h-10 bg-[#000] rounded-full flex justify-center items-center text-[#67DB52] text-5xl absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2">
                                    <AiOutlinePlayCircle />
                                </button>
                            </div>
                        ) : (
                            <a
                                href="https://corporx-react-website.vercel.app"
                                style={{
                                    backgroundImage: "url(" + popupData?.images?.default + ")",
                                }}
                                target="_blank"
                                rel="noreferrer"
                                className="project-box h-[220px]"
                            ></a>
                        )}
                    </div>
                    <div className="flex flex-wrap gap-5 justify-center mt-10">
                        <div className="sm:w-[46%]  md:w-[48%] max-h-[174px] rounded-md overflow-y-scroll scrollbar-hide">
                            <a
                                href="https://corporx-react-website.vercel.app"
                                style={{
                                    backgroundImage: "url(" + popupData?.images?.variant1 + ")",
                                }}
                                target="_blank"
                                rel="noreferrer"
                                className="project-box h-[170px] none"
                            ></a>
                        </div>
                        <div className="sm:w-[46%]  md:w-[48%] max-h-[174px] rounded-md overflow-y-scroll scrollbar-hide">
                        <a
                                href="https://corporx-react-website.vercel.app"
                                style={{
                                    backgroundImage: "url(" + popupData?.images?.variant2 + ")",
                                }}
                                target="_blank"
                                rel="noreferrer"
                                className="project-box h-[170px] none"
                            ></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
