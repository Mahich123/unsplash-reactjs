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
			<img src={image + "?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max"} alt={i} />
	 		// regular: ?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max
			// small: ?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max
			// thumb: ?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max
		))
	)
}

ReactDOM.render(<Home />, document.getElementById("root"))
