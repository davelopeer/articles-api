const { Router } = require("express");
const controllerCaller = require("./utils/controllerCaller");

const { ArticlesController } = require("./controllers/ArticleController");
const { AdminArticlesController } = require("./controllers/AdminArticleController");
const { AdminAuthorsController } = require("./controllers/AdminAuthorController");

const router = Router();

const articlesController = new ArticlesController();
const adminArticlesController = new AdminArticlesController();
const adminAuthorsController = new AdminAuthorsController();

// Defining routes
router.get("/api/articles", controllerCaller(articlesController.getArticles));
router.get("/api/articles/:id", controllerCaller(articlesController.getArticleById));

// Admin routes
router.post("/api/admin/articles", controllerCaller(adminArticlesController.create));
router.put("/api/admin/articles/:id", controllerCaller(adminArticlesController.update));
router.delete("/api/admin/articles/:id", controllerCaller(adminArticlesController.delete));

router.get("/api/admin/author", controllerCaller(adminAuthorsController.getAuthors));
router.get("/api/admin/author/:id", controllerCaller(adminAuthorsController.getAuthorById));
router.post("/api/admin/author", controllerCaller(adminAuthorsController.create));
router.put("/api/admin/author/:id", controllerCaller(adminAuthorsController.update));
router.delete("/api/admin/author/:id", controllerCaller(adminAuthorsController.delete));

// Return not found if doen'ts match any route
router.get("*", (req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

module.exports = router;