import React from "react";
import Slick from "components/Slick"
import { fetchStrategy } from "store-helpers/Strategy";


export default class SomePage extends React.Component {
	static getProps(stores, params) {
		var  strategy = fetchStrategy(stores, "54d0820c5b2594cb201fea10");
		return {
			item: strategy,
			id: params
		};
	}
	render() {
		var {id, item} = this.props;
		var photos = {
			list: item.photos
		};
		return <div>
			<h2>{item.title}</h2>
			<audio src={item.soundStory} controls="controls" ></audio>
			<p>
				<span>来自:&nbsp </span>
				<span>{item.owner}</span>
			</p>
			<div className="text" dangerouslySetInnerHTML={{__html: item.description}}/>
			<div className="photoWorks">
					item.photos.length ? <Slick list={item.photos}></Slick> : <div></div>;
			</div>
			<p>This is just some page... (loaded on demand) </p>
			<p>{item}</p>
		</div>;
	}
}
