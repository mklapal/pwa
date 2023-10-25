import { BaseService } from "./base_service";

export class PostService extends BaseService {
  constructor() {
    super();
    this.tableName = "Posts";
  }

  getPosts() {
    return this.connection.select({
      from: this.tableName,
    });
  }

  addPost(post) {
    return this.connection.insert({
      into: this.tableName,
      values: [post],
      return: true,
    });
  }

  /*
  getStudentById(id) {
    return this.connection.select({
      from: this.tableName,
      where: {
        id: id,
      },
    });
  }

  removeStudent(id) {
    return this.connection.remove({
      from: this.tableName,
      where: {
        id: id,
      },
    });
  }

  updateStudentById(id, updateData) {
    return this.connection.update({
      in: this.tableName,
      set: updateData,
      where: {
        id: id,
      },
    });
  }
  */
}
