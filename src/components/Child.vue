<template>
  <div>
    <input type="text" />
    <button @click="enviarMensaje">Enviar</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  data() {
    return {
      mensaje: "",
    };
  },
  methods: {
    enviarMensaje() {
      this.$emit("mensaje", this.mensaje);
    },
  },
};
</script>

<style scoped></style>
