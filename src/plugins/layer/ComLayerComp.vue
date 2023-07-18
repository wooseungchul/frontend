<template>
    <component
        v-if="componentPath"
        :is="componentPath"
        :arg="arg"
        @close="onClose"
    />
</template>

<script>
import { markRaw, defineAsyncComponent } from 'vue';

export default {
    name: 'ComLayerComp',
    data() {
        return {
            componentPath: null,
            arg: {},
        };
    },
    computed: {
        layer() {
            return this.$store.getters['ComLayerStore/getComLayerData'];
        },
    },
    watch: {
        layer() {
            this.componentPath = this.layer.componentPath
                ? (this.componentPath = markRaw(
                      defineAsyncComponent(() =>
                          import(
                              `@/components/views${this.layer.componentPath}`
                          )
                      )
                  ))
                : null;
            this.arg = this.layer.arg;
        },
    },
    methods: {
        onClose() {
            this.$store.commit('ComLayerStore/setComLayerData', {
                componentPath: null,
                arg: {},
            });
        },
    },
};
</script>
