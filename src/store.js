import { writable } from "svelte/store";

export const user = writable(null);

export const topBids = writable([]);
