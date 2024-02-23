import React from 'react';
import { FaStar } from 'react-icons/fa'; // Ensure you have 'react-icons' installed
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Testimonials = () => {
    const reviews = [
        // Kashmir Journey
        {
            id: 1,
            author: "Raj Patel",
            text: "Kashmir was like a dream. Aagam Holidays planned everything so well. Dal Lake was so peaceful. A big thank you!",
            rating: 5,
            date: "2023-01-15",
        },
        {
            id: 2,
            author: "Anjali Desai",
            text: "Gulmarg's snow was amazing. We enjoyed a lot. Aagam Holidays made our trip very special.",
            rating: 5,
            date: "2023-02-10",
        },
        // Andaman Journey
        {
            id: 3,
            author: "Vijay Kumar",
            text: "Andaman's beaches are the best. Havelock Island was so beautiful. Thanks to Aagam Holidays for this experience.",
            rating: 5,
            date: "2023-03-22",
        },
        {
            id: 4,
            author: "Meera Shah",
            text: "Scuba diving in Andaman was a lifetime experience. Aagam Holidays arranged everything perfectly.",
            rating: 5,
            date: "2023-04-05",
        },
        // North East Journey
        {
            id: 5,
            author: "Soham Joshi",
            text: "North East's hills are breathtaking. Aagam Holidays planned a great trip for us. Very happy!",
            rating: 5,
            date: "2023-05-12",
        },
        {
            id: 6,
            author: "Neha Chauhan",
            text: "Loved the peaceful monasteries in Sikkim. Aagam Holidays did a great job. Thank you!",
            rating: 5,
            date: "2023-06-08",
        },
        // Chardham Journey
        {
            id: 7,
            author: "Dharmesh Patel",
            text: "Chardham Yatra was very spiritual. Aagam Holidays made it very easy and comfortable for us.",
            rating: 5,
            date: "2023-07-14",
        },
        {
            id: 8,
            author: "Pooja Singh",
            text: "Felt very peaceful during Chardham Yatra. Thanks to Aagam Holidays for a well-organized trip.",
            rating: 5,
            date: "2023-08-19",
        },
        // Uttarakhand Journey
        {
            id: 9,
            author: "Amit Verma",
            text: "Uttarakhand's mountains are beautiful. Had a great trekking experience. Thanks, Aagam Holidays!",
            rating: 5,
            date: "2023-09-23",
        },
        {
            id: 10,
            author: "Sunita Rao",
            text: "Enjoyed the serenity of Uttarakhand. Aagam Holidays planned a perfect getaway for us.",
            rating: 5,
            date: "2023-10-11",
        },
        // Shimla-Manali-Kasol Journey
        {
            id: 11,
            author: "Karan Desai",
            text: "Loved the snow in Manali. Kasol was so cool and relaxing. Great trip arranged by Aagam Holidays.",
            rating: 5,
            date: "2023-11-09",
        },
        {
            id: 12,
            author: "Divya Patel",
            text: "Shimla's views were stunning. Had a great time. Thanks, Aagam Holidays, for this amazing trip.",
            rating: 5,
            date: "2023-12-15",
        },
        // Kerala Journey
        {
            id: 13,
            author: "Mohit Trivedi",
            text: "Kerala's backwaters were so calming. The houseboat stay was unique. Aagam Holidays, thank you for this serene experience.",
            rating: 5,
            date: "2023-01-25",
        },
        {
            id: 14,
            author: "Priya Mehta",
            text: "The tea gardens in Munnar were a sight to behold. Loved every bit of our Kerala trip, thanks to Aagam Holidays.",
            rating: 5,
            date: "2023-02-16",
        },
        // Goa Journey
        {
            id: 15,
            author: "Suresh Patel",
            text: "Goa's beaches are fun and beautiful. Aagam Holidays planned a great holiday for us with lots of activities.",
            rating: 5,
            date: "2023-03-30",
        },
        {
            id: 16,
            author: "Kavita Joshi",
            text: "Loved the Goan vibe and the seafood. Aagam Holidays made our trip very comfortable and enjoyable.",
            rating: 5,
            date: "2023-04-20",
        },
        // Dubai Journey
        {
            id: 17,
            author: "Rahul Gupta",
            text: "Dubai was incredible! From the Burj Khalifa to the desert safari, Aagam Holidays planned it all perfectly.",
            rating: 5,
            date: "2023-05-28",
        },
        {
            id: 18,
            author: "Anita Sharma",
            text: "Shopping in Dubai was amazing. Thanks, Aagam Holidays, for a well-organized trip and great recommendations.",
            rating: 5,
            date: "2023-06-15",
        },
        // Thailand Journey
        {
            id: 19,
            author: "Vikram Singh",
            text: "Thailand's beaches are paradise. Phi Phi Island was breathtaking. Great trip arranged by Aagam Holidays.",
            rating: 5,
            date: "2023-07-22",
        },
        {
            id: 20,
            author: "Nisha Patel",
            text: "Loved the Thai culture and food. The floating market was an experience. Thank you, Aagam Holidays, for a memorable trip.",
            rating: 5,
            date: "2023-08-12",
        },
    ];

    

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.slice(0,6).map((review) => (
                        <div key={review.id} className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                 {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={`h-5 w-5 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`} />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-4">{review.text}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-semibold">{review.author}</span>
                                <span className="text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
