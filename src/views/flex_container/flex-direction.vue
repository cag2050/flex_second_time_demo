<template>
    <div>
        <div>flex-direction: row;（默认值）</div>
        <div class="flex_container row">
            <div class="flex_item">1</div>
            <div class="flex_item">2</div>
            <div class="flex_item">3</div>
            <div class="flex_item">4</div>
        </div>
        <div>flex-direction: row-reverse;</div>
        <div class="flex_container row-reverse">
            <div class="flex_item">1</div>
            <div class="flex_item">2</div>
            <div class="flex_item">3</div>
            <div class="flex_item">4</div>
        </div>
        <div>flex-direction: column;</div>
        <div class="flex_container column">
            <div class="flex_item">1</div>
            <div class="flex_item">2</div>
            <div class="flex_item">3</div>
            <div class="flex_item">4</div>
        </div>
        <div>flex-direction: column-reverse;</div>
        <div class="flex_container column-reverse">
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
.row {
    flex-direction: row;
}
.row-reverse {
    flex-direction: row-reverse;
}
.column {
    flex-direction: column;
}
.column-reverse {
    flex-direction: column-reverse;
}
</style>
