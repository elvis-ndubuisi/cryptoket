<script lang="ts">
  export let isOpen = false;
</script>

{#if isOpen}
  <section
    class="absolute top-0 left-0 w-screen h-screen bg-cr-black-200 opacity-90 grid items-center justify-center"
  >
    <slot />
  </section>
{/if}
