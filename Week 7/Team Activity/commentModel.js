export class CommentModel {
    constructor(type) {
      this.type = type;
      // get the initial list of comments out of local storage if it exists
      this.comments = readFromLS(this.type) || [];
    }
    // I decided I could combine my getAllComments, and filterCommentsByName methods into one by passing in an optional query argument
    getComments(q = null) {
      if (q === null) {
        // no query, get all comments of the type
        return this.comments;
      } else {
        // comments for a specific post...filter by name
        return this.comments.filter(el => el.name === q);
      }
    }
  
    addComment(postName, comment) {
      const newComment = {
        name: postName,
        comment: comment,
        date: new Date()
      };
      this.comments.push(newComment);
      writeToLS(this.type, this.comments);
    }
  }
  
export function writeToLS(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
}
  
export function readFromLS(key) {
    return JSON.parse(window.localStorage.getItem(key));
}