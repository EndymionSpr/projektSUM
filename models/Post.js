const db = require("../config/db");

class Post {

    static findAllUser_id() {
        let sql = "SELECT user_id from Users;";
    
        return db.execute(sql);
      }

}

module.exports = Post;