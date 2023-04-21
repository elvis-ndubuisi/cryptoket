<script>
  import { Link } from "svelte-navigator";

  import Logo from "./Logo.svelte";
  import SearchBar from "../lib/SearchBar.svelte";
  import Button from "./Button.svelte";

  function handleMobileNav() {}
</script>

<header
  class="h-[70px] max-w-screen-2xl mx-auto px-4 md:px-6 border-b border-cr-grey-100 dark:border-cr-black-100 flex items-center justify-between gap-3"
>
  <Logo />

  <SearchBar />

  <nav
    class="absolute h-[calc(100vh_-_70px)] bottom-0 md:static md:h-auto flex flex-col gap-4 items-center md:flex-row"
  >
    <section
      class="flex-1 md:flex-auto flex flex-col items-center gap-4 md:flex-row md:gap-5"
    >
      <Link to="/" class="text-base font-semibold capitalize">explore</Link>
      <Link to="item" class="text-base font-semibold capitalize">my items</Link>
      <Link to="profile" class="text-base font-semibold capitalize">
        profile
      </Link>
    </section>
    <section class="flex items-center gap-4">
      <Button>create</Button>
      <Button outline={true}>connect</Button>
    </section>
  </nav>

  <button type="button" on:click={handleMobileNav} class="block md:hidden">
    navbutton
  </button>
</header>
