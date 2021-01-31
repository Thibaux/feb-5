<template>
    <div class="Main">
        <div class="wrapper">
            <!-- ROw 1 -->
            <div class="panel">
                <div class="content">
                    <div class="hvr-shrink text-center">
                        <v-dialog v-model="dialog1" transition="dialog-bottom-transition" :width="width">
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
                                        George Swildens
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
                        <v-dialog v-model="dialog2" transition="dialog-bottom-transition" :width="width">
                            <template v-slot:activator="{ on, attrs }">
                                <img src="./../assets/content/img/oma.jpg" alt="" v-bind="attrs" v-on="on">
                            </template>
                            <v-card fluid fill-width class="modalImg">
                                <v-card-title class="textOmaDiv headline grey lighten-2">
                                    <p class="textOma">Lieve George ik ben je dankbaar.</p>
                                </v-card-title>
                                <v-card-text>
                                    <img src="./../assets/content/img/oma.jpg" alt="">
                                </v-card-text>
                                <p class="contentText">
                                    Dat wij meer dan <b>60 JAAR</b> bij elkaar zijn gebleven.
                                    <br>
                                    Ik zal proosten op je, waar je ook bent. Het gaat je goed.
                                    Je lieve Jeanet S.
                                </p>
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
                    <div class="hvr-shrink text-center">
                        <v-dialog v-model="dialog3" transition="dialog-bottom-transition" :width="width">
                            <template v-slot:activator="{ on, attrs }">
                                <img src="./../assets/content/video/tumbs/TinekevanGroen.png" alt="" v-bind="attrs" v-on="on">
                            </template>
                            <v-card fluid fill-width class="modalImgPortret">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <video width="1280" height="720" controls v-bind="attrs" v-on="on">
                                        <source src="./../assets/content/video/TinekevanGroen.mp4" type="video/mp4"> Your browser does not support the video tag.
                                    </video>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <p class="author">
                                        Tineke & Gerard van Groen
                                    </p>
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
                <div class="content">
                    <div class="hvr-shrink text-center">
                        <v-dialog v-model="dialog4" transition="dialog-bottom-transition" :width="widthPortret">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    BIEKE TAART
                                </div>
                            </template>
                            <v-card class="modalImg">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <div>
                                        BIEKE TAART
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
            <div class="title">
                <div class="titleContent">
                    <!-- <h5>Een eerbetoon van en aan creatieve creaties & composities</h5> -->
                    <h5>
                        Een verzameling van creativeit als eerbetoon aan de geboortedag 5 februari van
                    </h5>
                    <h2>George Alexander Swildens</h2>
                </div>
                <footer>
                    <p>
                        Thibaux Swildens
                        <a href="https://github.com/Thibaux" target="_blank">
                            <img src="./../assets/socials/github.png" alt="github_link">
                        </a>
                    </p>
                </footer>
            </div>
            <div class="panel">
                <div class="content">
                    <div class="hvr-shrink text-center">
                        <v-dialog v-model="dialog5" transition="dialog-bottom-transition" :width="widthPortret">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    BARTELINE
                                </div>
                            </template>
                            <v-card class="modalImg">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <div class="contentText">
                                        BARTELINE
                                    </div>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog5 = false">
                                        Sluit
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </div>
            </div>
            <!-- ROW 3 -->
            <div class="panel">
                <div class="content">
                    <div class="hvr-shrink text-center">
                        <v-dialog v-model="dialog6" transition="dialog-bottom-transition" :width="width">
                            <template v-slot:activator="{ on, attrs }">
                                <img src="./../assets/content/img/dyl.png" alt="" v-bind="attrs" v-on="on">
                            </template>
                            <v-card fluid fill-width class="modalImg">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <img src="./../assets/content/img/dyl.png" alt="">
                                </v-card-text>
                                <audio controls autoplay>
                                    <source src="./../assets/content/audio/Nits-the_train.mp3" type="audio/mpeg"> Your browser does not support the audio element.
                                </audio>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog6 = false">
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
                        <v-dialog v-model="dialog7" transition="dialog-bottom-transition" :width="widthPortret">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    <p class="dashText">
                                        George hebben wij goed gekend,en spraken hem regelmatig.
                                        <br>
                                        Zowel in familie kring ,als ook op het tuin park, George was altijd een bijzondere man ,
                                        Hij had altijd wel een verhaal,waarin hij duidelijk zijn filosofische inslag tot ons liet komen...
                                    </p>
                                </div>
                            </template>
                            <v-card class="modalImg">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <div class="contentText">
                                        George hebben wij goed gekend,en spraken hem regelmatig.
                                        Zowel in familie kring, als ook op het tuin park, George was altijd een bijzondere man.
                                        Hij had altijd wel een verhaal, waarin hij duidelijk zijn filosofische inslag tot ons liet komen.
                                        Dat deed hij heel goed, en vertelde zijn verhaal zo,dat je daar ook nog wat van kon leren.
                                        <br>
                                        <br>
                                        Het creatieve van George, het schilderwerk dat vonden wij iets apart, en zeer mooi.
                                        Het resultaat daar van kun je zien, op de deuren van het verzorging huis de oude raai.
                                        <br>
                                        <br>
                                        George zal in ons herinnering blijven.
                                        <br>
                                        <br>
                                        Groeten, Elisabeth en Eric Koppe
                                    </div>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog7 = false">
                                        Sluit
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </div>
            </div>
            <div class="panel">
                <div class="contentPortretMid">
                    <div class="hvr-shrink text-center">
                        <v-dialog v-model="dialog8" transition="dialog-bottom-transition" :width="widthPortret">
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
                                    <v-btn color="primary" text @click="dialog8 = false">
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
                <div class="contentPortret">
                    <div class="hvr-shrink text-center">
                        <v-dialog v-model="dialog9" transition="dialog-bottom-transition" :width="widthPortret">
                            <template v-slot:activator="{ on, attrs }">
                                <img src="./../assets/content/img/albertine.png" alt="" v-bind="attrs" v-on="on">
                            </template>
                            <v-card fluid fill-width class="modalImgPortret">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <img src="./../assets/content/img/albertine.png" alt="">
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog9 = false">
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
                        <v-dialog v-model="dialog10" transition="dialog-bottom-transition" :width="widthPortret">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    WIEKE
                                </div>
                            </template>
                            <v-card class="modalImg">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <div class="contentText">
                                        WIEKE
                                    </div>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog10 = false">
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
                        <v-dialog v-model="dialog11" transition="dialog-bottom-transition" :width="widthPortret">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    YVONNE
                                </div>
                            </template>
                            <v-card class="modalImg">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <div class="contentText">
                                        YVONNE
                                    </div>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog11 = false">
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
                        <v-dialog v-model="dialog12" transition="dialog-bottom-transition" :width="widthPortret">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    YVONNE
                                </div>
                            </template>
                            <v-card class="modalImg">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <div class="contentText">
                                        YVONNE
                                    </div>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog12 = false">
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
                        <v-dialog v-model="dialog39" transition="dialog-bottom-transition" :width="width">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    RON
                                </div>
                            </template>
                            <v-card class="modalImg">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <div class="contentText">
                                        RON
                                    </div>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog39 = false">
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
                        <v-dialog v-model="dialog13" transition="dialog-bottom-transition" :width="width">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    <img src="./../assets/content/img/annekevanBeek.jpg" alt="" v-bind="attrs" v-on="on">
                                </div>
                            </template>
                            <v-card class="modalImg">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <img src="./../assets/content/img/annekevanBeek.jpg" alt="">
                                    <div class="contentText">
                                        <i>
                                            Een schilderij dat ik in het atelier bij George maakte. Dit schilderij vond ik aansluiten bij het
                                            onderwerp: "neem er één op mij".
                                            Ik heb het schilderij nabewerkt op de computer en als je goed kijkt zie je George in het glas met ons meekijken.
                                            <br>
                                            <br>
                                            Proost, op goede herinneringen en op het leven!
                                        </i>
                                    </div>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog13 = false">
                                        Sluit
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </div>
            </div>
            <!-- ROW 5 -->
            <div class="panel">
                <div class="content">
                    <div class="hvr-shrink text-center">
                        <v-dialog v-model="dialog14" transition="dialog-bottom-transition" :width="widthPortret">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    SANDER
                                </div>
                            </template>
                            <v-card class="modalImg">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <div class="contentText">
                                        SANDER
                                    </div>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog14 = false">
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
                        <v-dialog v-model="dialog15" transition="dialog-bottom-transition" :width="widthPortret">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    RON
                                </div>
                            </template>
                            <v-card class="modalImg">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <div class="contentText">
                                        RON
                                    </div>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog15 = false">
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
                        <v-dialog v-model="dialog16" transition="dialog-bottom-transition" :width="width">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    RON
                                </div>
                            </template>
                            <v-card class="modalImg">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <div class="contentText">
                                        RON
                                    </div>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog16 = false">
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
                        <v-dialog v-model="dialog17" transition="dialog-bottom-transition" :width="width">
                            <template v-slot:activator="{ on, attrs }">
                                <img src="./../assets/content/video/tumbs/Hanekamp3.png" alt="" v-bind="attrs" v-on="on">
                            </template>
                            <v-card fluid fill-width class="modalImg">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <video width="350" controls>
                                        <source src="./../assets/content/video/Hanekamp3.mp4" type="video/mp4"> Your browser does not support the video tag.
                                    </video>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <p class="author">
                                        Familie Hanekamp
                                    </p>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog17 = false">
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
                        <v-dialog v-model="dialog18" transition="dialog-bottom-transition" :width="width">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    RON
                                </div>
                            </template>
                            <v-card class="modalImg">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <div class="contentText">
                                        RON
                                    </div>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog18 = false">
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
                </div>
            </div>
            <!-- ROW 6 -->
            <div class="panel">
                <div class="content">
                </div>
            </div>
            <div class="panel">
                <div class="content">
                </div>
            </div>
            <div class="panel">
                <div class="content">
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <div class="hvr-shrink text-center">
                        <v-dialog v-model="dialog19" transition="dialog-bottom-transition" :width="widthPortret">
                            <template v-slot:activator="{ on, attrs }">
                                <img src="./../assets/content/video/tumbs/Hanekamp1.png" alt="" v-bind="attrs" v-on="on">
                            </template>
                            <v-card fluid fill-width class="modalImgPortret">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <video width="400" controls>
                                        <source src="./../assets/content/video/Hanekamp1.mp4" type="video/mp4"> Your browser does not support the video tag.
                                    </video>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <p class="author">
                                        Familie Hanekamp
                                    </p>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog19 = false">
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
                </div>
            </div>
            <div class="panel">
                <div class="content">
                </div>
            </div>
            <!-- ROW 7 -->
            <div class="panel">
                <div class="content">
                </div>
            </div>
            <div class="panel">
                <div class="content">
                </div>
            </div>
            <div class="panel">
                <div class="content">
                </div>
            </div>
            <div class="panel">
                <div class="content">
                </div>
            </div>
            <div class="panel">
                <div class="content">
                </div>
            </div>
            <div class="panel">
                <div class="content">
                    <div class="hvr-shrink text-center">
                        <v-dialog v-model="dialog40" transition="dialog-bottom-transition" :width="widthPortret">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    Vestibulum in ligula enim. Nam quis tortor sed quam tempor accumsan non eu dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque imperdiet massa vitae cursus
                                </div>
                            </template>
                            <v-card class="modalImg">
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
                                    <v-btn color="primary" text @click="dialog40 = false">
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
                    <video width="320" height="240" controls>
                        <source src="./../assets/content/video/first.mp4" type="video/mp4"> Your browser does not support the video tag.
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
                    return 400
                case 'sm':
                    return 500
                case 'md':
                    return 600
                case 'lg':
                    return 700
                case 'xl':
                    return 900
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
        // yellow
        background-color: #fdfd96;
    }

    .panel:nth-child(2) {
        // pink
        background-color: #f7e0e1;
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
        // red
        background-color: #ff6961;
    }

    .panel:nth-child(9) {
        // yellow
        background-color: #fdfd96;
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
    height: 100%;
    top: 50%;
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

        &Mid {
            img {
                width: 15vw;
                height: auto;
            }
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

    video {
        max-width: 100%;
        height: auto;
    }

    &Portret {
        img {
            width: 30vw;
            height: auto;
        }


    }



    &landscape {
        img {
            width: 40vw;
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

// TEXT

// dashboard text
.dashText {
    padding: 2vw;
    font-size: 1.1rem;
}

// modal text
.contentText {
    padding: 1vw;
    font-size: 1.3rem;
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


// TEXT OMA
.textOmaDiv {
    display: flex;
    justify-content: center;
    align-content: center;
}

.textOma {
    font-weight: 500;
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
    }

    .modalImg {
        img {
            width: 80%;
        }

        &Portret {
            img {
                width: 65%;
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