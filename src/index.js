import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import PropTypes from 'prop-types';

import './index.css';

function Avatar({ hash }) {
	var url = `${hash}`
	return (
		<img
		// {src="src/pictures/avatar.jpg"}
		// src="https://image.freepik.com/free-vector/moustache-man-cartoon-vector_17-1018103121.jpg"
		src={url}
		className="avatar"
		alt="avatar" />
	);
}

const Time = ({ time }) => {
	const timeString = moment(time).fromNow();
	return (
		<span className = 'time'>
			{timeString}
		</span>
	);
};

const ReplyButton = () => (
	<i className = 'fa fa-reply reply-button' />
);

/// function getRetweetCount(count) {
// 	if (count>0) {
// 		return (
// 			<span className = 'retweet-count'>
// 				{count}
// 			</span>
// 		);
// 	} else {
// 		return null;
// 	}
// }
function Count({ count }) {
	if (count>0) {
		return (
			<span className = 'retweet-count'>
				{count}
			</span>
		);
	} else {
		return null;
	}
}

const RetweetButton = ({ count }) => (
	<span className = 'tetweet-button'>
	<i className = 'fa fa-retweet' />
	{/*{getRetweetCount(count)}*/}
	<Count count = {count} />
	</span>
);

const LikeButton = ({ count }) => (
	<span className = 'like-button'>
		<i className = 'fa fa-heart' />
		{count > 0 && 
			<span className = 'like-count'>
				{count}
			</span>
		}
	</span>
);

const MoreOptionsButton = () => (
	<i className = 'fa fa-ellipsis-h more-options-button' />
);

function Message ({ text }) {
	return (
		<div className = 'message'>
			{text}
		</div>
	);
}

function NameWithHandle({ author }) {
	const { name, handle } = author;
	return (
		<span className = 'name-with-handle'>
			<span className = 'name'>{name
			}</span>
			<span className = 'handle'>@{handle}</span>
		</span>
	);
}

function Comment ({ author, message, likes }) {
	return (
		<div>
			<div className = 'author'>{author}</div>
			<div className = 'message'>{message}></div>
			<div className = 'likes'>
				{likes > 0 ? likes : 'No' } likes
			</div>
		</div>	
		);
}

Comment.propTypes = {
	author: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	likes: PropTypes.number
}

function Tweet({ tweet }) {
	const { gravatar, message, author, timestamp, retweets, likes } = tweet;
	return (
		<div className="tweet">
			<Avatar hash = {gravatar}/>
			<div className = 'content'>
				<NameWithHandle author = {author}/><Time time = {timestamp}/>
				<Message text = {message}/>
				<div className = 'buttons'>
					<ReplyButton />
					<RetweetButton count = {retweets}/>
					<LikeButton count = {likes}/>
					<MoreOptionsButton />
				</div>
			</div>
		</div>
	);
}

var testTweet = {
	message: 'Something about cats.',
	gravatar: 'https://image.freepik.com/free-vector/a-boy-getting-a-cold-feet_1308-17766.jpg',
	author: {
		handle: 'catperson',
		name: 'IAMA Cat Person'
	},
	likes: 0,
	retweets: 0,
	timestamp: '2016-07-30 21:24:37'
};

ReactDOM.render(<Tweet tweet = {testTweet}/>,
document.querySelector('#root'));