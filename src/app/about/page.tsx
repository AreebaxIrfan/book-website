import React from 'react'

const page = () => {
    return (
        <div className=' bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screenabout-title m-3 p-4'>
            <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 about-container flex justify-center items-center">
                <div className="text-center about-content">
                    <h1 className="text-3xl font-serif md:text-4xl lg:text-5xl font-bold text-teal-300">About Me</h1>
                    <div className="mt-4 md:mt-6 lg:mt-8 border-b-2 border-peach w-1/2 mx-auto"></div>
                    <p className="text-lg md:text-xl lg:text-2xl p-9 leading-relaxed text-gray-300 about-paragraph hover:text-peach transition duration-300 ease-in-out m-3">
                        Welcome to my website, where I share my passion for books with fellow readers. As a book lover and solo founder, I created this platform to connect with like-minded individuals and explore the world of literature together.
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl leading-relaxed pl-9 pr-9  text-gray-300 about-paragraph hover:text-peach transition duration-300 ease-in-out m-3">
                        Through this website, I aim to build a community that celebrates the joy of reading and discovery. Whether you are a casual reader or a book enthusiast, I invite you to join me on this literary journey and explore the world of books together.
                    </p>

                    <div className="mt-4 md:mt-6 lg:mt-8 border-b-2 border-peach w-1/2 mx-auto pt-7"></div>
                </div>
            </div>
        </div>
    )
}

export default page