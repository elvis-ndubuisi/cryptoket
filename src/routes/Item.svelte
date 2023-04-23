<script>
  import Button from "../lib/Button.svelte";
  import Modal from "../lib/modal/Modal.svelte";
  import Checkout from "../lib/modal/Checkout.svelte";
  import Icon from "@iconify/svelte";
  import tabBar from "../data/itemScreenTab";

  let showModal = false;
  let activeTab = tabBar[0].id;
  const tabContents = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Sed quas molestias culpa illum dolores reprehenderit nobis vel similique totam eveniet ratione voluptatibus laborum, adipisci ad optio, beatae quasi minus numquam.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ];

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
      <p class="font-regular text-sm capitalize mb-4">creator</p>
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
      {#each tabBar as tab}
        <button
          class={`pb-3 ${
            tab.id === activeTab ? "border-b-2" : ""
          } min-w-[70px] text-center capitalize font-semibold`}
          tabindex={tab.id}
          on:click={(e) => {
            activeTab = tab.id;
          }}
        >
          {tab.name}
        </button>
      {/each}
    </section>
    <section class="max-w-md">
      {#if activeTab === 0}
        <p>{tabContents[0]}</p>
      {:else if activeTab === 1}
        <p>{tabContents[1]}</p>
      {:else if activeTab === 2}
        <p>{tabContents[2]}</p>
      {/if}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas
        molestias culpa illum dolores reprehenderit nobis vel similique totam
        eveniet ratione voluptatibus laborum, adipisci ad optio, beatae quasi
        minus numquam.
      </p>
    </section>

    <section class="flex items-center justify-evenly gap-6">
      <Button handleClick={() => (showModal = true)}
        >Buy for <b>4.5ETH</b></Button
      >
      <Button outline={true} handleClick={() => {}}>Make offer</Button>
    </section>
  </section>
</section>

<Modal isOpen={showModal}>
  <Checkout cancel={() => (showModal = false)} />
</Modal>
