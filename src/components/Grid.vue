<template>
    <div class="Main">
        <div class="wrapper">
            <!-- ROw 1 -->
            <div class="panel wide wide-1">
                <div class="content">
                    <div class="text-center">
                        <v-dialog v-model="dialog1" transition="dialog-bottom-transition" width="750">
                            <template v-slot:activator="{ on, attrs }">
                                <img src="./../assets/content/img/second.jpeg" alt="" v-bind="attrs" v-on="on">
                            </template>
                            <v-card fluid fill-width class="modalImg">
                                <v-card-title class="headline grey lighten-2">
                                    Naam aanlever
                                </v-card-title>
                                <v-card-text>
                                    <img src="./../assets/content/img/second.jpeg">
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog1 = false">
                                        Sluit
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <div class="text-center">
                        <v-dialog v-model="dialog2" transition="dialog-bottom-transition" width="750">
                            <template v-slot:activator="{ on, attrs }">
                                <img src="./../assets/content/img/first.jpg" alt="" v-bind="attrs" v-on="on">
                            </template>
                            <v-card class="modalImg sec">
                                <v-card-title class="headline grey lighten-2">
                                    Naam aanlever
                                </v-card-title>
                                <v-card-text>
                                    <img src="./../assets/content/img/first.jpg">
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog2 = false">
                                        Sluit
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <div class="text-center">
                        <v-dialog v-model="dialog3" transition="dialog-bottom-transition" width="600">
                            <template v-slot:activator="{ on, attrs }">
                                <img src="./../assets/content/img/third.jpeg" alt="" v-bind="attrs" v-on="on">
                            </template>
                            <v-card class="modalImg sec">
                                <v-card-title class="headline grey lighten-2">
                                    Naam aanlever
                                </v-card-title>
                                <v-card-text>
                                    <img src="./../assets/content/img/third.jpeg">
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog3 = false">
                                        Sluit
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </div>
            </div>
            <!-- ROW 2 -->
            <div class="panel">
                <div @click="openModal" class="content"><img src="" alt=""></div>
            </div>
            <div class="panel title">
                <h2>George Alexander Swildens</h2>
                <h4>5 febuari</h4>
                <h5>Een eerbetoon van creatieve creaties & composities</h5>
                <h5>Ter nagedachtenis aan George</h5>
            </div>
            <div class="panel">
                <div class="content">
                    <audio controls>
                        <source src="./../assets/content/audio/first.mp3" type="audio/mpeg"> Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
            <!-- ROW 3 -->
            <div class="panel wide wide-3">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
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
import 'vue-dplayer/dist/vue-dplayer.css'

export default {
    name: 'Grid',
    components: {
        VuetifyAudio: () =>
            import('vuetify-audio'),
        // VuePlayer
    },
    data() {
        return {
            dialog1: false,
            dialog2: false,
            dialog3: false,
            file1: './../assets/content/audio/first.mp3',
            file: 'http://www.hochmuth.com/mp3/Boccherini_Concerto_478-1.mp3',
            audioSources: {
                // "audio/mp3": 'first.mp3',
                "audio/mp3": '12.mp3',
            },
            videoSources: {
                // "audio/mp3": 'first.mp3',
                "video/mp4": '13.mp4',
            },
        }
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

    .panel:nth-child(1) {
        // red
        background-color: #ff6961;
    }

    .panel:nth-child(2) {
        // yellow
        background-color: #fdfd96;
    }

    .panel:nth-child(3) {
        // blue
        background-color: #aec6cf;
    }

    .panel:nth-child(4) {
        background-color: #fdfd96;
    }

    .panel:nth-child(5) {
        background-color: #484349;
    }

    .panel:nth-child(6) {
        background-color: #ff6961;
    }

    .panel:nth-child(7) {
        background-color: #aec6cf;
    }

    .panel:nth-child(8) {
        background-color: #ff6961;
    }

    .panel:nth-child(9) {
        background-color: #fdfd96;
    }

    .panel:nth-child(10) {
        background-color: #ff6961;
    }

    .panel:nth-child(11) {
        background-color: #fdfd96;
    }

    .panel:nth-child(12) {
        background-color: #aec6cf;
    }
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: 2.5vw;
    }

    h4 {
        font-size: 1.8vw;
    }

    h5 {
        font-size: 1.5vw;
    }
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
    width: 95%;
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 90%;
        height: auto;
        border-radius: 3px;
    }
}

.modalImg {
    img {
        width: 100%;
        height: auto;
        border-radius: 3px;
    }
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

    .content img {
        width: 80%;
    }
}

@media only screen and (max-width: 575px) {
    .title {
        h2 {
            font-size: 5vw;
        }

        h4 {
            font-size: 3vw;
        }

        h5 {
            font-size: 2vw;
        }
    }
}
</style>