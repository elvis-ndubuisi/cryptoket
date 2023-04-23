<script lang="ts">
  export let isOpen = false;
</script>

{#if isOpen}
  <section
    class="fixed top-0 left-0 z-20 w-screen h-screen bg-cr-grey-200 dark:bg-cr-black-200/90 flex items-center justify-center px-1"
  >
    <section
      class="bg-cr-light dark:bg-cr-black-100 min-w-[300px] w-full max-w-[560px] rounded-t-[20px] rounded-b-none md:rounded-[20px] py-6 md:py-[30px] absolute bottom-0 md:static"
    >
      <slot />
    </section>
  </section>
{/if}
