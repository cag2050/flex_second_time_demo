<template>
    <div>
        <div>
            align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖
            align-items 属性。默认值为 auto，表示继承父元素的 align-items
            属性，如果没有父元素，则等同于 stretch。
        </div>
        <div class="flex_container">
            <div class="flex_item item1">1</div>
            <div class="flex_item item2">2</div>
            <div class="flex_item item3">3（align-self: flex-end;）</div>
            <div class="flex_item item4">4</div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.flex_container {
    display: flex;
    align-items: flex-start;
    border: 1px solid red;
}
.flex_item {
    width: 200px;
    border: 1px solid blue;
    line-height: 50px;
}
.item1 {
    height: 150px;
}
.item2 {
    height: 50px;
}
.item3 {
    align-self: flex-end;
    height: 100px;
}
.item4 {
    height: 200px;
}
</style>
