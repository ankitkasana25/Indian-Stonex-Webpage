import React from 'react'
import { Card, CardContent } from "../components/ui/card";

const testimonials = [
    {
        id: 1,
        name: "Sonal Jaiswal",
        location: "Jaipur",
        message:
            "I’m so glad we came across Indian Stonex Stone Arts. This temple has truly become the soul of our home.",
        image:
            "/project1.jpg",
    },
    {
        id: 2,
        name: "Naresh Moolchandani",
        location: "Jaipur",
        message:
            "Flew down from Dubai to select murtis for my New Home. Absolutely loved the collection and the hospitality of the team.",
        image:
            "/project2.jpg",
    },
    {
        id: 3,
        name: "Violet",
        location: "Jaipur",
        message:
            "It was a beautiful surprise visiting the store. It is beautifully curated with the collections. Please visit this place when in Jaipur.",
        image:
            "/project3.jpg",
    },
    {
        id: 4,
        name: "Yogesh Soni",
        location: "Jhunjhunu, Rajasthan",
        message: "Now we make time for our Temple Everyday.",
        image:
            "/project4.jpg",
    },
    {
        id: 5,
        name: "Rahul",
        location: "Jaipur",
        message: "Now we make time for our Temple Everyday.",
        image:
            "/project5.jpg",
    },
];

const TestimonialSection = () => {
    return (
        <div className="container mx-auto px-8 sm:px-4 py-3 sm:py-12 pb-10 sm:pb-0">

            {/* Section Heading */}
            <div className="text-center mb-6 sm:mb-10">
                <h2 className="text-2xl sm:text-4xl font-[500] text-gray-900">
                    What Our Clients Say
                </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {testimonials.map((testimonial) => (
                    <Card
                        key={testimonial.id}
                        className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 p-0 hover:cursor-pointer gap-2 border-0 border-b-3 border-theme"
                    >
                        {/* Image */}
                        <div className="relative w-full h-56 overflow-hidden">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                fill
                                className="object-fit h-full w-full transition-transform duration-500 transform hover:scale-110"
                            />
                        </div>

                        {/* Content */}
                        <CardContent className="p-2 flex flex-col gap-3">
                            
                            <div className="flex flex-col">
                                <h3 className='text-sm font-semibold text-gray-900 uppercase tracking-wide'>{testimonial.name}</h3>
                                <span className='text-xs text-gray-500'>{testimonial.location}</span>
                            </div>

                            <p className="text-sm italic text-gray-600 mb-3">
                                "{testimonial.message}"
                            </p>

                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default TestimonialSection