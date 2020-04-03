<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <div>===Flex 容器（flex container）属性：===</div>
            <router-link to="/flex_container/flex-direction"
                >flex-direction</router-link
            >
            |
            <router-link to="/flex_container/flex-wrap"
                >flex-wrap（使用手机模式查看）</router-link
            >
            |
            <router-link to="/flex_container/justify-content"
                >justify-content</router-link
            >
            |
            <router-link to="/flex_container/align-items"
                >align-items</router-link
            >
            |
            <router-link to="/flex_container/align-content"
                >align-content（使用手机模式查看）</router-link
            >
            |
            <div>===Flex 项目（flex item）属性：===</div>
            <router-link to="/flex_item/order">order（默认为0）</router-link>
            |
            <router-link to="/flex_item/flex-grow"
                >flex-grow（默认为0）</router-link
            >
            |
        </div>
        <div>===以下是内容===</div>
        <router-view />
    </div>
</template>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
}

#nav {
    /*padding: 30px;*/
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
