import { useEffect } from "react"
import useFetch from "../hooks/useFetch"

const NamePages = () => {

  const [ country, getCountry ] = useFetch()

  useEffect(() => {
    getCountry('/name/colombia')
  }, [])

  console.log(country)
  return (
    <div>NamePages</div>
  )
}

export default NamePages