<template>
    <div>
        <div>align-content: flex-start;</div>
        <div class="flex_container flex-start">
            <div class="flex_item">1</div>
            <div class="flex_item">2</div>
            <div class="flex_item">3</div>
            <div class="flex_item">4</div>
            <div class="flex_item">5</div>
            <div class="flex_item">6</div>
            <div class="flex_item">7</div>
            <div class="flex_item">8</div>
        </div>
        <div>align-content: flex-end;</div>
        <div class="flex_container flex-end">
            <div class="flex_item">1</div>
            <div class="flex_item">2</div>
            <div class="flex_item">3</div>
            <div class="flex_item">4</div>
            <div class="flex_item">5</div>
            <div class="flex_item">6</div>
            <div class="flex_item">7</div>
            <div class="flex_item">8</div>
        </div>
        <div>align-content: center;</div>
        <div class="flex_container center">
            <div class="flex_item">1</div>
            <div class="flex_item">2</div>
            <div class="flex_item">3</div>
            <div class="flex_item">4</div>
            <div class="flex_item">5</div>
            <div class="flex_item">6</div>
            <div class="flex_item">7</div>
            <div class="flex_item">8</div>
        </div>
        <div>align-content: space-between;</div>
        <div class="flex_container space-between">
            <div class="flex_item">1</div>
            <div class="flex_item">2</div>
            <div class="flex_item">3</div>
            <div class="flex_item">4</div>
            <div class="flex_item">5</div>
            <div class="flex_item">6</div>
            <div class="flex_item">7</div>
            <div class="flex_item">8</div>
        </div>
        <div>align-content: space-around;</div>
        <div class="flex_container space-around">
            <div class="flex_item">1</div>
            <div class="flex_item">2</div>
            <div class="flex_item">3</div>
            <div class="flex_item">4</div>
            <div class="flex_item">5</div>
            <div class="flex_item">6</div>
            <div class="flex_item">7</div>
            <div class="flex_item">8</div>
        </div>
        <div>align-content: stretch;（默认值）</div>
        <div class="flex_container stretch">
            <div class="flex_item">1</div>
            <div class="flex_item">2</div>
            <div class="flex_item">3</div>
            <div class="flex_item">4</div>
            <div class="flex_item">5</div>
            <div class="flex_item">6</div>
            <div class="flex_item">7</div>
            <div class="flex_item">8</div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.flex_container {
    display: flex;
    flex-wrap: wrap;
    height: 250px;
    border: 1px solid red;
}
.flex_item {
    width: 100px;
    border: 1px solid blue;
    text-align: center;
    line-height: 50px;
}
.flex-start {
    align-content: flex-start;
}
.flex-end {
    align-content: flex-end;
}
.center {
    align-content: center;
}
.space-between {
    align-content: space-between;
}
.space-around {
    align-content: space-around;
}
.stretch {
    align-content: stretch;
}
</style>
