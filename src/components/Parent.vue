<template>
    <div>
        <p>
            {{ mensajeRecibido }}
        </p>
        <Child @mensaje="recibirMensaje" />
    </div>
</template>

<script>
import Child from './Child.vue';
export default {
    name: 'Parent',
    components: {
        Child
    },
    data() {
        return {
            mensajeRecibido: ''
        };
    },
    methods: {
        recibirMensaje(mensaje) {
            this.mensajeRecibido = mensaje;
        }
    }
};
</script>

<style scoped>
</style>