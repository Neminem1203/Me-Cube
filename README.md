# [Me Cube](http://me-cube.herokuapp.com/#/)

![Website Screenshot](https://raw.githubusercontent.com/Neminem1203/Me-Cube/master/Website%20Screenshot.png "Website Screenshot")
This is a clone of YouTube. This site allows you to view and upload videos if you're signed in.


# AWS
AWS allowed me to upload videos, thumbnails, and profile pictures. With the AWS and ActiveStorage, I was able to attach the files to the related model and retrieve the url when necessary.

# Features
## Channel
One of the features I had the most issues with was channel. I used the model to give me an array of the users videos and pass it in when getting the user from the database. I used a component that I previously made called `VideoList` and added a new conditional that when passed in an array via `this.props.filter`, we would use the array passed in return a list of react components which contains the videos thumbnails, and essential information (views not working currently).

## Video Show
The Video Show Page was the most difficult because it has a bunch of different features with some specific styling choices. I made it so the editting of the video is built in. The way we retrieved videos in Channel is also the way we retrieve comments on this page. Recommendations is just a `VideoList` with a limited width. Because it has `flex-wrap: wrap` in it's CSS, it allowed the list to be displayed vertically.

# Code
### [VideoList](https://github.com/Neminem1203/Me-Cube/blob/master/frontend/components/videos/video_list.jsx)
```javascript
if(this.props.filter === undefined){
	const random_order = Object.values(this.props.videos);
	const video_len = random_order.length;
	for(let i = 0; i < video_len; i++){
		const random_num = Math.floor(Math.random()*video_len)
		const temp = random_order[random_num];
		random_order[random_num] = random_order[i];
		random_order[i] = temp;
	}
	const theVideos = (this.props.limit) ? random_order.slice(0, this.props.limit) : random_order;
	return(
		<ul className="video-list">
			{theVideos.map(vid => <VideoThumb vid={vid} key={`video-${vid.id}`} currentVideo={this.props.currentVideo}/>)}
		</ul>
)} else {
	const videos = this.props.filter.map(vidId => {
		return <VideoThumb vid={this.props.videos[vidId]} key={`video-${vidId}`} />
	})
	return(
		<ul className="video-list">
			{videos}
		</ul>
	)
}
```
In this code, I have a bunch of different things going on. `this.props.filter` is an optional argument (Array). 

If it's defined, we would go to line 26 and render all the videos passed in (this implementation is for the channels page). 

If it's undefined, we would get all the videos inside `this.props.videos` (which is all the videos in the store) and randomly mix it up. If we are given a limit passed in via `this.props.limit` we will slice the first n elements (n being the number passed in by `this.props.limit` and then return a ul with the videos as list elements. (This feature is used for the front page)




### [VideoShow](https://github.com/Neminem1203/Me-Cube/blob/master/frontend/components/videos/video_show.jsx)
```javascript
// like and comment functionality for signed in users
let likeFnc = this.thumbAction(true);
let dislikeFnc = this.thumbAction(false);
let commentFnc = this.createComment;
if (this.props.currentUser === null){
	likeFnc = this.props.showSignup;
	dislikeFnc = this.props.showSignup;
	commentFnc = this.props.showSignup;
}
```
This is another code snippet. This may be simple, but most of my application has conditionals so I think this encapsulates most of my application and how it functions. Usually, a user like, dislike, and create a comment to a video. However, we check if they're logged in with `this.props.currentUser` which just grabs the userId of whoever is logged in. However, if `this.props.currentUser` is null, we set it so clicking any of the buttons previously mentioned would instead do `this.props.showSignup`, which displays the Signup modal.
