<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import Icon from "@iconify/svelte";
  import API from "../utils/api";
  import { topBids } from "../utils/store";
  import TopSellerCard from "../lib/TopSellerCard.svelte";
  import NftCard from "../lib/NFTCard.svelte";
  import Button from "../lib/Button.svelte";
  import { genRandomNumber } from "../utils/mod";
  import { topSeller } from "../data/mockData";

  const controller = new AbortController();

  let topBidsData: {
    _id: string;
    name: string;
    price: string;
    nftImage: { secure_url: string };
  }[];

  /* Pagination variables */
  $: page = 1;
  $: size = 6;

  /* Fetching states */
  let fetching = false;
  let canFetchMore = true;

  const sub = topBids.subscribe((data) => (topBidsData = data));

  async function handleFetchMore() {
    try {
      fetching = true;
      const response = await API.get("/nft", {
        params: {
          page: page,
          size: size,
        },
      });
      if (response.data?.data < 1) {
        canFetchMore = false;
        return;
      }
      topBids.update((data) => [...data, ...response.data?.data]);
      page += response.data.page;
    } catch (error) {
      console.log(error);
    } finally {
      fetching = false;
    }
  }

  onMount(async () => {
    if (topBidsData.length > 0) {
      return;
    }
    try {
      const response = await API.get("/nft", {
        signal: controller.signal,
        params: { page: page, size: size },
      });
      page += response.data.page;
      // size = response?.data?.size;
      topBids.set(response.data.data);
    } catch (error) {
      console.log(error);
    }
  });

  onDestroy(() => {
    controller.abort();
    sub;
  });
</script>

<section class="max-w-5xl mx-auto px-4 md:px-6 py-4 md:py-14">
  <section
    class="min-w-[300px] max-w-[992px] mx-auto rounded-3xl h-[144px] md:h-[300px] mb-4 md:mb-14 relative overflow-hidden bg-gradient-to-tr from-cr-red-linear-start to-cr-red-linear-end text-cr-light font-extrabold text-xl md:text-5xl flex items-center"
  >
    <!-- Circle pattern top left -->
    <div
      class="absolute -top-[30%] -left-[15%] w-[30%] aspect-square rounded-full bg-cr-light opacity-30 bg-blend-color-dodge"
    />

    <!-- Circle pattern bottom right -->
    <div
      class="absolute -bottom-[30%] -right-[5%] w-[30%] aspect-square rounded-full bg-cr-light opacity-30 bg-blend-color-dodge"
    />
    <h1 class="pl-5">
      Discover, collect, and sell <br /> extraordinary NFTs
    </h1>
  </section>

  <section class="relative px-[10px]">
    <h2 class="text-cr-h3 md:text-cr-h1 font-bold mb-5 md:mb-[30px] capitalize">
      Top Sellers
    </h2>

    <section
      class="flex items-center gap-4 overflow-x-scroll snap-x snap-mandatory hide-scrollbar"
    >
      {#each topSeller as seller}
        <TopSellerCard
          sellerName={seller.sellerName}
          sellerPrice={seller.sellerPrice}
          sellerProfile={seller.sellerPrice}
          sellerRank={seller.sellerRank}
        />
      {/each}
    </section>

    <span class="absolute -left-3 top-2/3">
      <Icon
        icon="material-symbols:keyboard-arrow-left"
        width={32}
        height={32}
      />
    </span>
    <span class="absolute -right-3 top-2/3">
      <Icon
        icon="material-symbols:keyboard-arrow-right"
        width={32}
        height={32}
      />
    </span>
  </section>

  <section class="px-[10px]">
    <h2 class="text-cr-h3 md:text-cr-h1 font-bold my-5 md:my-[30px] capitalize">
      Hot Bids
    </h2>
    <section
      class="grid place-items-center grid-cols-2 sm:grid-cols-4 gap-[10px] md:grid-cols-3 lg:grid-cols-4"
    >
      {#each topBidsData as nft}
        <NftCard
          artId={nft._id}
          artLikes={genRandomNumber()}
          artName={nft.name}
          artPrice={parseInt(nft.price)}
          artUri={nft.nftImage.secure_url}
        />
      {/each}
    </section>
  </section>

  {#if canFetchMore}
    <div class="flex place-content-center py-4 px-2">
      <Button
        styles="w-full max-w-xs"
        outline={true}
        handleClick={(e) => handleFetchMore()}
        >{fetching ? "Loading Nfts....." : "load more"}</Button
      >
    </div>
  {:else}
    <div class="py-12" />
  {/if}
</section>
