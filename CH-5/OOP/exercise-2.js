class User {
    constructor(username, email, password) {
      this.username = username;
      this.email = email;
      this.password = password;
      this.posts = [];
    }
  
    createPost(content) {
      const post = new Post(this, content);
      this.posts.push(post);
      return post;
    }
  }
  
  class Post {
    constructor(author, content) {
      this.author = author;
      this.content = content;
      this.likes = 0;
    }
  
    like() {
      this.likes++;
    }
  }
  
  class SocialMedia {
    constructor() {
      this.users = [];
      this.posts = [];
    }
  
    createUser(username, email, password) {
      const user = new User(username, email, password);
      this.users.push(user);
      return user;
    }
  
    createPost(user, content) {
      const post = user.createPost(content);
      this.posts.push(post);
      return post;
    }
  
    likePost(post) {
      post.like();
    }
  
    displayPosts() {
      this.posts.forEach(post => {
        console.log(`Author: ${post.author.username}, Content: ${post.content}, Likes: ${post.likes}`);
      });
    }
  }
  
  // Example usage:
  const socialMedia = new SocialMedia();
  
  // Creating users
  const user1 = socialMedia.createUser('user1', 'user1@example.com', 'password1');
  const user2 = socialMedia.createUser('user2', 'user2@example.com', 'password2');
  
  // Creating posts
  const post1 = socialMedia.createPost(user1, 'Hello world!');
  const post2 = socialMedia.createPost(user2, 'This is my first post.');
  
  // Liking posts
  socialMedia.likePost(post1);
  socialMedia.likePost(post2);
  socialMedia.likePost(post2);
  
  // Displaying posts
  socialMedia.displayPosts();
  