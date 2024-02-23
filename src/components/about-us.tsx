import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mb-12 text-center  p-10 rounded-xl shadow-xl">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                        <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                            About Us
                        </span>
                    </h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                            Embark on a journey with us, where dreams of perfect getaways turn into reality. At
                            <span className="font-semibold text-indigo-600"> Aagam Holidays</span>, we weave the essence of discovery and joy into every unique travel itinerary we create. Born from a passion for exploration and a yearning to understand our planet's vast beauty, we've been your compass for navigating the world's most enchanting destinations since 2020.
                        </p>
                        <p>
                            Our story began with a simple but powerful belief: travel should be awe-inspiring, exhilarating, and, above all, personal. We're a team of seasoned voyagers, culture enthusiasts, and nature seekers who share a collective vision – to craft not just holidays, but holistic experiences. From the cobblestone streets of Europe to the azure waters of the Caribbean, our mission is to unfold the world's wonders to the curious and the brave.
                        </p>
                        <p>
                            What sets us apart is our commitment to personalized adventures. Whether you're seeking solitude on remote isles or the thrill of urban escapades, our bespoke itineraries are tailored to your rhythm. Sustainability isn't just a buzzword for us; it's a pledge to nurture the enchanting locales we visit, ensuring they remain vibrant for generations of travelers to come.
                        </p>
                        <p>
                            Join us, as we chart a course to the extraordinary, curating journeys that transcend the traditional, and adventures that leave indelible marks on your soul. This isn't just any travel; this is
                            <span className="font-semibold text-indigo-600"> Aagam Holidays</span> – where every mile is a memory, and every destination a new chapter of your story.
                        </p>
                    </div>
                </div>


                <div className="py-16 bg-white">
                    <div className="container mx-auto px-6 lg:px-8">
                        <h3 className="text-3xl text-gray-800 font-semibold text-center mb-10">Our Mission</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Explore the World */}
                            <div className="flex flex-col items-center">
                                <Image src="/images/mission-1.webp" alt="Explore the World" width={100} height={100} />
                                <h4 className="mt-4 text-lg font-semibold">Explore the World</h4>
                                <p className="text-center mt-2 text-gray-600">
                                    Discover the most hidden gems across the globe. We believe in expanding your horizons and experiencing authenticity everywhere you go.
                                </p>
                            </div>
                            {/* Unforgettable Journeys */}
                            <div className="flex flex-col items-center">
                                <Image src="/images/mission-2.webp" alt="Unforgettable Journeys" width={100} height={100} />
                                <h4 className="mt-4 text-lg font-semibold">Unforgettable Journeys</h4>
                                <p className="text-center mt-2 text-gray-600">
                                    Crafting memorable and unique travel experiences. Each trip is more than a vacation – it's a chance to gain a new perspective and create lifelong memories.
                                </p>
                            </div>
                            {/* Sustainable Travel */}
                            <div className="flex flex-col items-center">
                                <Image src="/images/mission-3.webp" alt="Sustainable Travel" width={100} height={100} />
                                <h4 className="mt-4 text-lg font-semibold">Sustainable Travel</h4>
                                <p className="text-center mt-2 text-gray-600">
                                    Committed to responsible tourism. Travel with us means supporting local communities and preserving the natural beauty of destinations.
                                </p>
                            </div>
                            {/* Exceptional Service */}
                            <div className="flex flex-col items-center">
                                <Image src="/images/mission-3.webp" alt="Exceptional Service" width={100} height={100} />
                                <h4 className="mt-4 text-lg font-semibold">Exceptional Service</h4>
                                <p className="text-center mt-2 text-gray-600">
                                    From the first call to the last flight home, our travel experts are there for you, ensuring your trip runs smoothly, safely, and stress-free.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="mb-12 mt-12">
                    <h3 className="text-3xl text-gray-800 font-semibold text-center mb-6">Meet Our Leaders</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Array.from({ length: 4 }, (_, i) => (
                            <div key={i} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-center">
                                <div className="mb-4">
                                    <Image
                                        src="/placeholder-profile.png"
                                        alt="Leader"
                                        width={100}
                                        height={100}
                                        className="rounded-full mx-auto"
                                    />
                                </div>
                                <h4 className="text-xl text-gray-800 font-semibold">Jonathan Doe</h4>
                                <p className="text-gray-600">CEO & Founder</p>
                                <p className="mt-4 text-gray-500">Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                            </div>
                        ))}
                    </div>
                </div> */}


            </div>
        </div>
    );
};

export default AboutUs;
