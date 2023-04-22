<script>
  import { Route, Router } from "svelte-navigator";

  import Home from "./routes/Home.svelte";
  import Profile from "./routes/Profile.svelte";
  import Login from "./routes/Login.svelte";
  import Item from "./routes/Item.svelte";
  import CreateItem from "./routes/CreateItem.svelte";
  import NotFound from "./routes/NotFound.svelte";
  import Header from "./lib/Header.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<Router>
  <Header />
  <main
    class="min-h-full bg-cr-light text-cr-black-200 dark:bg-cr-dark dark:text-cr-light"
  >
    <Route path="/" component={Home} />
    <Route path="profile" component={Profile} />
    <Route path="item/create" component={CreateItem} />
    <Route path="item/*itemId" component={Item} />
    <Route path="login" component={Login} />
    <Route path="*" component={NotFound} />
  </main>
  <Footer />
</Router>

<style lang="postcss">
  :global(html) {
    /* background-color: theme(colors.cr-black-200); */
    font-family: "Poppins", sans-serif;
    scroll-behavior: smooth;
  }
</style>
