import SubmitContext from "./submit-context"

const submitContext = {
  isSubmitting: false,
  didSubmit: false
}

function SubmitProvider(props){
  return (
    <SubmitContext.Provider value={submitContext}>
      {props.children}
    </SubmitContext.Provider>
  )

}

export default SubmitProvider