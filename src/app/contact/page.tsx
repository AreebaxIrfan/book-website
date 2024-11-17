import React from 'react'


const page = () => {
    return (
        <div className="flex justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screenabout-title m-6">
            <div className="flex flex-col justify-center items-center max-w-md p-16  rounded shadow-2xl ">
                <h1 className="text-4xl text-teal-300 font-serif font-bold mb-2 text-center m-4 ">Contact Us</h1>
                <div className="mt-4 md:mt-6 lg:mt-8 border-b-2 mb-3 border-peach w-1/2 mx-auto"></div>
                <form className="mb-4">
                    <div className="form-group mb-4">
                        <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2 text-center">Name:</label>
                        <input type="text" id="name" name="name" required className="appearance-none block w-full bg-gray-200 
                  text-gray-300 border border-peach rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white 
                        focus:ring-2 focus:ring-peach focus:ring-opacity-50" />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2 text-center">Email:</label>
                        <input type="email" id="email" name="email" required className="appearance-none block w-full bg-gray-200 
                  text-gray-800 border border-peach rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white 
                        focus:ring-2 focus:ring-peach focus:ring-opacity-50" />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2 text-center">Message:</label>
                        <textarea id="message" name="message" required className="appearance-none block w-full bg-gray-200 
                  text-gray-800 border border-peach rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white 
                        focus:ring-2 focus:ring-peach focus:ring-opacity-50"></textarea>

                      
                    </div>
                    <button type="submit"  className="flex justify-center items-center bg-gray-700      hover:bg-blue-700 text-teal-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
                </form>
            </div>
        </div>
    )
}

export default page