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
			<a ref="nofollow" target="_blank" href={image}>{image}</a>
		))
	)
}

ReactDOM.render(<Home />, document.getElementById("root"))