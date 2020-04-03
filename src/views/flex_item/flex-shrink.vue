<template>
    <div>
        <div>
            flex-shrink
            属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
            <br />缩小屏幕查看效果
        </div>
        <div class="flex_container">
            <div class="flex_item item1">1（flex-shrink: 1）</div>
            <div class="flex_item item2">2（flex-shrink: 2）</div>
            <div class="flex_item item3">3（flex-shrink: 0）</div>
        </div>
        <div>===</div>
        <div class="flex_container">
            <div class="flex_item shrink1">1（flex-shrink: 1）</div>
            <div class="flex_item shrink2">2（flex-shrink: 2）</div>
            <div class="flex_item shrink1">3（flex-shrink: 1）</div>
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
    width: 400px;
    border: 1px solid blue;
    text-align: center;
    height: 50px;
    line-height: 50px;
}
.item1 {
    flex-shrink: 1;
}
.item2 {
    flex-shrink: 2;
}
.item3 {
    flex-shrink: 0;
}
.shrink1 {
    flex-shrink: 1;
}
.shrink2 {
    flex-shrink: 2;
}
</style>
