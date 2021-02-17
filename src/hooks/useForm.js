import { useState } from "react"

const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm)

  const handleInputChange = ({target}) => {
    setForm({
      ...form,
      [target.name]: target.value
    });
  }

  return {form, handleInputChange}
}

export {useForm}