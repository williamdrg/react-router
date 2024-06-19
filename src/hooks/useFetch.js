import axios from "axios"
import { useState } from "react"

const urlBase = 'https://restcountries.com/v3.1'

const useFetch = () => {
 const [ apiData, setApiData ] = useState()
 const [ hasError, setHasError ] = useState(false)

 const getApi = (path) => {
  const url = `${urlBase}${path}`
  axios.get(url)
    .then( res => {
      setHasError(false)
      setApiData(res.data)
    })
    .catch(err => {
      setHasError(true)
      console.error(err)
    })
 }

 return [ apiData, getApi, hasError ]
}

export default useFetch