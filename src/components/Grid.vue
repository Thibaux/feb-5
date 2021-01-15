<template>
    <div class="Main">
        <div class="wrapper">
            <!-- ROw 1 -->
            <div class="panel wide wide-1">
                <div @click="show" class="content"><img src="" alt="">
                    <modal name="1">
                        This is my first modal
                    </modal>
                    <v-easy-dialog v-model="simpleDialog">
                        <div class="flex flex-col">
                            <div>Check out our stacked Dialog</div>
                            <div>
                                Notice that tab / shift+tab will only stay within this dialog.
                            </div>
                            <div class="flex justify-end space-x-2">
                                <button @click="simpleDialog = false">Close</button>
                            </div>
                        </div>
                    </v-easy-dialog>
                </div>
            </div>
            <div class="panel">
                <div @click="openModal" class="content"><img src="" alt=""></div>
            </div>
            <div class="panel">
                <div @click="openModal" class="content"><img src="" alt=""></div>
            </div>
            <!-- ROW 2 -->
            <div class="panel">
                <div @click="openModal" class="content"><img src="" alt=""></div>
            </div>
            <div class="panel title">George Alexander Swildens</div>
            <div class="panel">
                <div @click="openModal" class="content"><img src="" alt=""></div>
            </div>
            <!-- ROW 3 -->
            <div class="panel wide wide-3">
                <div @click="openModal" class="content"><img src="" alt=""></div>
            </div>
            <div class="panel">
                <div @click="openModal" class="content"><img src="" alt=""></div>
            </div>
            <div class="panel">
                <div @click="openModal" class="content"><img src="" alt=""></div>
            </div>
            <!-- ROW 4 -->
            <div class="panel">
                <div @click="openModal" class="content"><img src="" alt=""></div>
            </div>
            <div class="panel wide wide-4">
                <div @click="openModal" class="content"><img src="" alt=""></div>
            </div>
            <div class="panel">
                <div @click="openModal" class="content"><img src="" alt=""></div>
            </div>
        </div>
    </div>
</template>
<script>
import VEasyDialog from 'v-easy-dialog'

export default {
    name: 'Grid',
    component: {
        VEasyDialog
    },
    data() {
        return {
            simpleDialog: false,
        }
    },
    methods: {
        openModal() {
            console.log("slkdjf;")
        },
        show() {
            // this.$modal.show('1');
            this.simpleDialog = true;
        },
        hide() {
            this.$modal.hide('1');
        }
    },
    mount() {
        this.show()
    }
}
</script>
<style scoped lang="scss">
.Main {
    display: flex;
    width: 100vw;
    overflow-x: hidden;
    justify-content: center;
    align-items: center;
    padding-bottom: 4%;
    padding-top: 4%;
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

    div:last-child {
        padding-bottom: 10rem;
    }
}


/* no grid support? */

.wrapper {
    display: flex;
    flex-wrap: wrap;
}


.wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-auto-rows: minmax(20rem, auto);
}

.panel {
    margin-left: 5px;
    margin-right: 5px;
    flex: 1 1 200px;
}

.tall-panel {
    grid-row-end: span 2;
}

.wide-1 {
    grid-column: 1 / span 2;
    grid-row: 1;
}

.title {
    grid-column: 2 / span 2;
    grid-row: 2;
}

.wide-3 {
    grid-column: 1 / span 2;
    grid-row: 3;
}

.wide-4 {
    grid-column: 2 / span 2;
    grid-row: 4;
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

    .title,
    .wide {
        grid-column: 1 / span 1;
    }
}
</style>