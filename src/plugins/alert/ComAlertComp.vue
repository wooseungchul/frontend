<template>
    <div class="modal-mask" v-if="arg.isDisplay">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header">
                    <slot name="header" v-if="arg.title">
                        {{ arg.title }}
                    </slot>
                </div>

                <div class="modal-body">
                    <slot name="body"> {{ arg.message }} </slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer" v-if="arg.type === 'alert'">
                        <button class="modal-default-button" @click="onDone()">
                            {{ arg.doneBtnTitle }}
                        </button>
                    </slot>

                    <slot name="footer" v-if="arg.type === 'confirm'">
                        <button class="modal-default-button" @click="onDone()">
                            {{ arg.doneBtnTitle }}
                        </button>
                        <button
                            class="modal-default-button"
                            @click="onCancel()"
                        >
                            {{ arg.cancelBtnTitle }}
                        </button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ComAlertComp',
    data() {
        return {
            arg: {
                isDisplay: false,
                title: '',
                message: '',
                type: '',
                done: () => {},
                cancel: () => {},
                doneBtnTitle: '',
                cancelBtnTitle: '',
            },
        };
    },
    computed: {
        getAlertData() {
            return this.$store.getters['ComAlertStore/getComAlertData'];
        },
    },
    watch: {
        getAlertData() {
            this.arg = this.getAlertData;
        },
    },
    methods: {
        onClose() {
            this.$alert.close();
        },

        onDone() {
            this.onClose();

            if (this.arg.done) {
                this.arg.done();
            }
        },

        onCancel() {
            this.onClose();

            if (this.arg.cancel) {
                this.arg.cancel();
            }
        },
    },
};
</script>

<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
