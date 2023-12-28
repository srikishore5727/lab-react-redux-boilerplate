import { createStore } from "redux"
import reducer from "./Reducer"
import { decrementLike, incrementLike } from "../component/Action"
import { useState } from "react"
import '../App.css'


const store = createStore(reducer)


function LikeCounter() {

    const [like,setLike] = useState(0)

    store.subscribe(() => setLike(store.getState().like))



  return (
    <div className="container">
      <div className="likes">Likes: {like}</div>
      <button onClick={() => store.dispatch(incrementLike())}>Like</button>
      <button onClick={() => store.dispatch(decrementLike())}>Unlike</button>
    </div>
  )
}

export default LikeCounter