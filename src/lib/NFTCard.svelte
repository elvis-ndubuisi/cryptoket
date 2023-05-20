<script lang="ts">
  import Icon from "@iconify/svelte";

  export let artId: string;
  export let artUri: string;
  export let artName: string;
  export let artPrice: number;
  export let artLikes: number;
</script>

<a
  href={`item/${artId}`}
  class="w-[145px] md:w-[233px] h-[212px] md:h-[319px] bg-cr-light text-cr-black-100 dark:bg-cr-black-300 dark:text-cr-light px-2 py-3 md:p-2 rounded-xl shadow-lg"
>
  <img
    src={artUri}
    alt={artName}
    class="bg-cr-grey-100 rounded-xl h-[143.94px] md:h-[230px] object-cover object-center"
  />
  <p
    class="line-clamp-1 font-semibold text-xs my-2 capitalize text-cr-black-100 dark:text-cr-light"
  >
    {artName}
  </p>
  <div
    class="flex items-center justify-between text-cr-black-100 dark:text-cr-light"
  >
    <p class="font-regular text-[10px] uppercase">
      <span class="font-semibold">{artPrice}</span> eth
    </p>

    <button type="button" class="text-dark flex gap-1 items-center px-1">
      <Icon icon="mdi:heart" />
      <p class="font-regular text-[10px]">{artLikes}</p>
    </button>
  </div>
</a>
