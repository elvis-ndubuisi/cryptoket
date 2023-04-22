<script>
  import Button from "../lib/Button.svelte";
  import Modal from "../lib/modal/Modal.svelte";
  import Checkout from "../lib/modal/Checkout.svelte";
  import Icon from "@iconify/svelte";

  let showModal = false;

  import dummyImg from "../assets/shirt-viz-screenshot.png";
</script>

<section
  class="max-w-5xl mx-auto min-h-[70vh] flex flex-col md:flex-row gap-5 pt-6"
>
  <div
    class="grid place-content-center flex-1 border-r border-cr-grey-100 dark:border-cr-black-100 p-3"
  >
    <img
      src={dummyImg}
      alt="nft art item"
      class="min-w-[300px] min-h-[300px] max-w-542px] max-h-[542px] object-cover rounded-lg"
    />
  </div>

  <section class="flex flex-col gap-4 p-3">
    <div class="flex items-center gap-2">
      <h2 class="font-semibold text-2xl capitalize">abstract smoke red blue</h2>
      <span
        class="border rounded-full flex items-center gap-2 py-1 px-2 text-xs"
      >
        <Icon icon="mdi:heart" />
        <p class="font-regular text-[10px]">23</p>
      </span>
    </div>

    <p class="font-regular text-sm">
      From <b class="font-semibold">344.5 ETH</b> . 20 of 50 available
    </p>

    <div>
      <p class="font-regular text-sm capitalize">creator</p>
      <div class="flex items-center gap-3">
        <img
          src={dummyImg}
          alt="profile username"
          class="w-11 aspect-square rounded-full object-cover object-center"
        />
        <p class="font-semibold text-lg capitalize">mia ayana</p>
      </div>
    </div>

    <!-- Tabs & Tab-contents -->
    <section
      class="flex items-center justify-left gap-4 border-b border-cr-grey-100 dark:border-cr-black-100"
    >
      <button
        class="pb-3 border-b-2 min-w-[70px] text-center capitalize font-semibold"
        >details</button
      >
      <button
        class="pb-3 border-b-2 min-w-[70px] text-center capitalize font-semibold"
        >offer</button
      >
      <button
        class="pb-3 border-b-2 min-w-[70px] text-center capitalize font-semibold"
        >history</button
      >
    </section>
    <section class="max-w-md">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, alias
        iusto facilis consectetur temporibus earum!
      </p>
    </section>

    <section class="flex items-center justify-evenly gap-6">
      <Button>Buy for <b>4.5ETH</b></Button>
      <Button outline={true}>Make offer</Button>
    </section>
  </section>
</section>

<Modal isOpen={showModal}>
  <Checkout />
</Modal>
