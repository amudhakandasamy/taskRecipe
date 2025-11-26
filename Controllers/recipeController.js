
const Recipes = [
  { id: 1, recipename: "idly", procedure: "Steam the batter", duration: 30 },
  { id: 2, recipename: "dosa", procedure: "Spread the batter and cook", duration: 20 },
  { id: 3, recipename: "pongal", procedure: "Cook rice and lentils together", duration: 25 },
  { id: 4, recipename: "puri", procedure: "Deep fry the dough", duration: 15 },
  { id: 5, recipename: "vada", procedure: "Deep fry the lentil batter", duration: 10 },
];
//get all Recipes controller
//http://localhost:5000/api/Recipe/getdata

export const getRecipes = (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "Recipes retrieved successfully", data: Recipes });
  } catch (error) {
    res
      .status(503)
      .json({ message: "Cannot retrieve the Recipes, Error in get Recipes" });
  }
};
//get single Recipe controller

//get single Recipe using id
//http://localhost:5000/api/Recipe/getdata/1

export const getRecipeById = (req, res) => {
  try {
    const RecipeId = req.params.id;
    const RecipeDetail = Recipes.find((ele) => ele.id == RecipeId);
    if (!RecipeDetail) {
      return res.status(404).json({ message: "Recipe Not Found" });
    }
    return res
      .status(200)
      .json({ message: "Recipe retrieved successfully", data: RecipeDetail });
  } catch (error) {
    res
      .status(503)
      .json({
        message: "Cannot retrieve the Recipes, Error in get Recipe by id",
      });
  }
};

// Creating a Recipe
//http://localhost:5000/api/Recipe/create

export const createRecipe = (req, res) => {
  try {
    const { recipename, procedure, duration } = req.body;
    const newRecipe = {
      id: Recipes.length + 1,
      recipename: recipename,
      procedure: procedure,
      duration: duration,
    };
    Recipes.push(newRecipe);

    res
      .status(200)
      .json({ message: "Recipe Created Successfully", data: newRecipe });
  } catch (error) {
    res.status(503).json({
      message: "Cannot create the Recipe, Error in create Recipe",
    });
  }
};

// Updating a Recipe
//http://localhost:5000/api/Recipe/update/1

export const updateRecipe = (req, res) => {
  try {
    const RecipeId = req.params.id;
    const { recipename, procedure, duration } = req.body;
    const index = Recipes.findIndex((ele) => ele.id == RecipeId);
    if (index === -1) {
      return res.status(404).json({ message: "Recipe Not Found" });
    }
    Recipes[index].recipename = recipename;
    Recipes[index].procedure = procedure;
    Recipes[index].duration = duration;
    res
      .status(200)
      .json({
        message: "Recipes Updated Successfully",
        data: Recipes[index],
      });
  } catch (error) {
    res.status(503).json({
      message: "Cannot update the Recipe, Error in update Recipe",
    });
  }
};



// Deleting a Recipe
//http://localhost:5000/api/Recipe/delete/1


export const deleteRecipe = (req, res) => {
  try {
    const RecipeId = req.params.id;
    const index = Recipes.findIndex((ele) => ele.id == RecipeId);
    if (index === -1) {
      return res.status(404).json({ message: "Recipe Not Found" });
    }
    Recipes.splice(index, 1);
    res.status(200).json({ message: "Recipe Deleted Successfully" });
  } catch (error) {
    res.status(503).json({
      message: "Cannot delete the Recipe, Error in delete Recipe",
    });
  }
};