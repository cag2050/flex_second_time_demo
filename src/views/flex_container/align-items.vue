<template>
    <div>
        <div>align-items: baseline;</div>
        <div class="baseline_container">
            <div class="baseline_item baseline_item1">
                111111111111111111111111111111111111111111111111
            </div>
            <div class="baseline_item baseline_item2">
                222222222222222222222222222222222222222222222222
            </div>
            <!-- 彻底搞懂word-break、word-wrap、white-space：https://juejin.im/post/5b8905456fb9a01a105966b4 -->
            <div class="baseline_item baseline_item3">
                Hi&nbsp;&nbsp;, This is a incomprehensibilities long word.
                <br />
                你好&nbsp;&nbsp;， 这 是一个不可思议的长单词
            </div>
        </div>
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
.baseline_container {
    display: flex;
    align-items: baseline;
    /*width: 220px;*/
    height: 300px;
    border: 1px solid red;
}
.baseline_item {
    flex-grow: 1;
    border: 1px solid blue;
    /*height: 100px;*/
    width: 100px;
    text-decoration: underline;
    /* word-break属性除了列出的那三个值外，也有个break-word值，效果跟这里的word-wrap:break-word一样，然而只有Chrome、Safari等部分浏览器支持 */
    word-break: break-word;
    /* 由于历史原因，当你使用 overflow-wrap 时，最好同时使用 word-wrap 作为备选，作向前兼容 */
    word-wrap: break-word;
    overflow-wrap: break-word;
}
.baseline_item1 {
    height: 150px;
}
.baseline_item2 {
    height: 100px;
    font-size: 40px;
}
.baseline_item3 {
    height: 200px;
}
.flex_container {
    display: flex;
    height: 400px;
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
    flex-grow: 1;
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
