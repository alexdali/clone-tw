import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import PropTypes from 'prop-types';

import { Layout } from './sidebar';
import { ErrorCatcher, LifecycleDemo } from './lifecycledemo';
import { TrickInput, EasyInput, RefInput } from './inputdemo';

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

Avatar.propTypes = {
	hash: PropTypes.string
};

const Time = ({ time }) => {
	const timeString = moment(time).fromNow();
	return (
		<span className = 'time'>
			{timeString}
		</span>
	);
};

Time.propTypes = {
	time: PropTypes.string
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

RetweetButton.propTypes = {
	count: PropTypes.number
};

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

LikeButton.propTypes = {
	count: PropTypes.number
};

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

Message.propTypes = {
	text: PropTypes.string
};

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

NameWithHandle.propTypes = {
	author: PropTypes.shape({
			name: PropTypes.string.isRequired,
			handle: PropTypes.string.isRequired
		}).isRequired
};

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

function IconButton({ children }) {
	return (
		<button>
			<i className="target-icon"/>
			{children}
		</button>
	);
}

function WarningButton({ children }) {
	return (
		<button type="button" className="btn btn-danger">
				{children}
		</button>
	);
}

function ManyButtons({ children }) {
	return <div  class="alert alert-primary" role="alert">
			React.Children.only({children})
		</div>
}

const Tweet = ({ tweet }) => {
	const { gravatar, message, author, timestamp, retweets, likes, onClickCount } = tweet;
	return (
		<>
		<div className="tweet">
			<Avatar hash = {gravatar}/>
			<div className = 'content'>
				<NameWithHandle author = {author}/><Time time = {timestamp}/>
				<Message text = {message}/>
				<div className = 'buttons'>
					<ReplyButton />
					<RetweetButton count = {retweets}/>
					<LikeButton onClick = {onClickCount} count = {likes}/>
					<MoreOptionsButton />
				</div>
			</div>
		</div>
		</>
	);
}

Tweet.propTypes = {
	tweet: PropTypes.shape({
			message: PropTypes.string,
			gravatar: PropTypes.string.isRequired,
			author: PropTypes.object.isRequired,
			likes: PropTypes.number,
			retweets: PropTypes.number,
			timestamp: PropTypes.string
		}).isRequired
};

function TweetFeed({ tweets }) {
	//const { gravatar, message, author, timestamp, retweets, likes } = tweet;
	return (
		<>
		<div className="tweets">
			{tweets.map(tweet =>(
					<Tweet key = {tweet.id} tweet = {tweet}/>
				))} 
		</div>
		<div>
			<WarningButton>
				Something has gone wrong
			</WarningButton>
		</div>
		<IconButton>Do The Thing</IconButton>
		{/*
			<div>
					<ManyButtons>
						<button type="button" class="btn btn-primary">Primary</button>
						<button type="button" class="btn btn-secondary">Secondary</button>
						<button type="button" class="btn btn-success">Success</button>
						<button type="button" class="btn btn-danger">Danger</button>
						<button type="button" class="btn btn-warning">Warning</button>
						<button type="button" class="btn btn-info">Info</button>
						<button type="button" class="btn btn-light">Light</button>
						<button type="button" class="btn btn-dark">Dark</button>
					</ManyButtons>
				</div>
				*/}
		</>
	);
}

TweetFeed.propTypes = {
	tweet: PropTypes.array.isRequired
	/// tweet: PropTypes.shape({
	// 		message: PropTypes.string,
	// 		gravatar: PropTypes.string.isRequired,
	// 		author: PropTypes.object.isRequired,
	// 		likes: PropTypes.number,
	// 		retweets: PropTypes.number,
	// 		timestamp: PropTypes.string
	// 	}).isRequired
};


var testTweet = [
	{
		id: 1,
		message: 'Something about cats.',
		gravatar: 'https://image.freepik.com/free-vector/a-boy-getting-a-cold-feet_1308-17766.jpg',
		author: {
			handle: 'catMark',
			name: 'IAMA Cat Person'
			},
		likes: 5,
		retweets: 2,
		timestamp: '2016-07-30 21:24:37'
	},
	{
		id: 2,
		message: 'Something about cats.',
		gravatar: 'https://image.freepik.com/free-vector/a-boy-getting-a-cold-feet_1308-17766.jpg',
		author: {
			handle: 'catMark',
			name: 'IAMA Cat Person'
			},
		likes: 5,
		retweets: 2,
		timestamp: '2016-07-30 21:24:37'
	},
	{
		id: 3,
		message: 'Something about cats.',
		gravatar: 'https://image.freepik.com/free-vector/a-boy-getting-a-cold-feet_1308-17766.jpg',
		author: {
			handle: 'catMark',
			name: 'IAMA Cat Person'
			},
		likes: 5,
		retweets: 2,
		timestamp: '2016-07-30 21:24:37'
	},
	{
		id: 4,
		message: 'Something about cats.',
		gravatar: 'https://image.freepik.com/free-vector/a-boy-getting-a-cold-feet_1308-17766.jpg',
		author: {
			handle: 'catMark',
			name: 'IAMA Cat Person'
			},
		likes: 5,
		retweets: 2,
		timestamp: '2016-07-30 21:24:37'
	},
	{
		id: 5,
		message: 'Something about cats.',
		gravatar: 'https://image.freepik.com/free-vector/a-boy-getting-a-cold-feet_1308-17766.jpg',
		author: {
			handle: 'catMark',
			name: 'IAMA Cat Person'
			},
		likes: 5,
		retweets: 2,
		timestamp: '2016-07-30 21:24:37'
	}
];


const AppInput = () => (
		<div>
			<TrickInput/>
			<EasyInput/>
			<RefInput/>
		</div>
);




/// ReactDOM.render(
// <ErrorCatcher>
// 	<LifecycleDemo/>
// </ErrorCatcher>, document.querySelector('#root'));


///ReactDOM.render(<AppInput/>, document.querySelector('#root'));

ReactDOM.render(<TweetFeed tweets = {testTweet}/>,document.querySelector('#root'));