import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleOutlinedOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import "./ChannelRow.css";

function ChannelRow({
	image,
	channel,
	subs,
	noOfVideos,
	description,
	verified,
}) {
	return (
		<div className="channelRow">
			<Avatar className="channelRow__logo" alt={channel} src={image} />
			<div className="channelRow__text">
				<h4>
					{channel}
					{verified && <CheckCircleOutlinedOutlinedIcon />}
				</h4>
				<p>
					{subs} subscribers .{noOfVideos} videos
				</p>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ChannelRow;
