<script>
  import TopSellerCard from "../lib/TopSellerCard.svelte";
  import NftCard from "../lib/NFTCard.svelte";
  import Button from "../lib/Button.svelte";
</script>

<section class="max-w-5xl mx-auto px-4 md:px-6 py-4 md:py-14">
  <section
    class="min-w-[300px] max-w-[992px] mx-auto rounded-3xl h-[144px] md:h-[300px] mb-4 md:mb-14 relative overflow-hidden bg-gradient-to-tr from-cr-red-linear-start to-cr-red-linear-end text-cr-light font-extrabold text-xl md:text-5xl flex items-center"
  >
    <div
      class="absolute -top-[30%] -left-[15%] w-[30%] aspect-square rounded-full bg-cr-light opacity-30 bg-blend-color-dodge"
    />

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
      class="flex items-center gap-4 overflow-x-scroll snap-x snap-mandatory"
    >
      <TopSellerCard
        sellerName="mia name"
        sellerPrice={23}
        sellerProfile="/"
        sellerRank={10}
      />
      <TopSellerCard
        sellerName="mia name"
        sellerPrice={23}
        sellerProfile="/"
        sellerRank={10}
      />
      <TopSellerCard
        sellerName="mia name"
        sellerPrice={23}
        sellerProfile="/"
        sellerRank={10}
      />
      <TopSellerCard
        sellerName="mia name"
        sellerPrice={23}
        sellerProfile="/"
        sellerRank={10}
      />
      <TopSellerCard
        sellerName="mia name"
        sellerPrice={23}
        sellerProfile="/"
        sellerRank={10}
      />
      <TopSellerCard
        sellerName="mia name"
        sellerPrice={23}
        sellerProfile="/"
        sellerRank={10}
      />
      <TopSellerCard
        sellerName="mia name"
        sellerPrice={23}
        sellerProfile="/"
        sellerRank={10}
      />
      <TopSellerCard
        sellerName="mia name"
        sellerPrice={23}
        sellerProfile="/"
        sellerRank={10}
      />
      <TopSellerCard
        sellerName="mia name"
        sellerPrice={23}
        sellerProfile="/"
        sellerRank={10}
      />
      <TopSellerCard
        sellerName="mia name"
        sellerPrice={23}
        sellerProfile="/"
        sellerRank={10}
      />
      <TopSellerCard
        sellerName="mia name"
        sellerPrice={23}
        sellerProfile="/"
        sellerRank={10}
      />
      <TopSellerCard
        sellerName="mia name"
        sellerPrice={23}
        sellerProfile="/"
        sellerRank={10}
      />
      <TopSellerCard
        sellerName="mia name"
        sellerPrice={23}
        sellerProfile="/"
        sellerRank={10}
      />
      <TopSellerCard
        sellerName="mia name"
        sellerPrice={23}
        sellerProfile="/"
        sellerRank={10}
      />
      <TopSellerCard
        sellerName="mia name"
        sellerPrice={23}
        sellerProfile="/"
        sellerRank={10}
      />
    </section>
  </section>

  <section class="px-[10px]">
    <h2 class="text-cr-h3 md:text-cr-h1 font-bold my-5 md:my-[30px] capitalize">
      Hot Bids
    </h2>
    <section class="grid grid-cols-2 gap-[10px] md:grid-cols-4">
      <NftCard artLikes={23} artName="art name" artPrice={2.33} />
      <NftCard artLikes={23} artName="art name" artPrice={2.33} />
      <NftCard artLikes={23} artName="art name" artPrice={2.33} />
      <NftCard artLikes={23} artName="art name" artPrice={2.33} />
      <NftCard artLikes={23} artName="art name" artPrice={2.33} />
      <NftCard artLikes={23} artName="art name" artPrice={2.33} />
      <NftCard artLikes={23} artName="art name" artPrice={2.33} />
      <NftCard artLikes={23} artName="art name" artPrice={2.33} />
      <NftCard artLikes={23} artName="art name" artPrice={2.33} />
    </section>
  </section>

  <div class="flex place-content-center py-4 px-2">
    <Button styles="w-full max-w-xs" outline={true}>load more</Button>
  </div>
</section>
