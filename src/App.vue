<template>
    <div data-app id="app">
        <countdown class="Time" v-if="showCountdown" @end="handleCountdownEnd" ref="countdown" :time="TimeToReveal" :interval="100" tag="p">
            <template slot-scope="props">
                <div class="values">
                    <div class="days">
                        {{ props.days }}
                        <p>dagen</p>
                    </div>
                    <div class="hours">
                        {{ props.hours }}
                        <p>uur</p>
                    </div>
                    <div class="minutes">
                        {{ props.minutes }}
                        <p>minuten</p>
                    </div>
                    <div class="seconds">
                        {{ props.seconds }}.{{ Math.floor(props.milliseconds / 100) }}
                        <p>seconden</p>
                    </div>
                </div>
            </template>
        </countdown>
        <div v-else>
            <GridFull></GridFull>
        </div>
    </div>
</template>
<script>
import GridFull from './components/GridFull.vue'

export default {
    name: 'App',
    props: {
        emitevents: true,
    },
    components: {
        GridFull,
    },
    data() {
        let now = new Date();
        let reveal = new Date(2021, 1, 5, 21, 0, 0);
        // let reveal = new Date(2021, 0, 5, 21, 0, 0);
        let time = reveal - now;

        return {
            TimeToReveal: time,
            counting: false,
            showCountdown: true
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
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;447&display=swap');

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
    font-family: 'Raleway', sans-serif;
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

.Time {
    display: flex;
    justify-items: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;

    .values {
        width: 100%;
        font-size: 6vw;
        font-weight: 400;
        display: flex;
        justify-content: center;
        align-content: center;

        >div {}

        div:not(:first-child) {
            margin-left: 5%;
        }

        p {
            font-size: 2vw;
        }
    }
}
</style>