<script>
  import Icon from "@iconify/svelte";

  import Logo from "./Logo.svelte";
</script>

<footer
  class="my-8 border-t bg-cr-light text-cr-black-200 dark:bg-cr-dark dark:text-cr-light"
>
  <section
    class="max-w-screen-2xl mx-auto px-4 md:px-6 flex flex-col items-start md:flex-row justify-between"
  >
    <section class="w-full md:w-auto">
      <Logo />
      <h3>Get the latest updates</h3>
      <div class="flex items-center">
        <input type="text" name="" id="" />
        <button>Email Me!</button>
      </div>
    </section>

    <section
      class="w-full md:w-auto md:flex-1 flex items-start justify-evently"
    >
      <div>
        <h3>CryptoKet</h3>
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
      <span>CryptoKet, Inc. All Rights Reserved</span>
      <div class="flex items-center gap-5">
        <a href="/">
          <Icon icon="mdi-light:instagram" />
        </a>
        <a href="/">
          <Icon icon="mdi:twitter" />
        </a>
        <a href="/">fa</a>
      </div>
    </div>
  </section>
</footer>
