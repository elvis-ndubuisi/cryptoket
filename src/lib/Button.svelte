<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let type: "button" | "submit" | "submit" = "button";
  export let outline: boolean = false;
  // export let name: string = "button";

  const dispatch = createEventDispatcher();

  function onClick(event) {
    // dispatch click event
    dispatch("_event", { event: event });
  }
</script>

<button
  on:click={onclick}
  {type}
  class={`border-none capitalize rounded-lg font-semibold text-sm py-2 px-7 ${
    outline
      ? "text-cr-red-violet bg-transparent "
      : "text-cr-light bg-gradient-to-tr from-cr-red-linear-start to-cr-red-linear-end"
  }`}
>
  <slot />
</button>
