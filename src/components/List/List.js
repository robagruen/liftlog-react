import React from "react";

export default function List(props) {

	let listData = props.listData;
	console.log(listData)

	return (
	<ul>
		{listData.map(item => (
			<li>
				<a href={item.link}>
					{item.name}
				</a>
				{ 
					(item.name == "Bench Press") && (	
						<div>{item.categories}</div>
					)
				}
			</li>
		))}
	</ul>
	);
}