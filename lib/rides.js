module.exports = {
  childTallEnough: function(child1, ride1) {
    if (child1.height >= ride1.minHeight) {
      return true
    } else {
      return false
    }
  }
}
