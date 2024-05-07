import { useEffect, useState } from 'react'

export const useIsInDocs = () => {
  const [isInDocs, setIsInDocs] = useState(false)

  useEffect(() => {
    const checkDocs = () => {
      setIsInDocs(!!document.querySelector('.sbdocs'))
    }

    // Handle tab switching (component mount and resize)
    checkDocs()
    window.addEventListener('resize', checkDocs)

    return () => {
      window.removeEventListener('resize', checkDocs)
    }
  }, [])

  return isInDocs
}
