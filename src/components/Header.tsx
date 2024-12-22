import { IconButton, Typography, Navbar } from '@material-tailwind/react'
import { Bars3Icon } from '@heroicons/react/24/solid'

import { SITE } from '../routes/index'

import '../assets/styles/components/header.css'

interface HeaderProps {
  toggleDrawer: () => void
  isDrawerOpen: boolean
}

const Header: React.FC<HeaderProps> = ({ toggleDrawer, isDrawerOpen }) => (
  <header className="header-container">
    <Navbar className="navbar-custom">
      <div className="navbar-items">
        <IconButton
          variant="text"
          className="icon-button"
          ripple={false}
          size="lg"
          onClick={toggleDrawer}
        >
          <Bars3Icon className="size-6 stroke-2" />
          <span className="sr-only">Mostrar Sidebar</span>
        </IconButton>
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="title-link"
        >
          {SITE.title}
        </Typography>
      </div>
    </Navbar>
  </header>
)

export default Header
