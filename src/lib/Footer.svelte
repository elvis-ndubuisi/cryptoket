<script>
  import Icon from "@iconify/svelte";

  import Logo from "./Logo.svelte";
  import Button from "./Button.svelte";
</script>

<footer
  class="my-8 border-t bg-cr-light text-cr-black-200 dark:bg-cr-dark dark:text-cr-light"
>
  <section
    class="mx-auto px-4 md:px-6 flex flex-col items-start md:flex-row justify-between"
  >
    <section class="w-full md:w-auto">
      <Logo />
      <h3 class="font-semibold text-base">Get the latest updates</h3>
      <div class="h-10 max-w-[357px] flex items-center justify-between">
        <input type="text" class="flex-1 h-full" />
        <Button type="button">Email Me!</Button>
      </div>
    </section>

    <section
      class="w-full md:w-auto md:flex-1 flex items-start justify-evently"
    >
      <div>
        <h3 class="">CryptoKet</h3>
        <ul>
          <li>Explore</li>
        </ul>
      </div>

      <div>
        <h3>Support</h3>
        <ul>
          <li>Explore</li>
        </ul>
      </div>
    </section>
  </section>

  <section class="w-full border-t">
    <div
      class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between"
    >
      <span class="font-semibold text-base"
        >CryptoKet, Inc. All Rights Reserved</span
      >
      <div class="flex items-center gap-5">
        <a href="/">
          <Icon icon="mdi-light:instagram" />
        </a>
        <a href="/" class="text-xl">
          <Icon icon="mdi:twitter" />
        </a>
        <a href="/" class="text-xl">
          <Icon icon="mdi:facebook" />
        </a>
      </div>
    </div>
  </section>
</footer>
