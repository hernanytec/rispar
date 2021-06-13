import { api } from "boot/axios";
import { Notify } from "quasar";

export async function simulate({ commit }, form) {
  try {
    commit("setLoading", true);
    const { data } = await api.post("/acquisition/simulation", form);
    commit("setSimulation", data);
  } catch (err) {
    Notify.create({
      type: "negative",
      message: "Erro na requisição"
    });
    console.log(err);
  } finally {
    commit("setLoading", false);
  }
}
