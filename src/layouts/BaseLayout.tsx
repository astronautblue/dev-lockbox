import { ReactNode } from 'react'
import { Typography } from '@material-tailwind/react'

import { SITE } from '../routes/index'

interface BaseLayoutProps {
  title: string
  children?: ReactNode
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ title, children }) => {
  return (
    <div className='mx-auto max-w-3xl text-center'>
      {/* <Typography variant='h1'>{title}</Typography>
      <Typography variant='h3' className='font-medium'>
        Hey there! This is <span className='text-accent'>{SITE.title}</span>, and it's really cool! 🎉
      </Typography>
      <Typography variant='lead' className='font-light opacity-70'>
        {SITE.description}
      </Typography> */}
      {children} CHILDREN
    </div>
  )
}

export default BaseLayout
