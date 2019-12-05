import { fetchService } from "./fetchService";
import { POSTS_URL } from "../shared/constants";
import Post from "../models/Post";

class PostsService {
  getAllPosts() {
    return fetchService.fetch(POSTS_URL).then(posts => {
      return posts.map(post => {
        const { id, userId, title, body } = post;
        return new Post(id, userId, title, body);
      });
    });
  }

  getSinglePost(id) {
    return fetchService.fetch(`${POSTS_URL}/${id}`).then(post => {
      const { id, userId, title, body } = post;
      return new Post(id, userId, title, body);
    });
  }
}

export const postsService = new PostsService();
