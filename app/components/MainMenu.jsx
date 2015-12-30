import React from "react";
import { Link } from "react-router";
import ReactLogo from "elements/ReactLogo";

export default class MainMenu extends React.Component {
	render() {
		return <div>
			<ReactLogo type="svg" /> <ReactLogo type="png" /> <ReactLogo type="jpg" />
			<h2>MainMenu:</h2>
			<ul>
				<li>The <Link to="home">home</Link> page.</li>
				<li>Do something on the <Link to="todo">todo page</Link>.</li>
				<li>Switch to <Link to="some-page" params={{strategy: "55f8d86c9a6ea47915e97ad1"}}>some page</Link>.</li>
				<li>Open the chat demo: <Link to="chat" params={{room: "home"}}>Chat</Link>.</li>
				<li>Open the page that shows <Link to="readme">README.md</Link>.</li>
			</ul>
		</div>;
	}
}
