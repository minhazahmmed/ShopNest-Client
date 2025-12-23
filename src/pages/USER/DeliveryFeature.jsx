import React from "react";
import { motion } from "framer-motion";
import { Star, Truck, MapPin, Clock, CheckCircle2 } from "lucide-react";

const DeliveryHighlight = () => {
  return (
    <div className="py-12 bg-white">
      {/* মূল কন্টেইনার */}
      <div className="flex flex-col lg:flex-row items-center gap-12 bg-green-50/50 rounded-[40px] p-8 md:p-12 border border-green-100 shadow-sm overflow-hidden relative">
        
        {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-green-200/20 rounded-full blur-3xl"></div>

        {/* বাম পাশ: ইমেজ কন্টেইনার (এটিকে ছোট করা হয়েছে) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-2/5 flex justify-center relative" // lg:w-2/5 দিয়ে ছোট করা হয়েছে
        >
          <div className="relative max-w-sm"> {/* max-w-sm দিয়ে ইমেজের উইডথ কন্ট্রোল করা হয়েছে */}
            <img 
              src="https://img.freepik.com/free-vector/delivery-service-with-mask-concept_23-2148505104.jpg" 
              alt="Fast Delivery" 
              className="rounded-[30px] shadow-xl w-full h-72 md:h-80 object-cover" // h-80 দিয়ে হাইট ফিক্স করা হয়েছে
            />
            
            {/* ইমেজ এর উপর ছোট ভাসমান কার্ড */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-green-100 hidden md:flex items-center gap-3"
            >
              <div className="bg-orange-500 p-2 rounded-full text-white">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase">Fastest</p>
                <p className="text-sm font-black text-gray-800 tracking-tight">Under 60 Mins</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ডান পাশ: টেক্সট কন্টেন্ট */}
        <div className="w-full lg:w-3/5 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-green-900 leading-tight">
              Fastest Delivery in <span className="text-green-600">Your City!</span>
            </h2>
            <p className="text-gray-600 text-base mt-3 font-medium leading-relaxed">
              আমরা চট্টগ্রামের প্রধান এলাকাগুলোতে সরাসরি আপনাদের দরজায় ফ্রেশ গ্রোসারি পৌঁছে দিচ্ছি। আপনার সময় আমাদের কাছে মূল্যবান।
            </p>
          </motion.div>

          {/* ফিচার গ্রিড */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            {[
              { icon: <MapPin className="text-orange-500" />, text: "Chittagong City" },
              { icon: <Truck className="text-green-600" />, text: "Free over ৳500" },
              { icon: <CheckCircle2 className="text-blue-500" />, text: "Order Tracking" },
              { icon: <Star className="text-yellow-500 fill-yellow-500" />, text: "Safe Packaging" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/80 p-3 rounded-xl border border-green-50 shadow-sm">
                {item.icon}
                <span className="font-bold text-sm text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 bg-green-600 text-white px-8 py-3.5 rounded-xl font-bold text-md shadow-md hover:bg-green-700 transition-all flex items-center gap-2"
          >
            Check Service Areas <Truck size={20} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryHighlight;