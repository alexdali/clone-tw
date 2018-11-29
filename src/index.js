import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Avatar() {
	return (
		<img
		// {src="src/pictures/avatar.jpg"}
		src="https://image.freepik.com/free-vector/moustache-man-cartoon-vector_17-1018103121.jpg"
		className="avatar"
		alt="avatar" />
	);
}

const Time = () => (
	<span className = 'time'>3h ago</span>
);

const ReplyButton = () => (
	<i className = 'fa fa-reply reply-button' />
);

const RetweetButton = () => (
	<i className = 'fa fa-retweet retweet-button' />
);

const LikeButton = () => (
	<i className = 'fa fa-heart like-button' />
);

const MoreOptionsButton = () => (
	<i className = 'fa fa-ellipsis-h more-options-button' />
);

function Message() {
	return (
		<div className = 'message'>
			This is less than 140 characters.
		</div>
	);
}

function NameWithHandle() {
	return (
		<span className = 'name-with-handle'>
			<span className = 'name'>Your Name</span>
			<span className = 'handle'>@yourhandle</span>
		</span>
	);
}

function Tweet() {
	return (
		<div className="tweet">
			<Avatar />
			<div className = 'content'>
				<NameWithHandle /><Time />
				<Message />
				<div className = 'buttons'>
					<ReplyButton />
					<RetweetButton />
					<LikeButton />
					<MoreOptionsButton />
				</div>
			</div>
		</div>
	);
}

ReactDOM.render(<Tweet/>,
document.querySelector('#root'));