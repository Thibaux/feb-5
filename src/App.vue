<template>
    <div data-app id="app">
        <!-- <Grid></Grid> -->
        <GridFull></GridFull>
    </div>
</template>
<script>
import Grid from './components/Grid.vue'
import GridFull from './components/GridFull.vue'

export default {
    name: 'App',
    components: {
        Grid,
        GridFull
    }
}
</script>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    padding: 0;
    background-color: #fff;
    color: #444;
    font-family: 'Open Sans', 'sans-serif';
}

html:focus-within {
    scroll-behavior: smooth;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    width: 100vw;
    height: 100vh;
}
</style>