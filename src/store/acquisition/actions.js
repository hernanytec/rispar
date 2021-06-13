import { api } from "boot/axios";

const delay = async ms => new Promise(resolve => setTimeout(resolve, ms));

export async function simulate({ commit }, form) {
  try {
    commit("setLoading", true);
    await delay(500);
    //const { data } = api.post("/acquisition/simulation", form);
    // commit("setSimulation", data);
  } catch (err) {
    console.log("aqui", err);
  } finally {
    commit("setLoading", false);
  }
}
