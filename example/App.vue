<script lang="ts" setup>
import { VmsComponent } from '@vms/vue';
</script>
<template>
    <h1>Vite Monorepo Starter</h1>
    <VmsComponent msg="Hello Vite Monorepo Starter" :n="2">
        <p>Slot Content</p>
    </VmsComponent>
</template>
