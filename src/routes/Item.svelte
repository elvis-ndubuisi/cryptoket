<script>
  import { onMount, onDestroy } from "svelte";
  import { navigate } from "svelte-navigator";
  import Button from "../lib/Button.svelte";
  import Modal from "../lib/modal/Modal.svelte";
  import Checkout from "../lib/modal/Checkout.svelte";
  import Icon from "@iconify/svelte";
  import tabBar from "../data/itemScreenTab";
  import API from "../utils/api";

  let showModal = false;
  let activeTab = tabBar[0].id;
  const tabContents = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Sed quas molestias culpa illum dolores reprehenderit nobis vel similique totam eveniet ratione voluptatibus laborum, adipisci ad optio, beatae quasi minus numquam.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ];

  let isFetching = false;
  let isError = false;
  let data = {};

  export let params;

  import dummyImg from "../assets/shirt-viz-screenshot.png";

  onMount(async () => {
    isFetching = true;
    try {
      const response = await API.get(`/nft/id/${params.itemId}`);
      const { nft } = response.data;
      data = nft;
    } catch (error) {
      console.log(error);
      return null;
    } finally {
      isFetching = false;
    }
  });
</script>

{#if isFetching}
  <section
    class="max-w-5xl mx-auto min-h-[70vh] flex items-center justify-center pt-6"
  >
    <h2 class="text-center text-2xl font-medim text-green-500">
      Fetching NFT data...
    </h2>
  </section>
{:else if isError}
  <section
    class="max-w-5xl mx-auto min-h-[70vh] flex items-center justify-center pt-6"
  >
    <h2 class="text-center font-medium text-red-500">Something went wrong</h2>
  </section>
{:else}
  <section
    class="max-w-5xl mx-auto min-h-[70vh] flex flex-col md:flex-row gap-5 pt-6"
  >
    <div
      class="grid place-content-center flex-1 border-r border-cr-grey-100 dark:border-cr-black-100 p-3"
    >
      <img
        src={data?.nftImage?.secure_url}
        alt={data?.name}
        class="min-w-[300px] min-h-[450px] max-w-542px] max-h-[542px] object-contain rounded-lg"
      />
    </div>

    <section class="flex-[0.8] flex flex-col gap-4 p-3">
      <div class="flex items-center gap-2">
        <h2 class="font-semibold text-2xl capitalize">
          {data?.name}
        </h2>
        <span
          class="border rounded-full flex items-center gap-2 py-1 px-2 text-xs"
        >
          <Icon icon="mdi:heart" />
          <p class="font-regular text-[10px]">23</p>
        </span>
      </div>

      <p class="font-regular text-sm">
        From <b class="font-semibold"
          >{data?.price} <span class="uppercase">{data?.cryptoType}</span></b
        > . 20 of 50 available
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
          <p>{data?.description}}</p>
          <p>{tabContents[0]}</p>
        {:else if activeTab === 1}
          <p>{tabContents[1]}</p>
          <p>{data?.description}</p>
        {:else}
          <p>{data?.description}</p>
        {/if}
      </section>

      <section class="flex items-center justify-evenly gap-6">
        <Button handleClick={() => (showModal = true)}
          >Buy for <b>4.5ETH</b></Button
        >
        <Button outline={true} handleClick={() => {}}>Make offer</Button>
      </section>
    </section>
  </section>
{/if}

<Modal isOpen={showModal}>
  <Checkout
    cancel={() => (showModal = false)}
    data={{
      uri: data?.nftImage?.secure_url,
      name: data?.name,
      price: data?.price,
      type: data?.cryptoType,
      authorName: "fix this",
    }}
  />
</Modal>
