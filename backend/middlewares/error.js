// ErrorHandler class to handle custom errors
class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

// Middleware to handle errors
export const errorMiddleware = (err, req, res, next) => {
  // Set default error message and statusCode if not provided
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  // Handle CastError (for invalid MongoDB ObjectId or similar issues)
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Handle duplicate key error (e.g., unique fields in MongoDB)
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  // Handle JsonWebTokenError (invalid JWT)
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid, Try again!`;
    err = new ErrorHandler(message, 400);
  }

  // Handle TokenExpiredError (expired JWT)
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is expired, Try again!`;
    err = new ErrorHandler(message, 400);
  }

  // Return the error response as JSON
  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

// Export the ErrorHandler class for use in other parts of the app
export default ErrorHandler;
