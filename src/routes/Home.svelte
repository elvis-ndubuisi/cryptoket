<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import Icon from "@iconify/svelte";
  import API from "../api";
  import { refreshToken, topBids } from "../store";
  import TopSellerCard from "../lib/TopSellerCard.svelte";
  import NftCard from "../lib/NFTCard.svelte";
  import Button from "../lib/Button.svelte";
  import { nftMock, topSeller } from "../data/mockData";

  let bids: {
    artUri: string;
    artName: string;
    artPrice: number;
    artLikes: number;
    artId: string;
  }[];

  /* Pagination variables */
  let page = 1;
  let size = 4;

  const sub = topBids.subscribe((data) => (bids = data));

  onMount(async () => {
    try {
      const response = await API.get(`/cryptoket/nft?page=${page}`);
      page = response.data.page;
      size = response?.data?.size;
      // topBids.set(response.data.data);
      console.log(response.data.data);
      topBids.set(response.data.data);
    } catch (error) {
      console.log(error);
    }
  });

  onDestroy(sub);
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
      {#each bids as nft}
        <NftCard {...nft} />
      {/each}
    </section>
  </section>

  <div class="flex place-content-center py-4 px-2">
    <Button
      styles="w-full max-w-xs"
      outline={true}
      handleClick={(e) => console.log(e)}>load more</Button
    >
  </div>
</section>
