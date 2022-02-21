const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    // this is a tenarary oprator if it not our erro print erro 500
  
    res.status(statusCode)
  
    res.json({
      message: err.message,
      // stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })

  }
  
  module.exports = errorHandler
  