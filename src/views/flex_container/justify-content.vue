<template>
    <div>
        <div>justify-content: flex-start;（默认值）</div>
        <div class="flex_container flex-start">
            <div class="flex_item">1</div>
            <div class="flex_item">2</div>
            <div class="flex_item">3</div>
            <div class="flex_item">4</div>
        </div>
        <div>justify-content: flex-end;</div>
        <div class="flex_container flex-end">
            <div class="flex_item">1</div>
            <div class="flex_item">2</div>
            <div class="flex_item">3</div>
            <div class="flex_item">4</div>
        </div>
        <div>justify-content: center;</div>
        <div class="flex_container center">
            <div class="flex_item">1</div>
            <div class="flex_item">2</div>
            <div class="flex_item">3</div>
            <div class="flex_item">4</div>
        </div>
        <div>justify-content: space-between;</div>
        <div class="flex_container space-between">
            <div class="flex_item">1</div>
            <div class="flex_item">2</div>
            <div class="flex_item">3</div>
            <div class="flex_item">4</div>
        </div>
        <div>justify-content: space-around;</div>
        <div class="flex_container space-around">
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
    width: 50px;
    border: 1px solid blue;
    text-align: center;
    height: 50px;
    line-height: 50px;
}
.flex-start {
    justify-content: flex-start;
}
.flex-end {
    justify-content: flex-end;
}
.center {
    justify-content: center;
}
.space-between {
    justify-content: space-between;
}
.space-around {
    justify-content: space-around;
}
</style>
