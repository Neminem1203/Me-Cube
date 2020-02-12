# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Like.delete_all
Comment.delete_all
Video.delete_all
User.delete_all
# Users
User.create(username: "Demo", email:"demo@email.com", password: "hunter2")
User.create(username: "test2", email:"second@email.com", password: "hunter2")
User.create(username: "admin", email:"admin@admin.com", password: "hunter2")
# Videos
Video.create(title: "test video", video_url:"test_url", description:"first video of the site", creator_id: 3)
Video.create(title: "another video", video_url:"second_test_url", description:"testing videos and their descriptions", creator_id: 3)
Video.create(title: "fake video", video_url:"fake_url", description:"testing videos and their descriptions", creator_id: 2)
Video.create(title: "more videos", video_url:"more urls", description:"with more descriptions", creator_id: 3)
# Comments on videos
Comment.create(comment:"first comment on test site", video_id:1, commenter_id: 3)
Comment.create(comment:"testing more comments", video_id: 1, commenter_id: 3)
Comment.create(comment:"we require more minerals", video_id: 2, commenter_id: 1)
# Comment responses to another comment
Comment.create(comment:"first response to a comment", response_to: 1. commenter_id: 3)
Comment.create(comment:"we require more vespian gas", response_to: 4, commenter_id: 2)
# Likes on Videos
Like.create(like_dislike: true, user_id:2, likeable_type:"Video", likeable_id:1)
Like.create(like_dislike: true, user_id:3, likeable_type:"Video", likeable_id:1)
Like.create(like_dislike: true, user_id:1, likeable_type:"Video", likeable_id:2)
Like.create(like_dislike: true, user_id:2, likeable_type:"Video", likeable_id:2)
Like.create(like_dislike: false, user_id:1, likeable_type:"Video", likeable_id:3)
Like.create(like_dislike: false, user_id:2, likeable_type:"Video", likeable_id:3)
Like.create(like_dislike: false, user_id:3, likeable_type:"Video", likeable_id:3)
# Likes on Comments
Like.create(like_dislike: true, user_id:3, likeable_type:"Comment", likeable_id:1)
Like.create(like_dislike: false, user_id:3, likeable_type:"Comment", likeable_id:2)
Like.create(like_dislike: true, user_id:2, likeable_type:"Comment", likeable_id:2)
Like.create(like_dislike: true, user_id:2, likeable_type:"Comment", likeable_id:4)