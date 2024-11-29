import store from "@/store";

describe("store/contador", () => {
  test("compueba que inicie en 0", () => {
    expect(store.state.contador).toBe(0);
  });
  test("compureba que incremente el contador", () => {
    store.commit("incrementar");
    expect(store.state.contador).toBe(1);
  });
  test("compureba que decremente el contador", () => {
    store.commit("decrementar");
    expect(store.state.contador).toBe(0);
  });
});
