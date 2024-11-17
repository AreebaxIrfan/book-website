"use client";
import Image from "next/image";
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
type Book = {
    id: number;
    title: string;
    author: string;
    image: string;
    available: boolean;
};


const CreateBook = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const router = useRouter
    const [newBook, setNewBook] = useState<{
        title: string;
        author: string;
        image: string | File;
        available: boolean;
    }>({
        title: "",
        author: "",
        image: "",
        available: true,
    });
    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const res = await fetch("/api/books");
            const data = await res.json();
            setBooks(data);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };


    const addBook = async () => {

        try {
            const formData = new FormData();
            formData.append("title", newBook.title);
            formData.append("author", newBook.author);
            formData.append("image", newBook.image);
            formData.append("available", newBook.available.toString());


            await fetch("/api/books", {
                method: "POST",
                body: JSON.stringify(newBook),
                headers: { "Content-Type": "application/json" },
            });


            setNewBook({ title: "", author: "", image: "", available: true });
            fetchBooks();

        } catch (error) {
            console.error("Error adding book:", error);
        }
    };

    const handleImageUpload = (
        e: React.ChangeEvent<HTMLInputElement>,
        setState: React.Dispatch<
            React.SetStateAction<{
                title: string;
                author: string;
                image: string | File;
                available: boolean;
            }>
        >
    ) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setState((prev) => ({ ...prev, image: reader.result as string }));
            };
            reader.readAsDataURL(file); // Convert the file to a base64 string
        }
    };
    return (
        <div>

            <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg m-12">
                <div className="my-6 flex flex-col justify-center items-center w-full">
                    <h2 className="text-3xl font-serif font-extrabold text-teal-300 mb-6">Add a New Book</h2>

                    <input
                        type="file"
                        onChange={(e) => handleImageUpload(e, setNewBook)}
                        className="md:w-[50%] w-full p-3 my-4 bg-gray-800 border border-gray-600 rounded-lg shadow-sm text-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />

                    <input
                        type="text"
                        placeholder="Title"
                        value={newBook.title}
                        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                        className="md:w-[50%] w-full py-2 px-4 mt-2 bg-gray-800 text-teal-200 rounded-lg border border-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-teal-400"
                    />

                    <input
                        type="text"
                        placeholder="Author"
                        value={newBook.author}
                        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                        className="md:w-[50%] w-full py-2 px-4 mt-4 bg-gray-800 text-teal-200 rounded-lg border border-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-teal-400"
                    />

                    <button
                        className="mt-6 bg-gradient-to-r from-teal-500 to-teal-700 text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:from-teal-600 hover:to-teal-800 transition-all md:w-[40%] w-[90%] text-center"
                        onClick={addBook}
                    >
                        Add Book
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CreateBook