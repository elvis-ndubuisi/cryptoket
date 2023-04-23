<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let type: "button" | "submit" | "submit" = "button";
  export let outline: boolean = false;
  export let styles: string = "";
  // export let name: string = "button";
  export let handleClick: (e) => void;

  const dispatch = createEventDispatcher();
</script>

<button
  on:click={(e) => handleClick(e)}
  {type}
  class={`capitalize rounded-lg font-semibold text-sm py-2 w-full min-w-[100px] h-[inherit] ${
    outline
      ? "text-cr-red-violet border border-cr-red-violet  "
      : "text-cr-light bg-gradient-to-tr from-cr-red-linear-start to-cr-red-linear-end"
  } ${styles}`}
>
  <slot />
</button>
