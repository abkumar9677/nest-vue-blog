import { ValidateObjectId } from 'src/shared/pipes/validate-object-id.pipes';
import { BlogService } from './blog.service';
import {
  Controller,
  Get,
  Post,
  HttpStatus,
  Res,
  Param,
  NotFoundException,
  Body,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { CreatePostDTO } from './dto/create-post.dto';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Get('posts')
  async getPosts(@Res() res) {
    const posts = await this.blogService.getPosts();
    return res.status(HttpStatus.OK).json(posts);
  }

  @Get('post/:postID')
  async getPost(@Res() res, @Param('postID', new ValidateObjectId()) postID) {
    const post = await this.blogService.getPost(postID);
    if (!post) throw new NotFoundException('Post does not exist!');
    return res.status(HttpStatus.OK).json(post);
  }

  @Post('/post')
  async addPost(@Res() res, @Body() createPostDTO: CreatePostDTO) {
    const newPost = await this.blogService.addPost(createPostDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Post has been submitted successfully!',
      post: newPost,
    });
  }

  @Put('/edit')
  async editPost(
    @Res() res,
    @Query('postID', new ValidateObjectId()) postID,
    @Body() createPostDTO: CreatePostDTO,
  ) {
    const editedPost = await this.blogService.editPost(postID, createPostDTO);
    if (!editedPost) throw new NotFoundException('Post does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Post has been successfully updated',
      post: editedPost,
    });
  }

  @Delete('/delete')
  async deletePost(
    @Res() res,
    @Query('postID', new ValidateObjectId()) postID,
  ) {
    const deletedPost = await this.blogService.deletePost(postID);
    if (!deletedPost) throw new NotFoundException('Post does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Post has been deleted!',
      post: deletedPost,
    });
  }
}
