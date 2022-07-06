const db = require("../config/db");

class Post {

    static findAllUser_id() {
        let sql = "SELECT user_id from Users;";
    
        return db.execute(sql);
      }
    
    static findByClass(id) {
        let sql = `SELECT connected_classes from Users where user_id= ${id};`;
        
        return db.execute(sql);
    }
}

module.exports = Post;