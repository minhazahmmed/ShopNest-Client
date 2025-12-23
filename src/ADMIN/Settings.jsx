import React from 'react';

const Settings = () => {
    return (
        <div className="max-w-2xl bg-white p-10 rounded-3xl border border-gray-100 shadow-sm animate-in fade-in duration-500">
            <h2 className="text-2xl font-black mb-8 text-gray-800">Admin Settings</h2>
            <div className="space-y-6">
                <div className="flex items-center gap-6 pb-6 border-b border-gray-50">
                    <div className="w-20 h-20 bg-green-100 rounded-3xl"></div>
                    <div>
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-xs mb-2">Change Avatar</button>
                        <p className="text-xs text-gray-400 font-bold uppercase">Max size 2MB (JPG, PNG)</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-black text-gray-400 uppercase ml-1">Admin Name</label>
                        <input type="text" defaultValue="ShopNest Admin" className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-green-500 font-bold" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-black text-gray-400 uppercase ml-1">Contact Phone</label>
                        <input type="text" defaultValue="+880123456789" className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-green-500 font-bold" />
                    </div>
                </div>
                <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black hover:bg-black transition-all">Save Changes</button>
            </div>
        </div>
    );
};
export default Settings;