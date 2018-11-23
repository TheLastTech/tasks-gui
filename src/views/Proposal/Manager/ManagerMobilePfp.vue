<template>
    <img class="d-lg-none img-fluid rounded mx-auto d-block d-sm-none d-md-none" :src="manager.avatar"/>
</template>
<script>
    export default {
        name: 'manager-mobile-pfp',
        props: {
          manager: {},
        },
    };
</script>
