<template>
    <div class="li-Banner">
        <transition-group tag="ul" name="image">
            <li v-for="(img,index) in imgArray" v-show="index===mark" :key="index">
                <img :src="img">
            </li>
        </transition-group>
        <div class="bullet">
            <span v-for="(item,index) in imgArray" :class="{'active':index===mark}" :key="index"></span>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                timer:null,
                mark:0,
                imgArray:[
                    'src/images/ban1.png',
                    'src/images/ban2.png',
                ]
            }
        },
        methods:{
            autoPlay(){
                this.mark++;
                if(this.mark === 2){
                    this.mark = 0 
                }
            },
            play(){
                this.timer = setInterval(this.autoPlay,3000)
            },
            change(i){
            this.mark = i
            }
        },
        created(){
            this.play()
        }
    }
</script>