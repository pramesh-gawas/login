const router = require("express").Router();
const {
  createUser,
  updateUser,
  fetchALL,
  deleteUser,
  CreateLog,
  createPost,
} = require("./controllers");

router.get("/list", fetchALL);
router.put("/update/:id", updateUser);
router.post("/register", createUser);
router.post("/login", CreateLog);
router.delete("/:id", deleteUser);
router.post("/post", createPost);
module.exports = router;
