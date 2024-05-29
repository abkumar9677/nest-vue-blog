import { CreatePostDTO } from './dto/create-post.dto';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Post } from './interfaces/post.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BlogService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  async getPosts(): Promise<Post[]> {
    const posts = await this.postModel.find().exec();
    return posts;
  }

  async getPost(id: string): Promise<Post> {
    const post = await this.postModel.findById(id).exec();
    return post;
  }

  async addPost(CreatePostDTO: CreatePostDTO): Promise<Post> {
    const newPost = new this.postModel(CreatePostDTO);
    return newPost.save();
  }

  async editPost(postID, createPostDTO: CreatePostDTO): Promise<Post> {
    const editedPost = await this.postModel.findByIdAndUpdate(
      postID,
      createPostDTO,
      { new: true },
    );
    return editedPost;
  }

  async deletePost(id: string): Promise<Post> {
    const deletedPost = await this.postModel.findByIdAndDelete(id).exec();
    return deletedPost;
  }
}
