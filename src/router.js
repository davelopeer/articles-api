const { Router } = require("express");
const controllerCaller = require("./utils/controllerCaller");

const ArticlesController = require("./controllers/ArticleController");
const AdminArticlesController = require("./controllers/AdminArticleController");
const AdminAuthorController = require("./controllers/AdminAuthorController");

const router = Router();

const articlesController = new ArticlesController();
const adminArticlesController = new AdminArticlesController();
const adminAuthorController = new AdminAuthorController();

// Defining routes
router.get("/api/articles", controllerCaller(articlesController.getArticles));
router.get("/api/articles/:id", controllerCaller(articlesController.getArticleById));

// Admin routes
router.post("/api/admin/articles", controllerCaller(adminArticlesController.create));
router.put("/api/admin/articles/:id", controllerCaller(adminArticlesController.update));
router.delete("/api/admin/articles/:id", controllerCaller(adminArticlesController.delete));

router.get("/api/admin/author", controllerCaller(adminAuthorController.getAuthors));
router.get("/api/admin/author/:id", controllerCaller(adminAuthorController.getAuthorById));
router.post("/api/admin/author", controllerCaller(adminAuthorController.create));
router.put("/api/admin/author/:id", controllerCaller(adminAuthorController.update));
router.delete("/api/admin/author/:id", controllerCaller(adminAuthorController.delete));

// Return not found if doen'ts match any route
router.get("*", (req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

module.exports = router;