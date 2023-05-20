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
    <PrivateRoute path="/">
      <Home />
    </PrivateRoute>

    <PrivateRoute path="profile">
      <Profile />
    </PrivateRoute>

    <PrivateRoute path="items/*" let:params>
      <Route path="create" component={CreateItem} />
      <Route path="/:itemId" component={Item} {params} />
    </PrivateRoute>

    <Route path="login">
      <Login />
    </Route>

    <Route path="register">
      <Register />
    </Route>

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
