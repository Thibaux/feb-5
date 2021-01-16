<template>
    <div class="Main">
        <div class="wrapper">
            <!-- ROw 1 -->
            <div class="panel wide wide-1">
                <div class="content">
                    <div class="text-center">
                        <v-dialog v-model="dialog" width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                                    Click Me
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title class="headline grey lighten-2">
                                    Privacy Policy
                                </v-card-title>
                                <v-card-text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog = false">
                                        I accept
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
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
export default {
    name: 'Grid',
    data() {
        return {
            dialog: false,
        }
    },
    methods: {
        openModal() {}
    },
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