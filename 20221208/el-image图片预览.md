<div class="list-item" v-for="(item, index) in imageList.cacheImages">
    <el-image style="width: 100%; height: auto" :src="item.src"
        :preview-src-list="imageList.cacheImages.map((v: any) => v.src)" :initial-index="index"
        fit="cover" />
</div>