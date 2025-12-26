import { useState, useEffect, useRef } from "react";
import {
  House,
  UserRoundSearch,
  BriefcaseBusiness,
  FolderOpenDot,
  ChevronsLeft,
  ChevronDown,
} from "lucide-react";
import {Link} from 'react-router-dom';

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <House className="inline mb-1" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <UserRoundSearch className="inline mb-1" />,
  },
  {
    name: "Work Overview",
    link: "/work",
    icon: <BriefcaseBusiness className="inline mb-1" />,
  },
  {
    name: "Projects",
    link: "#",
    icon: <FolderOpenDot className="inline mb-1" />,
  },
];

const workSubNavItems = [
  { name: "Rebirth Project", link: "/rebirth-project" },
  {
    name: "RMIT Vietnam Student Council Hanoi",
    link: "/schnoi",
  },
  { name: "Suniverse", link: "/suniverse" },
];

export default function Navbar() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  
  const pathname = window.location.pathname;
  const isActive = (link: string) =>
    pathname === link || pathname.startsWith(link + "/");
  const isProjectsActive = workSubNavItems.some((s) => isActive(s.link));

  const autoOpenedRef = useRef(false);

useEffect(() => {
  if (collapsed) {
    setProjectsOpen(false);
    return;
  }

  // chỉ auto-open 1 lần khi đang ở sub route
  if (!autoOpenedRef.current && isProjectsActive) {
    setProjectsOpen(true);
    autoOpenedRef.current = true;
  }
}, [collapsed, isProjectsActive]);

  const handleToggleProjects = () => {
    if (collapsed) {
      setCollapsed(false);
      setProjectsOpen(true);
    } else {
      setProjectsOpen((prev) => !prev);
    }
  };

  return (
    <>
    <aside
      className={`hidden md:block sticky top-0 self-start h-screen z-50 border-r transition-[width] duration-300 ease-in-out ${
        collapsed ? "w-16" : "w-72"
      }`}
    >
      {/* Toggle sidebar button */}
      <button
        type="button"
        onClick={() => setCollapsed((prev) => !prev)}
        className="w-full flex justify-between items-center p-4 border-b cursor-pointer"
      >
        <p
          className={[
            "font-bold tracking-wide whitespace-nowrap",
            "transition-all duration-300",
            collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto",
          ].join(" ")}
        >
          EVELYN
        </p>
        <ChevronsLeft
          className={`shrink-0 transition-transform duration-300 ${
            collapsed ? "" : "rotate-180"
          }`}
        />
      </button>

      <nav className="flex flex-col gap-2 p-2">
        {navItems.map((item) => {
          if (item.name === "Projects") {
            return (
              <div key={item.name}>
                {/* clickable row */}
                <button
                  type="button"
                  onClick={handleToggleProjects}
                  className="flex items-center gap-3 rounded-md px-3 py-3 w-full justify-between cursor-pointer card-hover dark:hover:shadow-[0_8px_24px_rgba(255, 253, 242, 0.25)]"
                >
                  <span className="flex items-center gap-2">
                    <span className="shrink-0">{item.icon}</span>
                    <span
                      className={`
                  whitespace-nowrap transition-all duration-300
                  ${
                    collapsed
                      ? "opacity-0 w-0 overflow-hidden"
                      : "opacity-100 w-auto"
                  }`}
                    >
                      {item.name}
                    </span>
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      projectsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* animated submenu wrapper (0fr -> 1fr) */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    projectsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  {/* must hide overflow like your CSS `> div { overflow:hidden }` */}
                  <div className="overflow-hidden">
                    <div className="mt-3 ml-4 flex flex-col gap-2">
                      {workSubNavItems.map((sub) => {
                        const subActive = isActive(sub.link);
                        
                        return (
                        <Link
                          key={sub.name}
                          to={sub.link}
                          onClick={() => setCollapsed(false)}
                          className={`hover:text-[#C52323] transition-colors ${subActive ? "text-[#C52323] font-extrabold" : "text-primary"}`}
                        >
                          {sub.name}
                        </Link>
                      )})}
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <Link
              key={item.name}
              to={item.link}
              title={collapsed ? item.name : undefined}
              className={`flex items-center gap-3 rounded-md px-3 py-3 card-hover ${
                isActive(item.link)
                  ? " text-[#C52323] font-extrabold"
                  : "text-primary"
              }`}
            >
              <span className="shrink-0">{item.icon}</span>
              {/* Label collapses */}
              <span
                className={`
                  whitespace-nowrap transition-all duration-300
                  ${
                    collapsed
                      ? "opacity-0 w-0 overflow-hidden"
                      : "opacity-100 w-auto"
                  }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>

    {/* ===== MOBILE BOTTOM NAV ( < md ) ===== */}
      <aside className="h-20 md:hidden fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur">
        <nav className="flex items-stretch justify-around px-2 py-2">
          {navItems.map((item) => {
            if (item.name === "Projects") {
              return (
                <div key={item.name} className="relative">
                  <button
                    type="button"
                    onClick={() => setProjectsOpen((p) => !p)}
                    className={[
                      "flex flex-col items-center justify-center px-4 py-2 rounded-md",
                      isProjectsActive ? "text-[#C52323] font-bold" : "text-primary",
                    ].join(" ")}
                  >
                    {item.icon}
                    <span className="text-[11px] mt-1">Projects</span>
                  </button>

                  {/* mobile pop-up submenu */}
                  {projectsOpen && (
                    <div className="absolute bottom-18 -left-10 -translate-x-1/2 w-64 rounded-xl border bg-background shadow-lg p-3">
                      <p className="text-xs font-semibold opacity-70 mb-2">Projects</p>
                      <div className="flex flex-col gap-2">
                        {workSubNavItems.map((sub) => {
                          const subActive = isActive(sub.link);
                          return (
                            <Link
                              key={sub.name}
                              to={sub.link}
                              onClick={() => setProjectsOpen(false)}
                              className={[
                                "rounded-md px-3 py-2 text-sm transition-colors",
                                "hover:text-[#C52323]",
                                subActive ? "text-[#C52323] font-bold" : "text-primary",
                              ].join(" ")}
                            >
                              {sub.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                to={item.link}
                className={[
                  "flex flex-col items-center justify-center px-4 py-2 rounded-md",
                  isActive(item.link) ? "text-[#C52323] font-bold" : "text-primary",
                ].join(" ")}
              >
                {item.icon}
                <span className="text-[11px] mt-1">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
      </>
  );
}
