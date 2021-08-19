var fs = require("fs")

module.exports = (gulp, callback) => {
  const fileWriteTask = function(callback) {
    return fs.writeFile(
      config.source.template + "/pages/template.pug",
      "extends ../templates/" + myLayout,
      callback
    )
  }

  const fileSkWriteTask = function(callback) {
    return fs.writeFile(
      config.source.template + "/pages/starter-kit/template.pug",
      "extends ../../templates/starter-kit/" + myLayout,
      callback
    )
  }

  const fileWriteSass = function(callback) {
    if (material == "material-") {
      return fs.writeFile(
        config.source.sass + "/core/variables/_variables.scss",
        '//Auto generated file for material layouts. \n @import "_material-variables";',
        callback
      )
    } else {
      return fs.writeFile(
        config.source.sass + "/core/variables/_variables.scss",
        '//Auto generated file for default layouts. \n @import "_bootstrap-variables";',
        callback
      )
    }
  }
  // ---------------------------------------------------------------------------
  // Exports

  return {
    file_write: fileWriteTask,
    sk_file_write: fileSkWriteTask,
    sass_file_write: fileWriteSass
  }
}
