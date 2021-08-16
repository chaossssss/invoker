:on-success="function (res, file) { return handleBannerSuccess(res, file, scope.$index)}"
handleBannerSuccess(response, file, index) {
  console.log(response, file, index);
}