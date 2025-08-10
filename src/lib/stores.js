import { writable } from "svelte/store";

export const angka = writable(0);

export const user = writable({
  name: "",
  email: "",
});
