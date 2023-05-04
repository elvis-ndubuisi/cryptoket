<script>
  import { Route, Router } from "svelte-navigator";

  import Home from "./routes/Home.svelte";
  import Profile from "./routes/Profile.svelte";
  import Login from "./routes/Login.svelte";
  import Register from "./routes/Register.svelte";
  import Item from "./routes/Item.svelte";
  import CreateItem from "./routes/CreateItem.svelte";
  import NotFound from "./routes/NotFound.svelte";
  import Header from "./lib/Header.svelte";
  import Footer from "./lib/Footer.svelte";

  import PrivateRoute from "./routes/PrivateRoute.svelte";
</script>

<Router primary={false}>
  <Header />
  <main
    class="min-h-full bg-cr-light text-cr-black-200 dark:bg-cr-dark dark:text-cr-light"
  >
    <PrivateRoute path="/" let:location let:params>
      <Home />
    </PrivateRoute>

    <PrivateRoute path="profile" let:location let:params>
      <Profile />
    </PrivateRoute>

    <PrivateRoute path="item/create" let:location let:params>
      <CreateItem />
    </PrivateRoute>

    <PrivateRoute path="item/:itemId" let:location let:params>
      <Item {params} />
    </PrivateRoute>

    <Route path="login" component={Login} />
    <Route path="register" component={Register} />
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
