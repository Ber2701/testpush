import React from "react";
import PropTypes from "prop-types";
import SongList from "./SongList";

SongFeatures.propTypes = {};

function SongFeatures(props) {
	const songList = [
		{
			id: 1,
			name: "con chim sieu nhan",
			thumbnailUrl:
				"https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/e/b/4/d/eb4d2951bc52df9856f3f866a3219d12.jpg",
		},
		{
			id: 2,
			name: "con chim sieu nhan",
			thumbnailUrl:
				"https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/6/c/2/2/6c2257860cc1ede24d5b43bfd372447a.jpg",
		},
		{
			id: 3,
			name: "con chim sieu nhan",
			thumbnailUrl:
				"https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/avatars/f/3/7/3/f373b6088a9ccf34b3fb2f46e587a6b5.jpg",
		},
	];

	return (
		<div>
			<h2> ban se thich day</h2>
			<SongList songList={songList} />
		</div>
	);
}

export default SongFeatures;
