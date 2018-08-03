<template>
    <div class="title">
        这里{{page}}页面
    </div>
</template>
<script>
export default {
    data: function(){
        return {
            page: 'index'
        }
    }
 }
</script>
<style>
.title {
  background: red;
}
</style>

