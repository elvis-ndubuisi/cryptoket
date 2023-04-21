<script lang="ts">
  export let isOpen = false;
</script>

{#if isOpen}
  <section
    class="absolute top-0 left-0 w-screen h-screen bg-cr-black-200 opacity-90 grid items-center justify-center"
  >
    <section class="bg-cr-black-100 w-[586px] rounded-[20px] p-5">
      <slot />
    </section>
  </section>
{/if}
