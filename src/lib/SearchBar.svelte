<script lang="ts">
  import Icon from "@iconify/svelte";

  function handleChange(event) {
    // dispatch value to parent
  }
</script>

<div
  class="flex-1 flex items-center bg-cr-light dark:bg-cr-black-200 text-cr-grey-200 dark:text-cr-light px-4 py-2 border border-cr-grey-100 dark:border-cr-black-200 rounded-lg"
>
  <span class="text-2xl">
    <Icon icon="mdi:search" />
  </span>
  <input
    type="text"
    name="search"
    id="search"
    placeholder="Search item here"
    class="flex-1 bg-transparent text-base outline-none font-regular placeholder:capitalize placeholder:text-xs"
    on:change={handleChange}
  />
</div>
