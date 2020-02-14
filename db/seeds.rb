# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Like.delete_all
Comment.delete_all
Video.delete_all
User.delete_all
# Users
user1 = User.create(username: "Demo", email:"demo@email.com", password: "hunter2")
user2 = User.create(username: "test2", email:"second@email.com", password: "hunter2")
user3 = User.create(username: "admin", email:"admin@admin.com", password: "hunter2")
# Videos
video1 = Video.create(title: "test video", video_url:"test_url", description:"first video of the site", creator_id: user3.id)
video2 = Video.create(title: "another video", video_url:"second_test_url", description:"testing videos and their descriptions", creator_id: user3.id)
video3 = Video.create(title: "fake video", video_url:"fake_url", description:"testing videos and their descriptions", creator_id: user2.id)
video4 = Video.create(title: "more videos", video_url:"more urls", description:"with more descriptions", creator_id: user3.id)
# Comments on videos
comment1 = Comment.create(comment:"first comment on test site", video_id:video1.id, commenter_id: user3.id)
comment2 = Comment.create(comment:"testing more comments", video_id: video1.id, commenter_id: user3.id)
comment3 = Comment.create(comment:"we require more minerals", video_id: video2.id, commenter_id: user1.id)
# Comment responses to another comment
comment4 = Comment.create(comment:"first response to a comment", response_to: comment1.id, commenter_id: user3.id)
comment5 = Comment.create(comment:"we require more vespian gas", response_to: comment1.id, commenter_id: user2.id)
# Likes on Videos
like1 = Like.create(like_dislike: true,  user_id:user2.id, likeable_type:"Video", likeable_id:video1.id)
like2 = Like.create(like_dislike: true,  user_id:user3.id, likeable_type:"Video", likeable_id:video1.id)
like3 = Like.create(like_dislike: true,  user_id:user1.id, likeable_type:"Video", likeable_id:video2.id)
like4 = Like.create(like_dislike: true,  user_id:user2.id, likeable_type:"Video", likeable_id:video2.id)
like5 = Like.create(like_dislike: false, user_id:user1.id, likeable_type:"Video", likeable_id:video3.id)
like6 = Like.create(like_dislike: false, user_id:user2.id, likeable_type:"Video", likeable_id:video3.id)
like7 = Like.create(like_dislike: false, user_id:user3.id, likeable_type:"Video", likeable_id:video3.id)
# Likes on Comments
like8 = Like.create(like_dislike:  true, user_id:user3.id, likeable_type:"Comment", likeable_id:comment1.id)
like9 = Like.create(like_dislike: false, user_id:user3.id, likeable_type:"Comment", likeable_id:comment2.id)
like10 = Like.create(like_dislike: true, user_id:user2.id, likeable_type:"Comment", likeable_id:comment2.id)
like11 = Like.create(like_dislike: true, user_id:user2.id, likeable_type:"Comment", likeable_id:comment4.id)