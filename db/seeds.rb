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
video1 = Video.create(title: "Friends Reboot Video", description:"first video of the site", creator_id: user3.id)
video2 = Video.create(title: "Koi Video", description:"A Video about a Koi Pond with Koi Fish", creator_id: user3.id)
video3 = Video.create(title: "Caminandes", description:"testing videos and their descriptions", creator_id: user2.id)
# Attachments to Videos
friendsVideo = open("https://me-cube-seeds.s3.us-east-2.amazonaws.com/FriendsReboot.mp4")
koiVideo = open("https://me-cube-seeds.s3.us-east-2.amazonaws.com/Source_out.mp4")
caminandes = open("https://me-cube-seeds.s3.us-east-2.amazonaws.com/caminandes-1-llama-drama-av1-opus-480p.webm")

friendsThumbnail = open("https://me-cube-seeds.s3.us-east-2.amazonaws.com/FriendsRebootThumbnail.png")
koiThumbnail = open("https://me-cube-seeds.s3.us-east-2.amazonaws.com/KoiThumbnail.png")
caminandesThumbnail = open("https://me-cube-seeds.s3.us-east-2.amazonaws.com/CaminandesThumbnail.png")

video1.video.attach(io: friendsVideo, filename: "friends-video-1")
video1.thumbnail.attach(io: friendsThumbnail, filename: "friends-thumbnail-1")

video2.video.attach(io: koiVideo, filename: "koi-video-2")
video2.thumbnail.attach(io: koiThumbnail, filename: "koi-thumbnail-2")

video3.video.attach(io: caminandes, filename: "caminandes-video-3")
video3.thumbnail.attach(io: caminandesThumbnail, filename: "caminandes-thumbnail-3")
# Comments on videos
comment1 = Comment.create(comment:"first comment on test site", commentable_type: "Video", commentable_id: video1.id, commenter_id: user3.id)
comment2 = Comment.create(comment:"testing more comments", commentable_type: "Video", commentable_id: video1.id, commenter_id: user3.id)
comment3 = Comment.create(comment:"we require more minerals", commentable_type: "Video", commentable_id: video2.id, commenter_id: user1.id)
# Comment responses to another comment
comment4 = Comment.create(comment:"first response to a comment", commentable_type: "Comment", commentable_id: comment1.id, commenter_id: user3.id)
comment4 = Comment.create(comment:"another response to the first comment", commentable_type: "Comment", commentable_id: comment1.id, commenter_id: user3.id)
comment5 = Comment.create(comment:"we require more vespian gas", commentable_type: "Comment", commentable_id: comment3.id, commenter_id: user2.id)
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