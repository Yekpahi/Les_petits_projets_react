import React, { useState } from 'react'

function Input(props) {
    const [liked, setLiked] = useState(false)
    /*const handleChecked = (e) => {
        setLiked(e.target.checked)
  }*/
    return (
    <div>
<label>
    <input 
    type='checkbox'
    checked = {liked}
    onChange={(e) => setLiked(e.target.checked)}
    />
    {props.label}
</label>
<h1>{liked ? "You are liked my page" : "Please Like this page"}</h1>
    </div>
  )
}

export default Input