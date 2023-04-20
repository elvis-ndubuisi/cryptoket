<script lang="ts">
  import Icon from "@iconify/svelte";

  export let sellerName: String;
  export let sellerRank: number;
  export let sellerProfile: string;
  export let sellerPrice: number;
</script>

<section
  class="w-[130px] md:w-[180px] h-[165px] md:h-[200px] rounded-3xl border border-cr-grey-100 bg-cr-light text-cr-black-100 dark:border-cr-black-300 dark:bg-cr-black-300 dark:text-cr-light"
>
  <div
    class="w-[24px] md:w-[33px] aspect-square rounded-full bg-cr-red-violet text-cr-light text-xs font-semibold grid place-content-center"
  >
    {sellerRank}
  </div>
  <div class="relative">
    <img
      src={sellerProfile}
      alt={`${sellerName}`}
      class="w-[77px] h-[77px] rounded-full"
    />
    <span
      class="bg-[#00B247] p-1 aspect-square rounded-full text-sm text-cr-light"
    >
      <Icon icon="mdi-light:check" />
    </span>
  </div>
  <p class="font-semibold text-sm">{sellerName}</p>
  <p class="text-sm font-regular uppercase">
    <span class="font-semibold">{sellerPrice}</span> eth
  </p>
</section>
