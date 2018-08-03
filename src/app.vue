<!--添加路有链接，路由组件-->
<template>
    <div>
        <div>
            <router-link to='/index'>Home</router-link>
        </div>
        <div>
            <router-link to='/second'>second</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
