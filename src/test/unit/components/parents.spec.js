import { mount } from "@vue/test-utils";
import Parent from "@/components/Parent.vue";
import Child from "@/components/Child.vue";

describe("Verifica comunicacion entre componente padre e hijo", () => {
  test("Deberá agregar una nueva tarea", async () => {
    const wrapper = mount(Parent);
    const child = wrapper.findComponent(Child);
    await child.setData({mensaje: "mensaje enviado desde el hijo"});
    await child.find("button").trigger("click");
    expect(wrapper.vm.mensajeRecibido).toBe("mensaje enviado desde el hijo");
  });
});
