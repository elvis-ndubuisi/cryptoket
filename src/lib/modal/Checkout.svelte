<script lang="ts">
  import Button from "../Button.svelte";

  export let cancel: () => void;
  export let checkout: () => void;

  export let data: {
    name: string;
    uri: string;
    price: number;
    type: string;
    authorName: string;
  };
</script>

<section class="flex flex-col">
  <h2 class="font-semibold text-2xl text-center mb-6 md:mb-[30px] capitalize">
    check out
  </h2>
  <hr class="border border-cr-grey-300 mb-6 md:mb-[30px]" />
  <div
    class="px-3 md:px-10 flex flex-col gap-10 md:gap-8 items-center justify-between"
  >
    <div
      class="w-full flex items-center justify-between text-base font-semibold capitalize"
    >
      <p>item</p>
      <p>subtotal</p>
    </div>

    <div class="w-full flex items-center justify-between gap-3">
      <img
        src={data.uri}
        alt=" "
        class="h-[52px] md:h-[104px] aspect-square object-cover object-center"
      />
      <div class="flex-1 flex flex-col">
        <p
          class="font-semibold text-sm capitalize line-clamp-1 break-before-page"
        >
          {data.name}
        </p>
        <p class="font-regular text-sm capitalize">{data.authorName}</p>
      </div>

      <p class="font-regular text-base">
        {data.price} <b class="uppercase font-semibold">{data.type}</b>
      </p>
    </div>

    <div
      class="w-full flex items-center justify-between text-base font-semibold capitalize"
    >
      <p>total</p>
      <p>{data.price} <b class="uppercase font-semibold">{data.type}</b></p>
    </div>
  </div>
  <hr class="border border-cr-grey-300 my-6 md:my-[30px]" />
  <div class="flex items-center justify-center gap-3 px-4">
    <Button styles="md:py-3" handleClick={checkout}>check out</Button>
    <Button styles="md:py-3" handleClick={cancel}>cancel</Button>
  </div>
</section>
