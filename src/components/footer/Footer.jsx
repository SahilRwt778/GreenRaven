

import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

// Custom Pinterest Icon since it's not in standard Lucide set
const Pinterest = ({ size = 20, className }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M8 14.5c2.5 3.3 2.5 7.2 0.2 10.5" />
        <path d="M8 20c-3.3 0-6-2.7-6-6 0-3.3 2.7-6 6-6 2.2 0 4.1 1.2 5.2 3" />
        <path d="M20.5 11c1-3.2.5-6.8-1.5-9.6C17.1 1.2 13.2 0 9 0 2 0 0 5 0 10c0 2.5 1.5 5 2.5 6" />
        <path d="M12 11c0-2-1.3-3-3-3s-3 1-3 3c0 2 2 3 3 3 1.5 0 3-2 3-3Z" />
        <line x1="12" y1="11" x2="16" y2="21" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="font-sans">
            {/* Top Call-to-Action Banner */}
            <div className="bg-[#0a1128] py-12 px-4 relative overflow-hidden">
                {/* Background Pattern (Subtle dots) */}
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <div className="grid grid-cols-6 gap-2">
                        {[...Array(24)].map((_, i) => (
                            <div key={i} className="w-1 h-1 rounded-full bg-slate-400"></div>
                        ))}
                    </div>
                </div>

                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl">
                    <h2 className="text-2xl md:text-3xl text-white font-light tracking-wide text-center md:text-left">
                        Discuss your requirements with a local dealer today.
                    </h2>
                    <button className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-[#0a1128] transition-colors px-8 py-3 uppercase text-sm tracking-widest font-medium">
                        Find a dealer
                    </button>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="bg-[#050810] text-white pt-16 pb-8 border-t border-slate-800">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
                        
                        {/* Left Column: Brand & Social */}
                        <div className="lg:w-1/4 flex flex-col gap-8">
                            {/* Logo Representation */}
                            <div className="flex items-center gap-1">
                                <span className="text-4xl font-black tracking-tighter uppercase font-oswald">C.H.I.</span>
                                <div className="grid grid-cols-2 gap-0.5 ml-1">
                                    <div className="w-3 h-3 bg-red-600"></div>
                                    <div className="w-3 h-3 bg-red-600"></div>
                                    <div className="w-3 h-3 bg-red-600"></div>
                                    <div className="w-3 h-3 bg-red-600"></div>
                                </div>
                                <span className="text-[0.5rem] self-start ml-0.5">®</span>
                            </div>
                            
                            <div className="text-xs text-slate-400 -mt-6">
                                a <span className="font-bold uppercase">Nucor</span> company
                            </div>

                            <div className="text-sm text-slate-300 mt-4">
                                © C.H.I. Overhead Doors
                            </div>

                            {/* Social Icons */}
                            <div className="flex gap-4 text-slate-400">
                                <a href="#" className="hover:text-white transition-colors"><Pinterest size={20} /></a>
                                <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                                <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                                <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                                <a href="#" className="hover:text-white transition-colors"><Youtube size={20} /></a>
                                <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                            </div>
                        </div>

                        {/* Right Section: Links Columns */}
                        <div className="lg:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-8">
                            
                            {/* Column 1: RESIDENTIAL */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase">Residential</h3>
                                <ul className="flex flex-col gap-3 text-sm font-light text-slate-300">
                                    <li><a href="#" className="hover:text-white">Home</a></li>
                                    <li><a href="#" className="hover:text-white">Our collection</a></li>
                                    <li><a href="#" className="hover:text-white">Customer showcase</a></li>
                                    <li><a href="#" className="hover:text-white">Build a door</a></li>
                                </ul>
                            </div>

                            {/* Column 2: COMMERCIAL */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase">Commercial</h3>
                                <ul className="flex flex-col gap-3 text-sm font-light text-slate-300">
                                    <li><a href="#" className="hover:text-white">Home</a></li>
                                    <li><a href="#" className="hover:text-white">Our collection</a></li>
                                    <li><a href="#" className="hover:text-white">Case studies</a></li>
                                </ul>
                            </div>

                            {/* Column 3: DEALERS */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase">Dealers</h3>
                                <ul className="flex flex-col gap-3 text-sm font-light text-slate-300">
                                    <li><a href="#" className="hover:text-white">Dealer center</a></li>
                                    <li><a href="#" className="hover:text-white">Residential model search</a></li>
                                    <li><a href="#" className="hover:text-white">Commercial model search</a></li>
                                    <li><a href="#" className="hover:text-white">Windload configurator</a></li>
                                    <li><a href="#" className="hover:text-white">Become a dealer</a></li>
                                </ul>
                            </div>

                            {/* Column 4: USEFUL LINKS */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase">Useful Links</h3>
                                <ul className="flex flex-col gap-3 text-sm font-light text-slate-300">
                                    <li><a href="#" className="hover:text-white">About C.H.I.</a></li>
                                    <li><a href="#" className="hover:text-white">Architects corner</a></li>
                                    <li><a href="#" className="hover:text-white">FAQs</a></li>
                                    <li><a href="#" className="hover:text-white">Careers</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#0f1420] py-4 border-t border-slate-800">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col md:flex-row gap-4 text-xs text-slate-400 font-light">
                        <a href="#" className="hover:text-white">Privacy policy</a>
                        <span className="hidden md:inline">|</span>
                        <a href="#" className="hover:text-white">Terms & Conditions</a>
                        <span className="hidden md:inline">|</span>
                        <a href="#" className="hover:text-white">California Privacy Policy</a>
                        <span className="hidden md:inline">|</span>
                        <a href="#" className="hover:text-white">Forced Labour</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;