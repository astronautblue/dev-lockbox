import { useCallback, useState, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Spinner } from '@material-tailwind/react'

import { SITE } from './routes/index'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Docs = lazy(() => import('./pages/Docs'))

import MetaTags from './utils/MetaTags'

import Header from './components/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'

const App: React.FC = () => {
  const [open, setOpen] = useState<number>(0)
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

  const handleOpen = useCallback((value: number) => {
    setOpen(prevOpen => (prevOpen === value ? 0 : value))
  }, [])

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen(prevIsDrawerOpen => !prevIsDrawerOpen)
  }, [])

  return (
    <>
      <MetaTags
        title={SITE.title}
        description={SITE.description}
      />
      <Router>
        <Header
          isDrawerOpen={isDrawerOpen}
          toggleDrawer={toggleDrawer}
        />
        <Sidebar
          isDrawerOpen={isDrawerOpen}
          toggleDrawer={toggleDrawer}
          open={open}
          handleOpen={handleOpen}
        />
        <main>
          <Suspense fallback={<Spinner className="spinner spinner-center" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="docs" element={<Docs />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
