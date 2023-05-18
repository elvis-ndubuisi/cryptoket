<script>
  import Button from "../lib/Button.svelte";
  import SearchBar from "../lib/SearchBar.svelte";
  import NftCard from "../lib/NFTCard.svelte";
  import { userNfts, user } from "../utils/store";
  import { genRandomNumber } from "../utils/mod";

  import dummyImg from "../assets/shirt-viz-screenshot.png";
  import { onMount } from "svelte";
  import API from "../utils/api";

  let fetching = false;

  $: nfts = $userNfts;

  $: page = 1;
  $: size = 6;

  function searchNfts(e) {
    const newdata = $userNfts.filter((nft) => {
      return nft.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    nfts = newdata;
  }

  async function handleLoadMore() {
    try {
      fetching = true;
      const response = await API.get(`/user/nft/${$user._id}`, {
        params: { page: page, size: size },
      });
      console.log(response);
      userNfts.update((data) => [...data, ...response.data]);
      page += response.data.page;
    } catch (error) {
      console.log(error);
    } finally {
      fetching = false;
    }
  }

  onMount(async () => {
    if ($userNfts.length > 0) return;
    try {
      fetching = true;
      const response = await API.get(`/user/nft/${$user._id}`, {
        params: { page: page, size: size },
      });

      !(response.status === 200) && console.log("Something went wrong");
      userNfts.update((data) => (data = response.data?.data));
      page += response.data.page;
    } catch (error) {
      console.log(error);
    } finally {
      fetching = false;
    }
  });
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
        {$user?.username}
      </p>
    </div>
  </section>

  <section class="max-w-5xl mx-auto mt-8">
    <section class="flex items-center justify-center w-full gap-3 my-4">
      <SearchBar handleSearch={(e) => searchNfts(e)} />
    </section>

    <section
      class="grid place-items-center grid-cols-2 sm:grid-cols-4 gap-[10px] md:grid-cols-3 lg:grid-cols-4"
    >
      {#if !(nfts.length > 0)}
        <span>no nfts</span>
      {:else}
        {#each nfts as nft}
          <NftCard
            artId={nft._id}
            artLikes={genRandomNumber()}
            artName={nft.name}
            artPrice={parseInt(nft.price)}
            artUri={nft.nftImage.secure_url}
          />
        {/each}
      {/if}
    </section>

    <div class="flex place-content-center mt-7 pb-5 px-2">
      <Button
        styles="w-full max-w-xs"
        outline={true}
        handleClick={() => handleLoadMore()}
        >{fetching ? "Loading NFTs..." : "load more"}</Button
      >
    </div>
  </section>
</section>
