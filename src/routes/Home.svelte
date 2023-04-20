<script>
  import TopSellerCard from "../lib/TopSellerCard.svelte";
  import NftCard from "../lib/NFTCard.svelte";
</script>

<section class="max-w-5xl mx-auto px-4 md:px-6">
  <section
    class="min-w-[300px] max-w-[992px] mx-auto rounded-3xl h-[144px] md:h-[300px] my-4 md:my-14 relative overflow-hidden bg-gradient-to-tr from-cr-red-linear-start to-cr-red-linear-end text-cr-light font-extrabold text-xl md:text-5xl flex items-center"
  >
    <h1>
      Discover, collect, and sell <br /> extraordinary NFTs
    </h1>
  </section>

  <section class="relative px-[10px]">
    <h2 class="text-cr-h3 md:text-cr-h1 font-bold mb-5 md:mb-[30px] capitalize">
      Top Sellers
    </h2>
    <section class="overflow-scroll">
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
    <h2 class="text-cr-h3 md:text-cr-h1 font-bold mb-5 md:mb-[30px] capitalize">
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
</section>
