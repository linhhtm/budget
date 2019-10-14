<template>
    <div class="">
        <div>
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>
 
<script>
    export default{
    }
</script>
<style lang="sass">
    @import './style.scss';
</style>
