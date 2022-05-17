<script lang="ts">
import { ref } from "@vue/reactivity";
import { IImage } from "../../api/Entities/Image";
let imageInfo = ref<IImage>();
export default {
    props: {
        TogglePopup: {
            type: String
        },
        ImageInfo: {
            type: Object as () => IImage
        },
        baseUrl: {
            type: String,
            default: "http://localhost:3224"
        }
    },
    beforeMount: function() {
        console.log(this.ImageInfo);
    }
};
</script>

<template>
    <div class="popup">
        <div class="popup-inner">
            <div class="popup-insideimg">
                <img :src="`${baseUrl}/api/image/${ImageInfo.id}`" alt="test" />
            </div>
            <div class="popup-exitbtn">
                <input
                    type="image"
                    id="popup-close"
                    alt="exit"
                    src="/assets/cross.png"
                    @click="TogglePopup()"
                /><!--fixa bilden-->
            </div>
        </div>
        <div class="btm-popup">
            <div class="btm-popuptitle">
                <h2>
                    <strong>{{ ImageInfo.name }}</strong>
                    <!-- Titel på bild tagen från databas-->
                </h2>

                <div class="btm-popupkeywrd">
                    <h4>Nyckelord</h4>
                </div>

                <div class="tag-foundationtot">
                    <div
                        v-for="(keyword, index) in ImageInfo.keywords.slice(
                            0,
                            4
                        )"
                        :key="keyword.id"
                        :class="`tag-foundation${index + 1}`"
                    ></div>
                </div>

                <div class="tagtot">
                    <div
                        v-for="(keyword, index) in ImageInfo.keywords.slice(
                            0,
                            4
                        )"
                        :key="keyword.id"
                        :class="`tag-txt${index + 1}`"
                    >
                        <p>{{ keyword.name }}</p>
                    </div>
                </div>

                <div class="btm-photographer">
                    <h4>Fotograf</h4>
                </div>

                <div class="btm-photographername">
                    <p>{{ ImageInfo.photographer }}</p>
                </div>

                <div class="btm-desctitle">
                    <h4>Beskrivning</h4>
                </div>

                <div class="btm-desc">
                    <p>
                        {{ ImageInfo.description }}
                    </p>
                </div>
                <!--Lägga in så att man kan köra desc när man klickar på en knapp-->

                <div class="btm-imageused">
                    <p>
                        <strong>Denna bild är inköpt och kan användas</strong>
                    </p>

                    <div class="btm-imageusedcolourred">
                        <p>{{ ImageInfo.usesLeft }}</p>
                        <!--N, skriv in så att den kan ändras beroende på databas-->
                    </div>

                    <p><strong>gånger till</strong></p>
                </div>

                <div class="btm-edit">
                    <p><strong>Redigera</strong></p>
                    <!--Måste göra en ny sida för att redigera, lägg in en pennikon också-->
                </div>

                <div class="btm-download">
                    <a
                        target="_blank"
                        :href="`${baseUrl}/api/image/${ImageInfo.id}`"
                    >
                        <p><strong>Ladda ner</strong></p>
                    </a>
                    <!--Gör så att det går att ladda ner, lägg in en nedladdningsikon också-->
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(
        0,
        0,
        0,
        0.5
    ); // Fixa background color så den tar hela skärmen?

    display: flex;
    align-items: center;
    justify-content: center;

    .popup-inner {
        position: relative;
        background: #fff;
        padding: 32px;
        top: -100px;
        height: auto;
        width: auto;
        border-radius: 4%;
        margin-bottom: 5px;

        .popup-insideimg {
            position: relative;
            width: auto;
            height: auto;
        }
        .popup-insideimg img {
            width: 50%;
            height: auto;
        }

        .popup-exitbtn {
            position: relative;
            top: -370px;
            right: -400px;
        }
    }

    .btm-popup {
        position: fixed;
        margin-top: 5px;
        margin-bottom: 5px;
        left: 527px;
        right: 0;
        bottom: 0;
        z-index: 99;
        height: 300px;
        width: 865px;
        background-color: #fff;
        border-radius: 4%;

        align-items: center;
    }
    .btm-popuptitle {
        position: relative;
        left: -350px;

        .btm-popupkeywrd {
            position: relative;
            left: -35px;
            top: -10px;
        }

        .tag-foundationtot {
            position: absolute;
            margin-left: 360px;
            top: 70px;
        }

        .tag-foundation1 {
            position: relative;
            margin-right: 30px;
            height: 30px;
            width: 70px;
            background-color: LightGray;
            border-radius: 15%;
            float: left;
        }

        .tag-foundation2 {
            position: relative;
            margin-right: 30px;
            height: 30px;
            width: 70px;
            background-color: LightGray;
            border-radius: 15%;
            float: left;
        }

        .tag-foundation3 {
            position: relative;
            margin-right: 30px;
            height: 30px;
            width: 70px;
            background-color: LightGray;
            border-radius: 15%;
            float: left;
        }

        .tag-foundation4 {
            position: relative;
            margin-right: 30px;
            height: 30px;
            width: 70px;
            background-color: LightGray;
            border-radius: 15%;
            float: left;
        }

        .tag-foundation5 {
            position: relative;
            margin-right: 30px;
            height: 30px;
            width: 70px;
            background-color: LightGray;
            border-radius: 15%;
            float: left;
        }

        .tagtot {
            position: absolute;
            left: 375px;
            margin-top: -35px;

            .tag-txt1 {
                position: relative;
                margin-right: 60px;
                display: inline-block;
                float: left;
            }

            .tag-txt2 {
                position: relative;
                margin-right: 60px;
                display: inline-block;
                float: left;
            }

            .tag-txt3 {
                position: relative;
                margin-right: 60px;
                display: inline-block;
                float: left;
            }

            .tag-txt4 {
                position: relative;
                margin-right: 60px;
                display: inline-block;
                float: left;
            }

            .tag-txt5 {
                position: relative;
                display: inline-block;
                float: left;
            }
        }
    }

    .btm-photographer {
        position: relative;
        left: -40px;
        top: 20px;
    }

    .btm-photographername {
        position: relative;
        left: -27px;
        top: 5px;
    }

    .btm-desctitle {
        position: relative;
        left: -25px;
    }

    .btm-desc {
        position: relative;
        top: -15px;
        left: 355px;
        max-width: 700px;
    }

    .btm-imageused {
        position: absolute;
        left: 970px;
        top: -30px;
        z-index: 99;
    }
    .btm-imageusedcolourred {
        position: relative;
        color: red;
        margin-top: -15px;
        margin-bottom: -15px;
    }

    .btm-edit {
        position: relative;
        color: purple;
        left: 1100px;
        top: -200px;
        width: 100px;
        height: 50px;
        border: 2px;
        border-style: solid;
        border-radius: 15%;
        border-color: black;
    }

    .btm-download {
        position: relative;
        color: purple;
        left: 1100px;
        top: -200px;
        width: 100px;
        height: 50px;
        border: 2px;
        margin-top: 15px;
        border-style: solid;
        border-radius: 15%;
        border-color: black;
    }
}
</style>
