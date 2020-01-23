<template>
    <div>
        <div>flex-wrap: nowrap;（默认值）</div>
        <div class="flex_container nowrap">
            <div class="flex_item">1</div>
            <div class="flex_item">2</div>
            <div class="flex_item">3</div>
            <div class="flex_item">4</div>
        </div>
        <div>flex-wrap: wrap;</div>
        <div class="flex_container wrap">
            <div class="flex_item">1</div>
            <div class="flex_item">2</div>
            <div class="flex_item">3</div>
            <div class="flex_item">4</div>
        </div>
        <div>flex-wrap: wrap-reverse;</div>
        <div class="flex_container wrap-reverse">
            <div class="flex_item">1</div>
            <div class="flex_item">2</div>
            <div class="flex_item">3</div>
            <div class="flex_item">4</div>
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
    width: 300px;
    border: 1px solid blue;
    text-align: center;
    height: 50px;
    line-height: 50px;
}
.nowrap {
    flex-wrap: nowrap;
}
.wrap {
    flex-wrap: wrap;
}
.wrap-reverse {
    flex-wrap: wrap-reverse;
}
</style>
