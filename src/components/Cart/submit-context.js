import React from 'react'

const SubmitContext = React.createContext({
  isSubmitting: false,
  didSubmit: false
})

export default SubmitContext