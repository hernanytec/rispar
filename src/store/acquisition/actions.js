import { api } from "boot/axios";
import { Notify } from "quasar";

const delay = async ms => new Promise(resolve => setTimeout(resolve, ms));

export async function simulate({ commit }, form) {
  try {
    commit("setLoading", true);
    await delay(500);
    const { data } = api.post("/acquisition/simulation", form);
    commit("setSimulation", data);
  } catch (err) {
    Notify.create({
      type: "negative",
      message: "Erro na requisição!"
    });
    console.log(err);
  } finally {
    commit("setLoading", false);
  }
}
