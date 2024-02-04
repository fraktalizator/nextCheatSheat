import React from 'react';

interface dropDownProps{
    title:string,
}

function DropDown(props: dropDownProps) {
    return (
        <>
            <div className="mx-auto flex items-center justify-center bg-blue-400 rounded-lg hover:bg-blue-600 hover:rounded-t-lg">
                <div className="group relative cursor-pointer">
                    <div className="inline-flex items-center justify-between px-4">
                        <a
                            className="menu-hover my-2 text-base font-medium text-black lg:mx-4">
                            <span>
                            Our Products
                            <svg className="w-2.5 h-2.5 mx-auto"
                                 aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 10 6">
                                <path stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="m1 1 4 4 4-4"
                                />
                            </svg>
                            </span>
                        </a>

                    </div>
                    <div
                        className="invisible absolute z-50 flex w-full flex-col bg-blue-600 py-1 px-4 text-white shadow-xl group-hover:visible rounded-lg"
                    >
                        <a
                            className="my-2 block border-b border-gray-100 py-1 font-semibold hover:text-black md:mx-2"
                        >Product One</a
                        >

                        <a
                            className="my-2 block border-b border-gray-100 py-1 font-semibold hover:text-black md:mx-2"
                        >Product Two</a
                        >
                        <a
                            className="my-2 block border-b border-gray-100 py-1 font-semibold hover:text-black md:mx-2"
                        >Product Three
                        </a>
                        <a
                            className="my-2 block border-b border-gray-100 py-1 font-semibold hover:text-black md:mx-2"
                        >Product Four
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DropDown;