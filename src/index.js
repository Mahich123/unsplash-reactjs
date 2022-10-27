import React from "react"
import ReactDOM from "react-dom"
import React, { useState } from "react"
import unsplash from "./unsplash/unsplash.js"

function Home() {
	const [images, setImages] = useState([])

	unsplash("hello world",
		(res) => {
			setImages(res.images)
		}
	)

	return (
		images.map((image, i) => (
			<img src={image + "?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"} alt={i} />
		))
	)
}

ReactDOM.render(<Home />, document.getElementById("root"))
