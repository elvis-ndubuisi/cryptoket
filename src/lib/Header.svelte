<script>
  import { Link, useNavigate } from "svelte-navigator";
  import Icon from "@iconify/svelte";

  import Logo from "./Logo.svelte";
  import SearchBar from "../lib/SearchBar.svelte";
  import Button from "./Button.svelte";

  const navigate = useNavigate();

  function handleMobileNav() {
    navigate("item/profile");
  }
</script>

<header
  class="bg-tansparent h-[70px] max-w-screen-2xl mx-auto px-4 md:px-6 border-b border-cr-grey-100 dark:border-cr-black-100 flex items-center justify-between gap-3 bg-cr-light text-cr-black-200 dark:bg-cr-dark dark:text-cr-light relative z-20"
>
  <Logo />

  <SearchBar />

  <nav
    class="absolute top-0 left-0 h-screen md:pt-auto w-full md:w-auto md:static md:h-auto flex flex-col gap-4 items-center justify-center md:flex-row bg-cr-light text-cr-black-200 dark:bg-cr-dark dark:text-cr-light -z-20"
  >
    <section
      class="md:flex-auto flex flex-col items-center gap-4 md:flex-row md:gap-5"
    >
      <Link to="/" class="text-base font-semibold capitalize">explore</Link>
      <Link to="item" class="text-base font-semibold capitalize">my items</Link>
      <Link to="profile" class="text-base font-semibold capitalize">
        profile
      </Link>
    </section>
    <section class="flex items-center gap-4">
      <Button
        on:_event={() => {
          console.log("something");
        }}>create</Button
      >
      <Button outline={true}>connect</Button>
    </section>
  </nav>

  <button
    type="button"
    on:click={handleMobileNav}
    class="flex-shrink-0 grid place-content-center md:hidden"
  >
    <span class="hidden">
      <Icon icon="ic:round-close" width={24} height={24} />
    </span>

    <span class="block">
      <Icon icon="ic:round-menu" width={32} height={32} />
    </span>
  </button>
</header>
