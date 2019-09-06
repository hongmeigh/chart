<template>
    <div class="container-box">
        <div class="container-title">{{title}}</div>
        <div class="container-count">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: ['title'],
    data() {
        return {
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
}
</script>
<style lang="less" scoped>
    .container-box {
        width: 90%;
        margin-left: 5%;
        background-color: rgba(11,49,143,0.8);
        border-radius: 6px;
        box-shadow: 0 0 6px #fff;
        .container-title {
            width: 100%;
            color: #f8b62d;
            text-align: center;
            font-size: 30px;
            font-weight: bold;
            padding: 6px;
            box-shadow: 0 10px 10px #041171;
        }
    }
    
</style>