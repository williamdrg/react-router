import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import { useParams } from "react-router-dom"


const PerLanguage = () => {

  const params = useParams()

  const [ language, getLanguage ] = useFetch()

  useEffect(() => {
    getLanguage(`/lang/${params.language}`)
  }, [ params.language ])

  console.log(language)
  return (
    <div>PerLanguage</div>
  )
}

export default PerLanguage