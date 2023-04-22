<script>
  import Button from "../lib/Button.svelte";
  import SearchBar from "../lib/SearchBar.svelte";
  import NftCard from "../lib/NFTCard.svelte";

  import dummyImg from "../assets/shirt-viz-screenshot.png";
</script>

<section>
  <section class="h-[367px] md:h-[518px] relative z-0">
    <img
      src={dummyImg}
      alt="profile background"
      class="absolute top-0 left-0 -z-10 h-[65%] md:h-[80%] w-full object-cover object-center"
    />
    <div
      class="flex flex-col items-center gap-2 relative top-[50%] md:top-[70%]"
    >
      <img
        src={dummyImg}
        alt=""
        class="border-4 border-cr-black-100 h-[113.45px] aspect-square rounded-full overflow-hidden"
      />
      <p class="text-cr-light font-semibold text-xl text-center capitalize">
        mira adams
      </p>
    </div>
  </section>

  <section class="max-w-5xl mx-auto mt-8">
    <section class="flex items-center justify-between gap-3 my-4">
      <SearchBar />

      <select name="" id="">
        <option value="m">recently added</option>
        <option value="m">most viewed</option>
        <option value="m">liked by you</option>
      </select>
    </section>

    <section class="grid grid-cols-2 gap-[10px] md:grid-cols-4">
      <NftCard artLikes={23} artName="art name" artPrice={2.33} />
      <NftCard artLikes={23} artName="art name" artPrice={2.33} />
      <NftCard artLikes={23} artName="art name" artPrice={2.33} />
      <NftCard artLikes={23} artName="art name" artPrice={2.33} />
      <NftCard artLikes={23} artName="art name" artPrice={2.33} />
      <NftCard artLikes={23} artName="art name" artPrice={2.33} />
      <NftCard artLikes={23} artName="art name" artPrice={2.33} />
      <NftCard artLikes={23} artName="art name" artPrice={2.33} />
    </section>

    <div class="flex place-content-center mt-7 pb-5 px-2">
      <Button styles="w-full max-w-xs" outline={true}>load more</Button>
    </div>
  </section>
</section>
