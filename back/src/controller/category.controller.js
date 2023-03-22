class CategoryController {
  getAll(req, res) {
    try {
      res.write("this is categories");
      res.end();
    } catch (error) {
      return createError(
        res,
        error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        error.message || ReasonPhrases.INTERNAL_SERVER_ERROR
      );
    }
  }

  getOne(req, res) {
    try {
      res.write("this is categories");
      res.end();
    } catch (error) {
      return createError(
        res,
        error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        error.message || ReasonPhrases.INTERNAL_SERVER_ERROR
      );
    }
  }

  create(req, res) {
    try {
      res.write("this is categories");
      res.end();
    } catch (error) {
      return createError(
        res,
        error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        error.message || ReasonPhrases.INTERNAL_SERVER_ERROR
      );
    }
  }

  update(req, res) {
    try {
      res.write("this is categories");
      res.end();
    } catch (error) {
      return createError(
        res,
        error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        error.message || ReasonPhrases.INTERNAL_SERVER_ERROR
      );
    }
  }

  delete(req, res) {
    try {
      res.write("this is categories");
      res.end();
    } catch (error) {
      return createError(
        res,
        error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        error.message || ReasonPhrases.INTERNAL_SERVER_ERROR
      );
    }
  }
}

module.exports = {
  CategoryController: new CategoryController(),
};
