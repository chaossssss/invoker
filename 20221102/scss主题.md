const switchMethod = () => {
  flag.value = !flag.value;
  flag.value
    ? window.document.documentElement.setAttribute("data-theme", "elder")
    : window.document.documentElement.setAttribute("data-theme", "");
};


%title {
  font-size: 16px;
  font-weight: 500;
  color: $darkFontColor;
  [data-theme="elder"] & {
    font-size: 20px;
  }
}
