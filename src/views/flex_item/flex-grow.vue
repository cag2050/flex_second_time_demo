<template>
    <div>
        <div>
            flex-grow
            属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
        </div>
        <div class="flex_container">
            <div class="flex_item item1">1（flex-grow: 1）</div>
            <div class="flex_item item2">2（flex-grow: 2）</div>
            <div class="flex_item item3">3（flex-grow: 0）</div>
        </div>
        <div>===</div>
        <div class="flex_container">
            <div class="flex_item grow1">1（flex-grow: 1）</div>
            <div class="flex_item grow2">2（flex-grow: 2）</div>
            <div class="flex_item grow1">3（flex-grow: 1）</div>
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
    width: 150px;
    border: 1px solid blue;
    text-align: center;
    height: 50px;
    line-height: 50px;
}
.item1 {
    flex-grow: 1;
}
.item2 {
    flex-grow: 2;
}
.item3 {
    flex-grow: 0;
}
.grow1 {
    flex-grow: 1;
}
.grow2 {
    flex-grow: 2;
}
</style>
