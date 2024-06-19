import { useRef } from "react"
import { useNavigate } from "react-router-dom"

const loginPages = ({ setUserName }) => {


  const navigate = useNavigate()

  const textInput = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const inputValue = textInput.current.value.trim().toLowerCase()
    setUserName(inputValue)
    textInput.current.value = ''
    navigate('/home')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={textInput} type="text" />
        <button>send</button>
      </form>
    </div>
  )
}

export default loginPages