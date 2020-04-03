<template>
    <div>
        <div>order 属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。</div>
        <div class="flex_container row">
            <div class="flex_item item1">1（order: 1）</div>
            <div class="flex_item item2">2（order: 2）</div>
            <div class="flex_item item3">3（order: 0）</div>
            <div class="flex_item item4">4（order: -1）</div>
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
    width: 200px;
    border: 1px solid blue;
    text-align: center;
    height: 50px;
    line-height: 50px;
}
.item1 {
    order: 1;
}
.item2 {
    order: 2;
}
.item3 {
    order: 0;
}
.item4 {
    order: -1;
}
</style>
