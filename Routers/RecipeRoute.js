import express from "express";
import { createRecipe, updateRecipe ,deleteRecipe, getRecipeById, getRecipes } from "../Controllers/recipeController.js";


const router = express.Router();

router.get("/getdata", getRecipes);
router.get("/getdata/:id",getRecipeById)
router.post("/create",createRecipe)
router.put("/update/:id",updateRecipe)
router.delete("/delete/:id",deleteRecipe)

export default router;