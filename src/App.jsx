import { forwardRef, useEffect, useRef } from "react"

function App() {
  useEffect(() => {
    console.log("App use effect")
  }, [])

  return (
    <div>
      <Child1 />
    </div>
  )
}

const Child1 = () => {
  const ref = useRef();

  useEffect(() => {
    console.log("Child 1 use effect")
    ref.current.focus();
  }, [])

  return (
    <div>
      <Child2 ref={ref}/>
    </div>
  )
}

const Child2 = forwardRef((_, ref) => {
  useEffect(() => {
    ref.current && console.log("Child 2 ref")
  })

  useEffect(() => {
    console.log("Child 2 use effect")
  }, [])

  return (
    <div>
      <input type="text" placeholder="Change me" />
      <button ref={ref}>Press me</button>
    </div>
  )
})

export default App

/*
Child 2 ref
Child 2 use effect
Child 1 use effect
App use effect
*/
