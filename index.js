SnapExtensions.primitives.set(
  'install_package(package)',
  function (package) {
    var package = require(package);
    return package
  }
);
