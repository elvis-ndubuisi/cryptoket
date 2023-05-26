<script lang="ts">
  import Icon from "@iconify/svelte";

  export let sellerName: string;
  export let sellerRank: string;
  export let sellerProfile: string;
  export let sellerPrice: string;

</script>

<section
  class="flex-shrink-0 snap-center snap-normal w-[130px] md:w-[180px] h-[165px] md:h-[200px] rounded-3xl border border-cr-grey-100 bg-cr-light text-cr-black-100 dark:border-cr-black-300 dark:bg-cr-black-300 dark:text-cr-light p-[9px] grid grid-rows-[] place-content-center relative"
>
  <div
    class="w-[24px] md:w-[33px] aspect-square rounded-full bg-cr-red-violet text-cr-light text-xs font-semibold grid place-content-center absolute top-[8px] left-[8px] md:top-[14px] md:left-[14px]"
  >
    {sellerRank}
  </div>

  <div class="relative grid place-content-center mt-3 md:mt-4">
    <img
      src={sellerProfile}
      alt={`${sellerName}`}
      class="w-[77px] h-[77px] rounded-full object-cover bg-white"
    />
    <span
      class="absolute bottom-0 right-0 p-[3px] bg-[#00B247] rounded-full text-cr-light"
    >
      <Icon icon="mdi-light:check" width={15} height={15} />
    </span>
  </div>

  <p
    class="line-clamp-1 font-semibold text-sm capitalize text-center my-[3px] md:my-[5px]"
  >
    {sellerName}
  </p>
  <p class="text-sm font-regular text-center uppercase">
    <span class="font-semibold">{sellerPrice}</span> eth
  </p>
</section>
