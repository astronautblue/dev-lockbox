import { useEffect } from 'react'

interface MetaTagsProps {
  title: string
  description: string
}

const MetaTags: React.FC<MetaTagsProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description)
  }, [title, description])

  return null
}

export default MetaTags
