const { Router } = require("express");
const ArticlesController = require("./controllers/ArticleController");

const router = Router();

const articlesController = new ArticlesController();

router.get("/api/articles", articlesController.getAllArticles);
router.get("/api/articles/:id", articlesController.getArticleById);


// Return not found if doen'ts match any route
router.get("*", (req, res) => {
  res.status(404).json({
    message: "Page not found",
  });
});

module.exports = router;