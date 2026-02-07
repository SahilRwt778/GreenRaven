import {
  Factory,
  Users,
  CreditCard,
  FileCheck,
  Wrench,
  Leaf,
  Briefcase,
} from "lucide-react";

const items = [
  { title: "Sales Organizations", icon: Briefcase, color: "bg-blue-500", pos: "top-0 left-1/2 -translate-x-1/2" },
  { title: "Finance Tools", icon: CreditCard, color: "bg-indigo-500", pos: "top-1/4 right-0" },
  { title: "Permit-Ready Engineering", icon: FileCheck, color: "bg-emerald-500", pos: "bottom-1/4 right-0" },
  { title: "Installers", icon: Wrench, color: "bg-orange-500", pos: "bottom-0 left-1/2 -translate-x-1/2" },
  { title: "Prevailing Wage Consulting", icon: Users, color: "bg-purple-500", pos: "bottom-1/4 left-0" },
  { title: "Hardware Direct", icon: Factory, color: "bg-slate-600", pos: "top-1/4 left-0" },
  { title: "Geothermal Solutions", icon: Leaf, color: "bg-green-600", pos: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden" },
];

export default function EcosystemHub() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            The Green Raven Ecosystem
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Connecting sales, hardware, installers, engineering, and financing
            into one unified platform.
          </p>
        </div>

        {/* DESKTOP RADIAL HUB */}
        <div className="relative hidden md:flex items-center justify-center h-[520px]">
          {/* Center */}
          <div className="z-10 h-40 w-40 rounded-full bg-slate-900 text-white flex flex-col items-center justify-center shadow-xl">
            <span className="text-lg font-semibold">Green Raven</span>
            <span className="text-xs text-slate-300">Project Hub</span>
          </div>

          {/* Orbit items */}
          {items.map((item, i) => (
            <div
              key={i}
              className={`absolute ${item.pos} flex flex-col items-center text-center w-32`}
            >
              <div
                className={`h-14 w-14 rounded-full ${item.color} flex items-center justify-center text-white shadow-lg`}
              >
                <item.icon className="h-6 w-6" />
              </div>
              <p className="mt-2 text-sm font-medium text-slate-700">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* MOBILE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 shadow-sm border flex gap-4 items-center"
            >
              <div
                className={`h-12 w-12 rounded-lg ${item.color} flex items-center justify-center text-white`}
              >
                <item.icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium text-slate-800">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
