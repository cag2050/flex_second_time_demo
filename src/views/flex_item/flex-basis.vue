<template>
    <div>
        <div>
            flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main
            size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为
            auto，即项目的本来大小。
        </div>
        <div class="flex_container">
            <div class="flex_item item1">
                1（width: 300px; flex-basis: 200px;）
            </div>
            <div class="flex_item item2">2（flex-basis: 200px;）</div>
            <div class="flex_item item3">3（flex-grow: 1;）</div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.flex_container {
    display: flex;
}
.flex_item {
    border: 1px solid blue;
    text-align: center;
    height: 100px;
    line-height: 50px;
}
.item1 {
    width: 300px;
    flex-basis: 200px;
}
.item2 {
    flex-basis: 200px;
}
.item3 {
    flex-grow: 1;
}
</style>
