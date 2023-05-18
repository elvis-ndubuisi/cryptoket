<script>
  import Icon from "@iconify/svelte";

  export let nftImage;
  export let nftCreator;
  export let nftName;
</script>

<section class="flex flex-col">
  <h2 class="font-semibold text-2xl text-center mb-6 capitalize">
    payment successful
  </h2>
  <hr class="border border-cr-grey-100 dark:border-cr-black-100 mb-6" />

  <img
    src={nftImage}
    alt="item"
    class="max-h-[206px] max-w- mx-2 aspect-square md:aspect-video object-cover object-center mb-6 md:mb-[30px]"
  />

  <p class="text-center font-regular text-base max-w-[365px] mx-auto">
    You have successfully purchased
    <b class="font-semibold capitalize">
      {nftName}
    </b>
    from
    <b class="font-semibold capitalize">{nftCreator}</b>
  </p>

  <hr class="border border-cr-grey-100 dark:border-cr-black-100" />
  <section>
    <h3 class="text-center font-semibold my-3">Share</h3>
    <div class="flex items-center justify-center gap-4">
      <a href="https://twitter.com/trickthevick" target="_blank">
        <Icon icon="mdi:twitter" width={32} height={32} />
      </a>
      <a href="https://twitter.com/trickthevick" target="_blank">
        <Icon icon="mdi:instagram" width={32} height={32} />
      </a>
      <a href="https://twitter.com/trickthevick" target="_blank">
        <Icon icon="mdi:mastodon" width={32} height={32} />
      </a>
    </div>
  </section>
</section>
