import React from 'react';
import { User, Mail, ShieldCheck } from 'lucide-react';

const usersData = [
    { id: 1, name: "Admin ShopNest", email: "adminshopnest@gmail.com", role: "Admin", joinDate: "10 Oct 2025" },
    { id: 2, name: "Ariful Islam", email: "arif@gmail.com", role: "User", joinDate: "15 Dec 2025" },
    { id: 3, name: "Sadiya Afrin", email: "sadiya@yahoo.com", role: "User", joinDate: "20 Dec 2025" },
];

const AllUsers = () => {
    return (
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm animate-in fade-in duration-500">
            <h2 className="text-2xl font-black mb-6 text-gray-800">Platform Users</h2>
            <div className="grid grid-cols-1 gap-4">
                {usersData.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 rounded-2xl border border-gray-50 hover:border-green-100 transition-all">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                                <User size={24} />
                            </div>
                            <div>
                                <h4 className="font-black text-gray-800">{user.name}</h4>
                                <p className="text-sm text-gray-400 flex items-center gap-1"><Mail size={12}/> {user.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className="text-right hidden md:block">
                                <p className="text-xs font-bold text-gray-300 uppercase leading-none">Joined</p>
                                <p className="text-sm font-bold text-gray-500">{user.joinDate}</p>
                            </div>
                            <span className={`flex items-center gap-1 px-4 py-1.5 rounded-xl font-black text-xs ${user.role === 'Admin' ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'}`}>
                                {user.role === 'Admin' && <ShieldCheck size={14}/>} {user.role}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default AllUsers;