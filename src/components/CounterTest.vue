<template>
    <div class="Main">
        <countdown v-if="showCountdown" @end="handleCountdownEnd" ref="countdown" :time="time" :interval="100" tag="p">
            <template slot-scope="props">{{ props.days }} days, {{ props.hours }} hours, {{ props.minutes }} minutes, {{ props.seconds }}.{{ Math.floor(props.milliseconds / 100) }} seconds.</template>
        </countdown>
        <div v-else>
            l;askjdfl;asjkdfl;sjkf
        </div>
    </div>
</template>
<script>
export default {
    name: 'Grid',
    props: {
        emitevents: true,
    },
    data() {
        let now = new Date();
        let reveal = new Date("January 22 2021 10:07");

        return {
            counting: false,
            showCountdown: true,
            time: reveal - now,
        }
    },
    methods: {
        startCountdown: function() {
            this.counting = true;
            this.showCountdown = true;
        },
        handleCountdownEnd: function() {
            this.counting = false;
            this.showSite()
        },
        showSite() {
            this.showCountdown = false;
        },
    }
}
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;447&display=swap');

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
        // blue
        background-color: #aec6cf;
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
        background-color: #aec6cf;
    }

    .panel:nth-child(5) {
        background-color: #aec6cf;
    }

    .panel:nth-child(6) {
        background-color: #ff6961;
    }

    .panel:nth-child(7) {
        background-color: #fdfd96;
    }

    .panel:nth-child(8) {
        background-color: #fdfd96;
    }

    .panel:nth-child(9) {
        background-color: #ff6961;
    }

    .panel:nth-child(10) {
        background-color: #fdfd96;
    }

    .panel:nth-child(11) {
        background-color: #aec6cf;
    }

    .panel:nth-child(12) {
        background-color: #aec6cf;
    }

    .panel:nth-child(13) {
        background-color: #fdfd96;
    }

    .panel:nth-child(14) {
        background-color: #ff6961;
    }

    .panel:nth-child(15) {
        background-color: #fdfd96;
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

    .titleContent {
        width: 75%;

    }

    h2 {
        font-size: 2vw;
        font-weight: 600;
    }

    h4 {
        font-size: 1.8vw;
        font-weight: 500;
    }

    h5 {
        margin-bottom: 3%;
        font-size: 1.5vw;
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
    background-color: #444;
    color: #fff;
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
        width: 50vw;
        height: auto;
        border-radius: 3px;
    }
}

.titleAorV {
    color: black;
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

    .dialogTwo {
        width: 100%;
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