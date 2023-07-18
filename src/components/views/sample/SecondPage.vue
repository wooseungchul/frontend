<template>
    <div>
        <h2>Test SecondPage</h2>
        <button @click="onClickOk()">OK</button>
        <button @click="onClickCancel()">CANCEL</button>
    </div>
</template>

<script>
export default {
    name: 'SecondPage',
    props: ['arg'],

    methods: {
        onClose() {
            this.$emit('close');
        },
        onClickOk() {
            if (this.arg.done) {
                this.arg.done();
            }

            this.onClose();
        },

        onClickCancel() {
            if (this.arg.cancel) {
                this.arg.cancel();
            }

            this.onClose();
        },
    },
};
</script>

<style></style>
