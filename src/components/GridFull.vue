<template>
    <div class="Main">
        <div class="wrapper">
            <!-- ROw 1 -->
            <div class="panel">
                <div class="contentPortret">
                    <div class="hvr-shrink text-center">
                        <v-dialog v-model="dialog1" dark transition="dialog-bottom-transition" :width="widthPortret">
                            <template v-slot:activator="{ on, attrs }">
                                <img src="./../assets/content/img/rwdeBoer.jpg" alt="" v-bind="attrs" v-on="on">
                            </template>
                            <v-card fluid fill-width class="modalImgPortret">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <img src="./../assets/content/img/rwdeBoer.jpg" alt="">
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <p class="author">
                                        Rob de Boer
                                    </p>
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
                    <div class="hvr-shrink text-center">
                        <v-dialog v-model="dialog2" dark transition="dialog-bottom-transition" content-class="dialogTwo" :width="width">
                            <template v-slot:activator=" { on, attrs }">
                                <img src="./../assets/schilderij.jpeg" alt="" v-bind="attrs" v-on="on">
                            </template>
                            <v-card class="modalImg sec">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <img src="./../assets/schilderij.jpeg">
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <p class="author">
                                        George Alexander Swildens
                                    </p>
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
                    <div class="hvr-shrink text-center">
                        <v-dialog v-model="dialog3" transition="dialog-bottom-transition" width="600">
                            <template v-slot:activator="{ on, attrs }">
                                <img src="" alt="" v-bind="attrs" v-on="on">
                            </template>
                            <v-card class="modalImg sec">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <img src="" alt="">
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
                <p class="titleAorV">
                </p>
                <div class="content">
                    <audio controls>
                        <source src="./../assets/content/audio/first.mp3" type="audio/mpeg"> Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
            <div class="title">
                <div class="titleContent">
                    <!-- <h5>Een eerbetoon van en aan creatieve creaties & composities</h5> -->
                    <h5>
                        Een verzameling van creativeit als eerbetoon aan de geboortedag 5 februari van
                    </h5>
                    <h2>George Alexander Swildens</h2>
                </div>
                <footer>
                    <p>Thibaux Swildens
                        <a href="https://github.com/Thibaux" target="_blank">
                            <img src="./../assets/socials/github.png" alt="github_link">
                        </a>
                    </p>
                </footer>
            </div>
            <div class="panel">
                <div class="content">
                    <audio controls>
                        <source src="./../assets/content/audio/first.mp3" type="audio/mpeg"> Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
            <!-- ROW 3 -->
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/film.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <audio controls>
                        <source src="./../assets/content/audio/first.mp3" type="audio/mpeg"> Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <div class="hvr-shrink text-center">
                        <v-dialog v-model="dialog4" transition="dialog-bottom-transition" :width="widthPortret">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    Vestibulum in ligula enim. Nam quis tortor sed quam tempor accumsan non eu dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque imperdiet massa vitae cursus
                                </div>
                            </template>
                            <v-card class="modalImg sec">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <div class="contentText">
                                        Vestibulum in ligula enim. Nam quis tortor sed quam tempor accumsan non eu dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque imperdiet massa vitae cursus consequat. Donec eget sapien eu lorem tristique tempor id a risus. Nunc dignissim semper enim non tristique. Maecenas sit amet aliquam eros. Nullam euismod varius ultrices.
                                        Mauris ut rutrum neque, at tristique mauris. Mauris et lacus rutrum augue dignissim ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales nibh at rutrum placerat. Proin lacinia nulla ut molestie viverra. Integer ornare ligula gravida molestie feugiat. Etiam fringilla, nisl sed fringilla scelerisque, ligula mi porttitor quam, vitae eleifend orci turpis non nibh. Curabitur vitae libero posuere, tristique risus vitae, porttitor metus. Etiam tincidunt, enim commodo laoreet maximus, turpis massa suscipit risus, vitae lobortis felis nibh vitae est. Curabitur porta cursus lorem eget tristique. Integer non lacus ut augue pretium aliquet eu ut ligula. Fusce blandit, ligula et interdum egestas, mauris elit congue odio, eget dapibus nulla arcu sed lacus.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam nec dui in facilisis. Curabitur tincidunt molestie pellentesque. Praesent venenatis felis et ipsum ornare viverra. Etiam eu risus congue odio ultricies feugiat et vel velit. Maecenas rutrum purus at mi venenatis, non consectetur nunc mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas erat quam, imperdiet vel odio in, semper condimentum justo. Nulla interdum diam nec ante efficitur aliquet. Morbi in neque nec ex tincidunt laoreet vel sit amet est. Duis nisl augue, imperdiet sed lacinia quis, vulputate sed risus.
                                        Vestibulum in ligula enim. Nam quis tortor sed quam tempor accumsan non eu dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque imperdiet massa vitae cursus consequat. Donec eget sapien eu lorem tristique tempor id a risus. Nunc dignissim semper enim non tristique. Maecenas sit amet aliquam eros. Nullam euismod varius ultrices.
                                        Mauris ut rutrum neque, at tristique mauris. Mauris et lacus rutrum augue dignissim ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales nibh at rutrum placerat. Proin lacinia nulla ut molestie viverra. Integer ornare ligula gravida molestie feugiat. Etiam fringilla, nisl sed fringilla scelerisque, ligula mi porttitor quam, vitae eleifend orci turpis non nibh. Curabitur vitae libero posuere, tristique risus vitae, porttitor metus. Etiam tincidunt, enim commodo laoreet maximus, turpis massa suscipit risus, vitae lobortis felis nibh vitae est. Curabitur porta cursus lorem eget tristique. Integer non lacus ut augue pretium aliquet eu ut ligula. Fusce blandit, ligula et interdum egestas, mauris elit congue odio, eget dapibus nulla arcu sed lacus.
                                        Vivamus vitae justo purus. Mauris faucibus aliquet lobortis. Cras vel orci quis ligula sodales rutrum non at urna. Sed fringilla efficitur mauris, in pellentesque lorem sodales ut. Maecenas sit amet ex at ante ultricies dictum ut vel leo. Phasellus hendrerit et lorem vitae tempus. Vestibulum eros purus, malesuada et nisl et, vulputate pellentesque libero.
                                        Morbi aliquet, urna blandit dignissim suscipit, felis tellus dictum mi, eget semper est leo eget tellus. Curabitur vehicula, ipsum suscipit rhoncus placerat, elit magna lobortis urna, id scelerisque tortor nibh nec erat. Ut bibendum nisl sit amet lacus egestas, quis ornare nisl faucibus. Ut sed sapien id justo venenatis faucibus. Pellentesque vulputate dictum augue id pharetra. Proin feugiat sagittis sem sit amet egestas. Nunc sem massa, ultrices et elementum ut, facilisis eu risus. Morbi leo libero, facilisis quis congue at, finibus ac turpis. Vivamus convallis condimentum massa quis consequat. Donec sed arcu justo. Aenean non nisl magna. Donec quis tempus metus.
                                    </div>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog4 = false">
                                        Sluit
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </div>
            </div>
            <!-- ROW 4 -->
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <!-- ROW 5 -->
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <!-- ROW 6 -->
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <!-- ROW 7 -->
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <video width="320" height="240" controls>
                    </video>
                </div>
            </div>
            <div class="panel">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Grid',
    data() {
        return {
            dialog1: false,
            dialog2: false,
            dialog3: false,
            dialog4: false,
            dialog5: false,
            dialog6: false,
            dialog7: false,
            dialog8: false,
            dialog9: false,
            dialog10: false,
            dialog11: false,
            dialog12: false,
            dialog13: false,
            dialog14: false,
            dialog15: false,
            dialog16: false,
            dialog17: false,
            dialog18: false,
            dialog19: false,
            dialog20: false,
            dialog21: false,
            dialog22: false,
            dialog23: false,
            dialog24: false,
            dialog25: false,
            dialog26: false,
            dialog27: false,
            dialog28: false,
            dialog29: false,
            dialog30: false,
            dialog31: false,
            dialog32: false,
            dialog33: false,
            dialog34: false,
            dialog35: false,
            dialog36: false,
            dialog37: false,
            dialog38: false,
            dialog39: false,
            dialog40: false,
        }
    },
    computed: {
        width() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs':
                    return 500
                case 'sm':
                    return 600
                case 'md':
                    return 700
                case 'lg':
                    return 900
                case 'xl':
                    return 1000
            }
        },
        widthPortret() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs':
                    return 300
                case 'sm':
                    return 400
                case 'md':
                    return 600
                case 'lg':
                    return 600
                case 'xl':
                    return 800
            }
        },
        widthLandscape() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs':
                    return 500
                case 'sm':
                    return 600
                case 'md':
                    return 700
                case 'lg':
                    return 700
                case 'xl':
                    return 800
            }
        },
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
    font-family: 'Raleway', sans-serif;
}

h1,
p {
    margin: 0 0 1em 0;
}

.wrapper {
    width: 100%;
    height: 100%;
    /* display: grid;*/
}


/* no grid support? */

.wrapper {
    display: flex;
    flex-wrap: wrap;
}

.wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
    grid-auto-rows: minmax(20rem, auto);

    .panel:nth-child(1) {
        // pink
        background-color: #f7e0e1;

    }

    .panel:nth-child(2) {
        // yellow
        background-color: #fdfd96;
    }

    .panel:nth-child(3) {
        // red
        background-color: #ff6961;
    }

    .panel:nth-child(4) {
        // purple
        background-color: #caa7bc;
    }

    .panel:nth-child(5) {
        // TITLE
        // blue
        background-color: #aec6cf;
    }

    .panel:nth-child(6) {
        // green
        background-color: #81d381;
    }

    .panel:nth-child(7) {
        // yellow
        background-color: #fdfd96;
    }

    .panel:nth-child(8) {
        // yellow
        background-color: #fdfd96;
    }

    .panel:nth-child(9) {
        // red
        background-color: #ff6961;
    }

    .panel:nth-child(10) {
        // pink
        background-color: #f7e0e1;
    }

    .panel:nth-child(11) {
        // green
        background-color: #81d381;
    }

    .panel:nth-child(12) {
        // blue
        background-color: #aec6cf;
    }

    .panel:nth-child(13) {
        // purple
        background-color: #caa7bc;
    }

    .panel:nth-child(14) {
        // yellow
        background-color: #fdfd96;
    }

    .panel:nth-child(15) {
        // red
        background-color: #ff6961;
    }





    .panel:nth-child(16) {
        // pink
        background-color: #f7e0e1;
    }

    .panel:nth-child(17) {
        // green
        background-color: #81d381;
    }

    .panel:nth-child(18) {
        // blue
        background-color: #aec6cf;
    }

    .panel:nth-child(19) {
        // purple
        background-color: #caa7bc;
    }

    .panel:nth-child(20) {
        // yellow
        background-color: #fdfd96;
    }

    .panel:nth-child(21) {
        // red
        background-color: #ff6961;
    }

    .panel:nth-child(22) {
        // pink
        background-color: #f7e0e1;
    }

    .panel:nth-child(23) {
        // green
        background-color: #81d381;
    }

    .panel:nth-child(24) {
        // blue
        background-color: #aec6cf;
    }

    .panel:nth-child(25) {
        // purple
        background-color: #caa7bc;
    }

    .panel:nth-child(26) {
        // yellow
        background-color: #fdfd96;
    }

    .panel:nth-child(27) {
        // red
        background-color: #ff6961;
    }

    .panel:nth-child(28) {
        // pink
        background-color: #f7e0e1;
    }

    .panel:nth-child(29) {
        // green
        background-color: #81d381;
    }

    .panel:nth-child(30) {
        // blue
        background-color: #aec6cf;
    }

    .panel:nth-child(31) {
        // purple
        background-color: #caa7bc;
    }

    .panel:nth-child(32) {
        // yellow
        background-color: #fdfd96;
    }

    .panel:nth-child(33) {
        // red
        background-color: #ff6961;
    }

    .panel:nth-child(34) {
        // pink
        background-color: #f7e0e1;
    }

    .panel:nth-child(35) {
        // green
        background-color: #81d381;
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
    background-color: #aec6cf;
    grid-column: 2 / span 2;
    grid-row: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    position: relative;

    .titleContent {
        width: 75%;
    }

    footer {
        position: absolute;
        bottom: 0;
        display: flex;

        img:first-child {
            margin-left: 5px;
        }

        p {
            font-size: 0.6rem;
            font-weight: 500;
            color: #313639;
        }

        img {
            width: 13px;
            height: auto;
            margin-bottom: -3px;
        }
    }

    h2 {
        font-size: 2.5rem;
        font-weight: 600;
    }

    h4 {
        font-size: 1.8rem;
        font-weight: 500;
    }

    h5 {
        margin-bottom: 3%;
        font-size: 1.5rem;
        font-weight: 400;
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
    // background-color: #444;
    color: #fff;
    padding: 20px;
    font-size: 150%;
    margin-bottom: 10px;
}

// CONTENT

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

    &Portret {
        img {
            width: 50%;
            height: auto;
            border-radius: 5px;
        }
    }
}

// MODAL

// IMG
.modalImg {
    img {
        width: 40vw;
        height: auto;
        border-radius: 3px;
    }

    &Portret {
        img {
            width: 28vw;
            height: auto;
        }
    }

    &landscape {
        img {
            width: 20%;
            height: auto;
        }
    }
}

// AUTHOR

.author {
    font-size: 125%;
    font-weight: 500;
    margin: 0;
    margin-left: 0.5rem;
}

// TITLE AUDIO AND VIDEO

.titleAorV {
    color: black;
}

// TEXT

.contentText {
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 200;
}


// HOVER EFFECT
.hvr-shrink {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
}

.hvr-shrink:hover,
.hvr-shrink:focus,
.hvr-shrink:active {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
}

@supports (display: grid) {
    .wrapper>* {
        margin: 0;
    }
}

@media only screen and (max-width: 1150px) {
    .wrapper {
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
        grid-auto-rows: minmax(20rem, auto);

        .panel:nth-child(4) {
            background-color: #fdfd96;
        }

        .panel:nth-child(8) {
            background-color: #ff6961;
        }

        .panel:nth-child(9) {
            background-color: #aec6cf;
        }

        .panel:nth-child(10) {
            background-color: #ff6961;
        }
    }

    .modalImg {
        img {
            width: 100%;
        }

        &Portret {
            img {
                width: 90%;
                height: auto;
            }
        }

        &landscape {
            img {
                width: 30%;
                height: auto;
            }
        }
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
            font-size: 1.7rem;
        }

        h5 {
            font-size: 1rem;
        }
    }

    .modalImg {
        &Portret {
            img {
                width: 100%;
                height: auto;
            }
        }

        &landscape {
            img {
                width: 50%;
                height: auto;
            }
        }
    }
}
</style>