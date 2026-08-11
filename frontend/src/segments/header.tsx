import { NavLink } from "react-router"
import { FaUserCircle } from "react-icons/fa"
import navLogo from "@/assets/images/logo/dwelling-logo.svg"
import { cn } from "@/lib/utils"

const NAVLINKS = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Properties',
    path: '/featured'
  },
  {
    name: 'Contact',
    path: '/contact'
  },
]

export default function Header() {
  return (
    <header className="header w-full h-0 sticky top-0 z-50">
      <nav className="nav xl:px-0 px-(--pad-margin-n)">
        <div className="navbar-container w-full max-w-7xl flex h-(--header-h) mx-auto mt-(--pad-margin-n) rounded-full glass">
          <div className="nav-logo h-full flex-1 place-self-center pl-(--pad-margin-n)">
            <NavLogo />
          </div>
          <div className="navbar flex-1 place-self-center px-2.5">
            <NavMenu />
          </div>
          <div className="user-menu flex-1 flex justify-end pr-(--pad-margin-n)">
            <UserMenu />
          </div>
        </div>
      </nav>
    </header>
  )
}

export function NavMenu() {
  return (
    <ul className="navigation sm:flex justify-center items-center hidden">
      {NAVLINKS.map(navlink => (
        <li key={navlink.name}
          className="gradient-text text-(--txt-heading-1) cursor-pointer"
        >
          <NavLink to={navlink.path}
            className={({ isActive }) =>
              cn("px-2 py-2.5 font-semibold hover:text-accent duration-500",
                isActive && "text-accent",
              )
            }
          >
            {navlink.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export function UserMenu() {
  return (
    <div className="user">
      <FaUserCircle
        color="var(--logo-color)"
        className="h-full w-8 sm:w-10 md:w-12 aspect-square place-self-end align-bottom hover:fill-(--primary-color) cursor-pointer"
      />
    </div>
  )
}

export function NavLogo() {
  return (
    <button
      className="h-full cursor-pointer"
    >
      <img
        src={navLogo}
        alt="app logo"
        className="h-full place-self-start"
      />
    </button>
  )
}