import { useEffect } from "react"
import useFetch from "../hooks/useFetch"

const LanguagePage = () => {

  const [ language, getLanguage ] = useFetch()

  useEffect(() => {
    getLanguage('/lang/spanish')
  }, [])

  console.log(language)
  return (
    <div>LanguagePage</div>
  )
}

export default LanguagePage