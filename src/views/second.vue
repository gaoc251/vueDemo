<template>
    <div class="title1">
        这里{{page}}页面
        <img src="../images/logo.png">
    </div>
</template>
<script>
export default {
    data: function(){
        return {
            page: 'second'
        }
    }
 }
</script>
<style>
.title1 {
  background: green;
}
</style>

