import { useRef } from "react"
import { useNavigate } from "react-router-dom"

const HomaPage = () => {

  const textInput = useRef()
  const textInput2 = useRef()


  const navigate = useNavigate()

  const handlerSubmit = (e) => {
    e.preventDefault()
    const inputValue = textInput.current.value.trim().toLowerCase()
    textInput.current.value = ''
    navigate(`/name/${inputValue}`)
  }

  const handlerSubmit2 = (e) => {
    e.preventDefault()
    const inputValue = textInput2.current.value.trim().toLowerCase()
    textInput2.current.value = ''
    navigate(`/language/${inputValue}`)
  }

  return (
    <section>
      <h2>Find your country</h2>
      <form onSubmit={handlerSubmit}>
        <label>Country name</label>
        <input ref={textInput} type="text" />
        <button>Search</button>
      </form>
      <form onSubmit={handlerSubmit2}>
      <label>Country language</label>
        <input ref={textInput2} type="text" />
        <button>Search</button>
      </form>
    </section>
  )
}

export default HomaPage