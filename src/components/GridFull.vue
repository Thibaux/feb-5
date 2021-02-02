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
                                    Je lieve Jeanet S
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
            <!-- ROW 2 -->
            <div class="panel">
                <div class="contentVierkant">
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
                                <p class="contentText">
                                    The Nits - The train
                                </p>
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
                                        Hij had altijd wel een verhaal,waarin hij duidelijk zijn filosofische inslag tot ons liet komen
                                        <p class="morePoints">
                                            . . .
                                        </p>
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
                        <v-dialog v-model="dialog39" transition="dialog-bottom-transition" :width="width">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    <img src="./../assets/content/img/pa.jpg" alt="">
                                </div>
                            </template>
                            <v-card class="modalImgPortret">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <div class="contentText">
                                        <img src="./../assets/content/img/pa.jpg" alt="">
                                        <p class="pa">
                                            Onder het wijze oog van George’s Boeddha
                                            <br>
                                            proosten we op zijn leven, inspiratie en optimisme.
                                        </p>
                                    </div>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <p class="author">
                                        Liesbeth en Archim
                                    </p>
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
                                    <img src="./../assets/content/img/annekevanBeek.jpg" alt="">
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
                                    <p class="author">
                                        Anneke van Beek
                                    </p>
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
            <div class="panel">
                <div class="content">
                    <div class="hvr-shrink text-center">
                        <v-dialog v-model="dialog12" transition="dialog-bottom-transition" :width="width">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    <p class="dashText">
                                        George Swildens, De kunstenaar van de Creatieve expressie waar de woorden tekort schoten net als zijn leven.
                                        <p class="morePoints">
                                            . . .
                                        </p>
                                    </p>
                                </div>
                            </template>
                            <v-card class="modalImgLandscape">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <div class="contentText">
                                        George Swildens, De kunstenaar van de Creatieve expressie waar de woorden tekort schoten net als zijn leven.
                                        <br>
                                        Zijn beeldende begeleiding als kunstenaar ging niet alleen om de kunst alleen, het maken van kunst was voor hem de overdragende trap. Het vormgeven met o.a beeldend materiaal was altijd dienstbaar aan het emotionele proces van George Swildens.
                                        <br>
                                        Het maken van kunst was zijn doel op zich, het was een doel van creatieve expressie in een andere taal: de taal van beelden en symbolen om zich te kunnen uiten als woorden tekort schieten. Het moment dat iemand open stond voor beeldende begeleiding van George was daar “opeens” het beeldende materiaal: de verf, het gekleurde papier, de potloden.
                                        <br>
                                        Dat deed iets in het contact tussen zijn vele cursisten van George als begeleider, het werd informeler, laagdrempeliger, gewoner. Bezig zijn met kleuren, beelden, symbolen en verhalen doet beroep op het non-verbale, op het gevoelsmatige, op het hart, op plezier en het maakte verbinding met het “gezonde deel” van mensen: hun essentie die los staat van een ziekte of een tekort komingen.
                                        <br>
                                        <br>
                                        Mathijs Langkemper.
                                        <br>
                                        <br>
                                        <img src="./../assets/content/img/mathijs.jpg" alt="">
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
            <!-- ROW 5 -->
            <div class="panel">
                <div class="content">
                    <div class="hvr-shrink text-center">
                        <v-dialog v-model="dialog15" transition="dialog-bottom-transition" :width="width">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    <img src="./../assets/content/img/guido.jpeg" alt="">
                                </div>
                            </template>
                            <v-card class="modalImg">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <div class="contentText">
                                        <img src="./../assets/content/img/guido.jpeg" alt="">
                                    </div>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <p class="author">
                                        “Generatie M” door Mees, Ilse en Guido.
                                    </p>
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
                        <v-dialog v-model="dialog35" transition="dialog-bottom-transition" :width="widthPortret">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    <img src="./../assets/content/img/lies1.jpg" alt="">
                                </div>
                            </template>
                            <v-card class="modalImg">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <div class="contentText">
                                        <img src="./../assets/content/img/lies1.jpg" alt="">
                                    </div>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <p class="author">
                                        Lies Wegman
                                    </p>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog35 = false">
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
                        <v-dialog v-model="dialog34" transition="dialog-bottom-transition" :width="widthPortret">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    <img src="./../assets/content/img/lies2.jpg" alt="">
                                </div>
                            </template>
                            <v-card class="modalImg">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <div class="contentText">
                                        <img src="./../assets/content/img/lies2.jpg" alt="">
                                    </div>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <p class="author">
                                        Lies Wegman
                                    </p>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog34 = false">
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
                        <v-dialog v-model="dialog33" transition="dialog-bottom-transition" :width="widthPortret">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    <img src="./../assets/content/video/tumbs/jurre.png" alt="">
                                </div>
                            </template>
                            <v-card class="modalImgPortret">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <div class="contentText">
                                        <video width="350" controls>
                                            <source src="./../assets/content/video/jurre.mp4" type="video/mp4"> Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <p class="author">
                                        Jurre Swildens
                                    </p>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog33 = false">
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
                        <v-dialog v-model="dialog38" transition="dialog-bottom-transition" :width="width">
                            <template v-slot:activator="{ on, attrs }">
                                <img src="./../assets/content/img/audio.png" alt="" v-bind="attrs" v-on="on">
                            </template>
                            <v-card fluid fill-width class="modalImg">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <audio controls autoplay>
                                        <source src="./../assets/content/audio/Gilber_Becaud-Cest_En_Septembre.mp3" type="audio/mpeg"> Your browser does not support the audio element.
                                    </audio>
                                    <p class="contentText">
                                        Gilbert Bécaud - C'est En Septembre
                                    </p>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <p class="author">
                                        Tjarda Dubois
                                    </p>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog38 = false">
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
                        <v-dialog v-model="dialog29" transition="dialog-bottom-transition" :width="width">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    <p class="dashTextLeft">
                                        <!-- REMKO -->
                                        Chi
                                        <br>
                                        <br>
                                        Chi: de stroom
                                        <br>
                                        Niet stuwen, sturen
                                        <br>
                                        Met kunst naar binnen
                                        <br>
                                        Schilderen van vorm, structuur en soliditeit
                                        <br>
                                        Voor nu, toen, eeuwigheid
                                    </p>
                                </div>
                            </template>
                            <v-card class="modalImgLandscape">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <div class="contentText">
                                        <p class="centerdLeft">
                                            Chi
                                            <br>
                                            <br>
                                            Chi: de stroom
                                            <br>
                                            Niet stuwen, sturen
                                            <br>
                                            Met kunst naar binnen
                                            <br>
                                            Schilderen van vorm, structuur en soliditeit
                                            <br>
                                            Voor nu, toen, eeuwigheid
                                        </p>
                                    </div>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog29 = false">
                                        Sluit
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </div>
            </div>
            <!-- ROW 6 -->
            <div class="panel">
                <div class="contentPortretMid">
                    <div class="hvr-shrink text-center">
                        <v-dialog v-model="dialog36" transition="dialog-bottom-transition" :width="widthPortret">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    <img src="./../assets/content/img/ron2.jpg" alt="">
                                </div>
                            </template>
                            <v-card class="modalImg">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <div class="contentText">
                                        <img src="./../assets/content/img/ron2.jpg" alt="">
                                    </div>
                                    <p class="contentText">
                                        Een afbeelding van mijn eerste schilderij dat ik in het begin bij George op les gemaakt hebt.
                                        Was meteen gefascineerd door de manier waarop hij les gaf.
                                        <br>
                                        Altijd iedereen in zijn waarde laten en heel veel geduld met al die verschillende types.
                                    </p>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <p class="author">
                                        Ron Beuming
                                    </p>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog36 = false">
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
                        <v-dialog v-model="dialog37" transition="dialog-bottom-transition" :width="width">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    <img src="./../assets/content/img/ron1.jpg" alt="">
                                </div>
                            </template>
                            <v-card class="modalImg">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <p class="contentText">
                                        <img src="./../assets/content/img/ron1.jpg" alt="">
                                        Doe er ook een afbeelding bij van mijn laatste werkstuk dat ik vorig jaar gemaakt om het bericht wat kleurrijker te maken.
                                    </p>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <p class="author">
                                        Ron Beuming
                                    </p>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog37 = false">
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
                        <v-dialog v-model="dialog32" transition="dialog-bottom-transition" :width="width">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    <img src="./../assets/content/img/vissenkom1.jpeg" alt="">
                                </div>
                            </template>
                            <v-card class="modalImg">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <p class="contentText">
                                        <img src="./../assets/content/img/vissenkom1.jpeg" alt="">
                                    </p>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <p class="author">
                                        IJse Swildens
                                    </p>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog32 = false">
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
                    <div class="hvr-shrink text-center">
                        <v-dialog v-model="dialog31" transition="dialog-bottom-transition" :width="width">
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs" v-on="on">
                                    <img src="./../assets/content/img/vissenkom2.jpeg" alt="">
                                </div>
                            </template>
                            <v-card class="modalImg">
                                <v-card-title class="headline grey lighten-2">
                                </v-card-title>
                                <v-card-text>
                                    <p class="contentText">
                                        <img src="./../assets/content/img/vissenkom2.jpeg" alt="">
                                    </p>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <p class="author">
                                        Jurre Swildens
                                    </p>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog31 = false">
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

    &Vierkant {
        img {
            width: 70%;
            height: auto;
            border-radius: 5px;
        }
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

    &Landscape {
        img {
            width: 30vw;
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

    &Left {
        font-size: 1.1rem;
        display: flex;
        width: 85%;
        margin-left: 15%;
        text-align: left;
        // margin-top: 1rem;
    }
}

.morePoints {
    font-weight: 800;
    font-size: 1.4rem;
    margin-top: -3.5rem;
}


// modal text
.contentText {
    padding: 1vw;
    font-size: 1.3rem;
}

// modal text align left
.pa {
    display: flex;
    width: 85%;
    margin-left: 15%;
    margin-top: 1rem;
    text-align: left;
}

// centerdLeft
.centerdLeft {
    display: flex;
    width: 70%;
    margin-left: 30%;
    margin-top: 1rem;
    text-align: left;
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

// AUDIO
.audioDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    .authorAudio {
        margin-top: 2rem;
        color: #313639;
    }
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

        &Landscape {
            img {
                width: 40vw;
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

    .pa {
        width: 95%;
        margin-left: 5%;
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

        &Landscape {
            img {
                width: 50vw;
                height: auto;
            }
        }
    }

    .pa {
        width: 95%;
        margin-left: 5%;
    }

    .contentText {
        font-size: 1rem;
    }

}
</style>