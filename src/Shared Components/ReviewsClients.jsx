import React from 'react';
import { Star, User, Users, ShoppingBag, Truck, CheckCircle, Quote } from 'lucide-react';

const ReviewsClients = () => {
    const reviews = [
        {
            id: 1,
            name: "Ariful Islam",
            initial: "AI",
            rating: 5,
            comment: "The quality of the Ilish fish was outstanding! Truly fresh and delivered on time.",
            date: "2 days ago"
        },
        {
            id: 2,
            name: "Sarah Khan",
            initial: "SK",
            rating: 4,
            comment: "Very convenient service. The vegetables were organic and well-packaged. Highly recommended!",
            date: "1 week ago"
        },
        {
            id: 3,
            name: "Rakib Ahmed",
            initial: "RA",
            rating: 5,
            comment: "Found all my daily groceries in one place. Saving me a lot of time every week.",
            date: "3 days ago"
        }
    ];

    const stats = [
        { id: 1, label: "Happy Customers", value: "10K+", icon: <Users className="text-blue-600" size={28} /> },
        { id: 2, label: "Products Sold", value: "50K+", icon: <ShoppingBag className="text-green-600" size={28} /> },
        { id: 3, label: "Fast Delivery", value: "24/7", icon: <Truck className="text-orange-600" size={28} /> },
        { id: 4, label: "Quality Assurance", value: "100%", icon: <CheckCircle className="text-teal-600" size={28} /> }
    ];

    return (
        <div className="bg-gray-50 py-16 px-4">
            <div className="max-w-[1200px] mx-auto">
                
                {/* REVIEWS SECTION */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">What Our Clients Say</h2>
                    <p className="text-gray-500">Real feedback from our regular grocery shoppers</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative hover:shadow-md transition-shadow">
                            <Quote className="absolute top-4 right-4 text-green-100" size={40} />
                            
                            <div className="flex items-center gap-4 mb-4">
                                {/* Avatar using Initials */}
                                <div className="w-12 h-12 bg-green-100 text-green-700 flex items-center justify-center rounded-full font-bold text-lg">
                                    {review.initial}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 leading-none">{review.name}</h4>
                                    <span className="text-xs text-gray-400">{review.date}</span>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-orange-400 text-orange-400" />
                                ))}
                            </div>

                            <p className="text-gray-600 italic leading-relaxed">
                                "{review.comment}"
                            </p>
                        </div>
                    ))}
                </div>

                <hr className="border-gray-200 mb-16" />

                {/* STATISTICS SECTION */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    {stats.map((stat) => (
                        <div key={stat.id} className="p-6 bg-white rounded-2xl border border-gray-50 shadow-sm hover:-translate-y-1 transition-transform">
                            <div className="bg-gray-50 w-14 h-14 flex items-center justify-center rounded-2xl mx-auto mb-4">
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl font-extrabold text-gray-800 mb-1">{stat.value}</h3>
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ReviewsClients;