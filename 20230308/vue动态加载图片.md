vue 动态加载图片



const getImageUrl = () => {
  // 里面可以根据需求写逻辑
    return new URL('../assets/img/home/container_bg.png', import.meta.url).href;
};