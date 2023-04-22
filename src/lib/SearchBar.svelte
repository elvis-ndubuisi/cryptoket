<script lang="ts">
  import Icon from "@iconify/svelte";

  function handleChange(event) {
    // dispatch value to parent
  }
</script>

<div
  class="flex-1 flex-shrink flex items-center gap-2 bg-cr-light dark:bg-cr-black-200 text-cr-grey-200 dark:text-cr-light px-4 py-2 border border-cr-grey-100 dark:border-cr-black-200 rounded-lg"
>
  <Icon icon="mdi:search" width={24} height={24} />
  <input
    type="text"
    name="search"
    id="search"
    placeholder="Search item here"
    class="flex-1 flex-shrink bg-transparent text-base outline-none font-regular placeholder:capitalize placeholder:text-xs"
    on:change={handleChange}
  />
</div>
