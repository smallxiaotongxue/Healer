<template>
  <div class="wrap">

        <HeaderBar class="header-white"></HeaderBar>
        <section>
            <p class="person-message-title">您的生日</p>

            <div class="mt-100 mb-100">
                <PickList></PickList>
               
            </div>

            <div>
                <router-link class="btn-primary" to="inputGender">下一步</router-link>
            </div>
        </section>
        
    </div>
</template>

<script>
    import PickList from '../../components/PickList.vue';
    export default {
        components: {
                PickList,
        },
    }
</script>

