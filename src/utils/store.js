import { writable } from "svelte/store";

export const user = writable(
  sessionStorage.user ? JSON.parse(sessionStorage.getItem("user")) : null
);

export const refreshToken = writable(
  sessionStorage.refreshToken
    ? JSON.parse(sessionStorage.getItem("refreshToken"))
    : null
);

export const topBids = writable([]);

export const userNfts = writable([]);

export const query = writable({
  hQuery: sessionStorage.hQuery ? sessionStorage.get("hQuery") : 1,
  pQuery: sessionStorage.pQuery ? sessionStorage.getItem("pQuery") : 1,
});
