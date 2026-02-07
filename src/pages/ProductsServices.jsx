import React, { useState } from 'react';
import { Star, Download, ChevronRight, Check, MapPin, Hammer, Info, ChevronDown, Zap, Shield, Truck, Users } from 'lucide-react';

const ProductsServices = () => {
    const [activeTab, setActiveTab] = useState('overview');

    // Mock Data for Hardware Categories (Replaces Design)
    const hardwareCategories = [
        { name: 'Solar Panels', icon: '☀️' },
        { name: 'Batteries', icon: '🔋' },
        { name: 'Inverters', icon: '⚡' },
        { name: 'Racking', icon: '🏗️' },
        { name: 'Regulators', icon: '🔌' },
    ];

    // Mock Data for Solution Types (Replaces Colors)
    const solutionTypes = [
        { name: 'PPA Finance', color: '#005596' },
        { name: 'Leasing', color: '#004478' },
        { name: 'Cash Purchase', color: '#0a1128' },
        { name: 'Geothermal', color: '#059669' },
        { name: 'Generators', color: '#4b5563' },
    ];

    // Mock Data for Service Tiers (Replaces Glass)
    const serviceTiers = [
        { name: 'Engineering', type: 'transparent' },
        { name: 'Permitting', type: 'blur' },
        { name: 'Logistics', type: 'dark' },
        { name: 'CRM Tools', type: 'pattern' },
    ];

    return (
        <div className="bg-white font-sans text-slate-800 pb-0">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-12 lg:py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Content */}
                    <div className="lg:w-1/2">
                        <div className="flex items-center gap-2 mb-2">
                            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">Products & Services</h1>
                        </div>
                        
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex text-yellow-500">
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                            </div>
                            <span className="text-sm text-blue-600 font-medium hover:underline cursor-pointer">Partner Rated</span>
                        </div>

                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            Our core practice is to work directly with US-based and international manufacturers to procure hardware in high volume without middle-men that take a mark-up at each stage of the supply chain. If you are looking for solar panels, batteries, inverters or other materials that meet domestic content or other regulatory-driven needs at a fraction of the price, Green Raven is your solution.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://calendar.app.google/9qsvNemHcAkYwesn9" target="_blank" rel="noreferrer" className="bg-[#facc15] hover:bg-[#eab308] text-slate-900 px-8 py-3 font-bold rounded shadow-sm transition-colors flex items-center justify-center gap-2">
                                <Users size={18} />
                                Become a Partner Installer
                            </a>
                            <button className="bg-white border-2 border-[#005596] text-[#005596] hover:bg-slate-50 px-8 py-3 font-bold rounded shadow-sm transition-colors flex items-center justify-center gap-2">
                                <MapPin size={18} />
                                View Service Areas
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="lg:w-1/2">
                        <div className="bg-slate-100 rounded-lg overflow-hidden shadow-lg mb-4">
                            <img 
                                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                                alt="Solar Array and Green Energy" 
                                className="w-full h-[400px] object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-slate-100 rounded cursor-pointer border hover:border-blue-500 transition-colors">
                                    <img 
                                        src={`https://images.unsplash.com/photo-1548613053-220e3994c6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80`} 
                                        alt={`Thumbnail ${i}`} 
                                        className="w-full h-20 object-cover rounded"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Configurator Section Background (Repurposed for Service Categories) */}
            <div className="bg-slate-50 py-16 border-t border-slate-200">
                <div className="container mx-auto px-4">
                    
                    {/* Hardware Section (Was Design) */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-light text-slate-800 mb-8 border-b border-slate-300 pb-4">Hardware Procurement</h2>
                        <div className="flex gap-4 mb-6">
                            <button className="text-blue-700 font-bold border-b-2 border-blue-700 pb-1">Direct from Manufacturer</button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {hardwareCategories.map((hw) => (
                                <div key={hw.name} className="group cursor-pointer">
                                    <div className="bg-white border-2 border-blue-600 rounded-lg p-2 mb-2 shadow-md hover:shadow-lg transition-all">
                                        <div className="h-32 bg-slate-50 rounded relative overflow-hidden flex items-center justify-center text-4xl">
                                            {hw.icon}
                                        </div>
                                    </div>
                                    <p className="text-center text-sm font-medium text-blue-700">{hw.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Solutions Section (Was Color) */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-light text-slate-800 mb-8 border-b border-slate-300 pb-4">Finance & Power Solutions</h2>
                        
                        <div className="mb-8">
                            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 mb-4">Financial Products</h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                                {solutionTypes.map((sol) => (
                                    <div key={sol.name} className="flex flex-col items-center group cursor-pointer">
                                        <div 
                                            className="w-20 h-20 rounded shadow-sm mb-2 border border-slate-300 group-hover:ring-2 group-hover:ring-blue-500 transition-all"
                                            style={{ backgroundColor: sol.color }}
                                        ></div>
                                        <span className="text-xs text-center text-slate-600 font-medium">{sol.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Services Section (Was Glass) */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-light text-slate-800 mb-8 border-b border-slate-300 pb-4">Professional Services</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {serviceTiers.map((svc) => (
                                <div key={svc.name} className="flex flex-col items-center group cursor-pointer">
                                    <div className={`w-full h-24 bg-blue-100/50 border border-slate-300 rounded mb-2 flex items-center justify-center group-hover:border-blue-500 transition-all overflow-hidden relative`}>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="font-bold text-slate-400">{svc.name}</span>
                                        </div>
                                        {/* Visual styling maintained from previous code */}
                                        {svc.type === 'blur' && <div className="absolute inset-0 backdrop-blur-sm bg-white/40"></div>}
                                        {svc.type === 'dark' && <div className="absolute inset-0 bg-black/5"></div>}
                                        {svc.type === 'pattern' && <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>}
                                    </div>
                                    <span className="text-sm text-center text-slate-600 font-medium">{svc.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Specifications Table (Repurposed for Finance Details) */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-light text-slate-800 mb-8 border-b border-slate-300 pb-4">Finance Specifications</h2>
                        <div className="overflow-x-auto shadow-sm border border-slate-200 rounded-lg bg-white">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-xs">
                                    <tr>
                                        <th className="px-6 py-4 border-b">Product</th>
                                        <th className="px-6 py-4 border-b">Minimum System Size</th>
                                        <th className="px-6 py-4 border-b">Type</th>
                                        <th className="px-6 py-4 border-b">Availability</th>
                                        <th className="px-6 py-4 border-b text-center">Support</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr className="hover:bg-slate-50">
                                        <td className="px-6 py-4 font-bold text-blue-900">Commercial PPA</td>
                                        <td className="px-6 py-4">50 kW</td>
                                        <td className="px-6 py-4">Power Purchase Agreement</td>
                                        <td className="px-6 py-4">Nationwide</td>
                                        <td className="px-6 py-4 text-center text-green-600"><Check size={16} className="mx-auto" /></td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 bg-slate-50/50">
                                        <td className="px-6 py-4 font-bold text-blue-900">Residential PPA</td>
                                        <td className="px-6 py-4">Varies</td>
                                        <td className="px-6 py-4">Power Purchase Agreement</td>
                                        <td className="px-6 py-4">Select Regions</td>
                                        <td className="px-6 py-4 text-center text-green-600"><Check size={20} strokeWidth={3} className="mx-auto" /></td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="px-6 py-4 font-bold text-blue-900">Geothermal PPA</td>
                                        <td className="px-6 py-4">Custom</td>
                                        <td className="px-6 py-4">Packaged Solution</td>
                                        <td className="px-6 py-4">Nationwide</td>
                                        <td className="px-6 py-4 text-center text-green-600"><Check size={20} strokeWidth={3} className="mx-auto" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* DoorVision Section (Repurposed for Business Services) */}
                    <div className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                                <h2 className="text-3xl font-light text-slate-800 mb-4">Business Services</h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    For decades, we have cultivated partnerships with finance partners, software companies and other service providers while also consulting to develop business infrastructures.
                                </p>
                                <ul className="space-y-3 mb-8 text-slate-700">
                                    <li className="flex gap-2 items-start"><Check className="text-blue-600 shrink-0 mt-1" size={16} /> Custom solar-specific CRM or tracking software</li>
                                    <li className="flex gap-2 items-start"><Check className="text-blue-600 shrink-0 mt-1" size={16} /> Process automation and sales optimization</li>
                                    <li className="flex gap-2 items-start"><Check className="text-blue-600 shrink-0 mt-1" size={16} /> Connecting sales organizations with installation partners</li>
                                </ul>
                                <button className="bg-[#005596] text-white px-8 py-3 font-bold rounded shadow hover:bg-[#004478] self-start transition-colors">
                                    Explore Consulting
                                </button>
                            </div>
                            <div className="lg:w-1/2 bg-slate-100 min-h-[300px] relative">
                                <img 
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                                    alt="Business Consulting" 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                    <div className="bg-white/90 p-4 rounded-full shadow-lg">
                                        <Zap size={32} className="text-[#005596]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dark Features Section */}
            <div className="bg-[#0a1128] text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-1/3">
                            <h2 className="text-3xl font-light mb-6">Why Green Raven?</h2>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                We communicate and support you way beyond just being an engineering firm. We are much more than that. Does your traditional distributor offer any of the following?
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className="bg-green-600 rounded-full p-1"><Check size={12} className="text-white" /></div>
                                    <span className="font-medium text-slate-200">Domestic Content Compliant</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-green-600 rounded-full p-1"><Check size={12} className="text-white" /></div>
                                    <span className="font-medium text-slate-200">No Shipping Markups</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-green-600 rounded-full p-1"><Check size={12} className="text-white" /></div>
                                    <span className="font-medium text-slate-200">Regulatory Expertise</span>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                             {/* Feature Cards */}
                             <div className="bg-[#151f38] p-6 rounded-lg border border-slate-700">
                                <h3 className="text-xl font-medium mb-3 text-white">Permit-Ready Design</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Quick turn-around, highly accurate engineering services for commercial solar projects. We have tackled projects that the largest solar company in the world said was not possible.
                                </p>
                             </div>
                             <div className="bg-[#151f38] p-6 rounded-lg border border-slate-700">
                                <h3 className="text-xl font-medium mb-3 text-white">Generators & Geo-thermal</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    In some situations, commercial customers may not have the physical room for a traditional solar array. We provide generators and geothermal products to meet these needs.
                                </p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Downloads & Docs */}
            <div className="bg-slate-50 py-16 border-b border-slate-200">
                <div className="container mx-auto px-4">
                     <h2 className="text-2xl font-light text-slate-800 mb-8 border-b border-slate-300 pb-4">Resources & Docs</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {['PPA Terms Sheet', 'Commercial Finance Guide', 'Geo-Thermal Specs', 'Installation Partner Guide', 'Shipping Policy'].map((item) => (
                            <a href="#" key={item} className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded hover:border-blue-500 hover:shadow-md transition-all group">
                                <span className="font-medium text-slate-700 group-hover:text-blue-700">{item}</span>
                                <Download size={20} className="text-slate-400 group-hover:text-blue-600" />
                            </a>
                        ))}
                     </div>
                </div>
            </div>

            
            
            {/* Bottom CTA Banner */}
            <div className="bg-[#1e293b] py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl lg:text-3xl font-light text-white mb-8">Ready to grow your business?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                         <a href="https://calendar.app.google/9qsvNemHcAkYwesn9" target="_blank" rel="noreferrer" className="bg-white text-[#1e293b] px-10 py-4 font-bold rounded shadow hover:bg-slate-100 transition-colors uppercase tracking-wider text-sm">
                            Schedule a Call
                        </a>
                        <button className="bg-transparent border border-white text-white px-10 py-4 font-bold rounded shadow hover:bg-white/10 transition-colors uppercase tracking-wider text-sm">
                            Become a Partner
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsServices;