<script lang="ts">
  import Icon from "@iconify/svelte";

  let search = "";
</script>

<div
  class="flex-1 flex-shrink flex items-center gap-2 bg-cr-light dark:bg-cr-black-200 text-cr-grey-200 dark:text-cr-light px-4 py-2 border border-cr-grey-100 dark:border-cr-black-200 rounded-lg max-w-[70%] md:max-w-[25%] lg:max-w-none"
>
  <Icon icon="mdi:search" width={24} height={24} />
  <input
    type="text"
    name="search"
    id="search"
    placeholder="Search item here"
    class="flex-1 bg-transparent text-base outline-none font-regular placeholder:capitalize placeholder:text-xs"
    bind:value={search}
  />
</div>
