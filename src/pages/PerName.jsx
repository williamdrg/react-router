import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"

const PerName = () => {

  const params = useParams()
 
  const [ country, getCountry, hasError ] = useFetch()
console.log('parametro', params)
  useEffect(() => {
    getCountry(`/name/${params.name}`)
  }, [ params.name ])

  console.log(country)

  return (
    <div>
      {
        hasError ? 
        <h2>Sorry the {params.name} country does not exist</h2>
        :
        <article>
          <figure> 
            <img src={country?.[0].flags.svg} alt="country flag" />
          </figure>
          <h2>
          {country?.[0].name.common} 
          </h2>
        </article>
      }
      </div>
  )
}

export default PerName