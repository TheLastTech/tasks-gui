<template>
    <div class="card-post__image" :style="{ backgroundImage: 'url(\'' + Proposal.backgroundImage + '\')' }">
        <d-badge pill :class="['card-post__category', 'bg-' + Proposal.categoryTheme ]">{{ Proposal.category }}
        </d-badge>
        <div class="card-post__author d-flex">
            <a href="#" class="card-post__author-avatar card-post__author-avatar--small"
               :style="{ backgroundImage: 'url(\'' + Proposal.authorAvatar + '\')' }">Written by {{ Proposal.author
                }}</a>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'proposal-header',
        props: {
            Proposal: {},
        },
    };
</script>
