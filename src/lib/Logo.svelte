<script>
  import { Link } from "svelte-navigator";

  import cryptoket from "../assets/CryptoKet.svg";
  import logoDark from "../assets/logo-dark.svg";
  import logoLight from "../assets/logo-light.svg";
</script>

<Link to="/" class="flex-shrink-0 flex items-center gap-1">
  <img
    src={logoDark}
    alt="dark logo"
    class="w-8 h-8 object-fill object-center hidden dark:block"
  />
  <img
    src={logoLight}
    alt="light logo"
    class="w-8 h-8 object-fill object-center block dark:hidden"
  />
  <!-- <img src={cryptoket} alt="cryptket" class="hidden md:block" /> -->
  <h1
    class="hidden md:block font-extrabold text-xl text-cr-black-100 dark:text-cr-light"
  >
    CryptoKet
  </h1>
</Link>
