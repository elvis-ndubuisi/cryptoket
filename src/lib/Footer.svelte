<script>
  import Icon from "@iconify/svelte";

  import Logo from "./Logo.svelte";
  import Newsletter from "./Newsletter.svelte";
</script>

<footer
  class="bg-cr-light text-cr-black-200 dark:bg-cr-dark dark:text-cr-light"
>
  <hr class="border border-cr-grey-100 dark:border-cr-black-100" />
  <section
    class="max-w-[987px] mx-auto px-4 md:px-6 py-6 md:py-8 flex items-start md:flex-row md:gap-14 justify-between flex-wrap gap-y-6"
  >
    <section class="flex-1 md:flex-none w-full md:w-auto flex flex-col gap-6">
      <Logo />
      <h3 class="font-semibold text-base">Get the latest updates</h3>
      <Newsletter />
    </section>

    <div class="w-1/2 md:w-auto flex flex-col gap-6">
      <h3 class="font-semibold text-xl">CryptoKet</h3>
      <ul class="flex flex-col gap-3">
        <li class="font-regular text-base capitalize">Explore</li>
        <li class="font-regular text-base capitalize">how it works</li>
        <li class="font-regular text-base capitalize">contact us</li>
      </ul>
    </div>

    <div class="w-1/2 md:w-auto flex flex-col gap-6">
      <h3 class="font-semibold text-xl">Support</h3>
      <ul class="flex flex-col gap-3">
        <li class="font-regular text-base capitalize">help center</li>
        <li class="font-regular text-base capitalize">terms of service</li>
        <li class="font-regular text-base capitalize">legal</li>
        <li class="font-regular text-base capitalize">privacy policy</li>
      </ul>
    </div>
  </section>

  <hr class="border border-cr-grey-100 dark:border-cr-black-100" />

  <section class="max-w-[987px] mx-auto px-4 md:px-6 py-6 md:py-8">
    <div
      class="max-w-7xl mx-auto flex flex-col gap-3 md:flex-row items-center justify-center md:justify-between"
    >
      <span class="font-semibold text-base"
        >CryptoKet, Inc. All Rights Reserved</span
      >
      <div class="flex items-center gap-5">
        <a href="/" class="text-2xl"><Icon icon="mdi:youtube" /></a>
        <a href="/" class="text-2xl"><Icon icon="mdi:twitter" /></a>
        <a href="/" class="text-2xl"><Icon icon="mdi:mastodon" /></a>
        <a href="/" class="text-2xl"> <Icon icon="ic:outline-discord" /></a>
      </div>
    </div>
  </section>
</footer>
