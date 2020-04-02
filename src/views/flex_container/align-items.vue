<template>
    <div>
        <div>align-items: flex-start;</div>
        <div class="flex_container flex-start">
            <div class="flex_item flex_item1">1</div>
            <div class="flex_item flex_item2">2</div>
            <div class="flex_item flex_item3">3</div>
            <div class="flex_item flex_item4">4</div>
        </div>
        <div>align-items: flex-end;</div>
        <div class="flex_container flex-end">
            <div class="flex_item flex_item1">1</div>
            <div class="flex_item flex_item2">2</div>
            <div class="flex_item flex_item3">3</div>
            <div class="flex_item flex_item4">4</div>
        </div>
        <div>align-items: center;</div>
        <div class="flex_container center">
            <div class="flex_item flex_item1">1</div>
            <div class="flex_item flex_item2">2</div>
            <div class="flex_item flex_item3">3</div>
            <div class="flex_item flex_item4">4</div>
        </div>
        <div>align-items: baseline;（待实现）</div>
        <div class="flex_container baseline">
            <div class="flex_item flex_item1">
                111111111111111111111111111111111111111111111111
            </div>
            <div class="flex_item flex_item2">
                222222222222222222222222222222222222222222222222
            </div>
            <div class="flex_item flex_item3">
                333333333333333333333333333333333
            </div>
            <div class="flex_item flex_item4">4</div>
        </div>
        <div>align-items: stretch;（默认值）</div>
        <div class="flex_container stretch">
            <div class="item_stretch">1</div>
            <div class="item_stretch">2</div>
            <div class="item_stretch">3</div>
            <div class="item_stretch">4</div>
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
.flex-start {
    align-items: flex-start;
}
.flex-end {
    align-items: flex-end;
}
.center {
    align-items: center;
}
.baseline {
    align-items: baseline;
}
.stretch {
    align-items: stretch;
    height: 50px;
    border: 1px solid blue;
}
.flex_item {
    width: 50px;
    border: 1px solid blue;
    text-align: center;
    line-height: 50px;
}
.flex_item1 {
    height: 200px;
}
.flex_item2 {
    height: 100px;
}
.flex_item3 {
    height: 300px;
}
.flex_item4 {
    height: 400px;
}
.item_stretch {
    width: 50px;
    border: 1px solid blue;
}
</style>
