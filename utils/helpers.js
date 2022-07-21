module.exports = {
  jsonResponse: (results, success = true) => {
    return {
      success,
      data: results
    }
  }
}