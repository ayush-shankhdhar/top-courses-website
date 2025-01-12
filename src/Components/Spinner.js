import React from 'react'
import './Spiner.css'

const Spinner = () => {
  return (
	<div >
		<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
		<p>Loading...</p>
	</div>
  )
}

export default Spinner
