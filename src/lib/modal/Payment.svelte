<script>
  import Icon from "@iconify/svelte";

  import dummyImg from "../../assets/shirt-viz-screenshot.png";
</script>

<section class="flex flex-col">
  <h2 class="font-semibold text-2xl text-center mb-6 capitalize">
    payment successful
  </h2>
  <hr class="border border-cr-grey-100 dark:border-cr-black-100 mb-6" />

  <img
    src={dummyImg}
    alt="item"
    class="md:h-[206px] aspect-square object-cover object-center"
  />

  <p class="text-center font-regular text-base max-w-[365px]">
    You have successfully purchased <b class="font-semibold"
      >Abstract Smoke Red Blue</b
    >
    from
    <b class="font-semibold">Mia Amaya</b>
  </p>

  <hr class="border border-cr-grey-100 dark:border-cr-black-100" />
  <section>
    <h3 class="mb-3">Share</h3>
    <div class="flex items-center justify-center gap-4">
      <a href="#">
        <Icon icon="mdi:twitter" width={32} height={32} />
      </a>
      <a href="#">
        <Icon icon="mdi:instagram" width={32} height={32} />
      </a>
      <a href="#">
        <Icon icon="mdi:mastodon" width={32} height={32} />
      </a>
    </div>
  </section>
</section>
