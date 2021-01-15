<template>
    <div class="Main">
        <div class="wrapper">
            <div class="panel">
                <div @click="openModal" class="content"><img src="" alt=""></div>
            </div>
            <div class="panel">
                <div @click="openModal" class="content"><img src="" alt=""></div>
            </div>
            <div class="panel">
                <div @click="openModal" class="content"><img src="" alt=""></div>
            </div>
            <div class="panel">
                <div @click="openModal" class="content"><img src="" alt=""></div>
            </div>
            <div class="panel">
                <div @click="openModal" class="content"><img src="" alt=""></div>
            </div>
            <div class="panel wide-panel">George Alexander Swildens</div>
            <div class="panel">
                <div @click="openModal" class="content"><img src="" alt=""></div>
            </div>
            <div class="panel">
                <div @click="openModal" class="content"><img src="" alt=""></div>
            </div>
            <div class="panel">
                <div @click="openModal" class="content"><img src="" alt=""></div>
            </div>
            <div class="panel">
                <div @click="openModal" class="content"><img src="" alt=""></div>
            </div>
            <div class="panel">
                <div @click="openModal" class="content"><img src="" alt=""></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Grid',
    data() {
        return {}
    },
    methods: {
        openModal() {
            console.log("slkdjf;")
        },
    },
}
</script>
<style scoped lang="scss">
.Main {
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    justify-content: center;
    align-items: center;
}


h1,
p {
    margin: 0 0 1em 0;
}

.wrapper {
    width: 90%;
    height: 90%;
    /* display: grid;*/
    grid-gap: 20px;
}


/* no grid support? */

.wrapper {
    display: flex;
    flex-wrap: wrap;
}


.wrapper {
    display: grid;
    height: 100vh;
    margin-bottom: 5rem;
    margin-top: 10rem;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-auto-rows: minmax(20rem, auto);
}

.panel {
    /* needed for the flex layout*/
    margin-left: 5px;
    margin-right: 5px;
    flex: 1 1 200px;
}

.tall-panel {
    grid-row-end: span 2;
}

.wide-panel {
    grid-column: 2 / span 2;
    grid-row: 2;
}

.wrapper>* {
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 150%;
    margin-bottom: 10px;
}

.content {
    width: 90%;
    height: 90%;
    cursor: pointer;
}

@supports (display: grid) {
    .wrapper>* {
        margin: 0;
    }
}

@media only screen and (max-width: 1150px) {
    .wrapper {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-auto-rows: minmax(300px, auto);
    }
}

@media only screen and (max-width: 875px) {
    .wide-panel {
        grid-column: 1 / span 1;
    }
}
</style>