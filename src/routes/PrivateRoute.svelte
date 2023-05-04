<script>
  import { Route } from "svelte-navigator";
  import PrivateRouteGuard from "./PrivateRouteGuard.svelte";

  export let path;
</script>

<Route {path} let:location let:params let:navigate>
  <PrivateRouteGuard>
    <slot {params} {location} {navigate} />
  </PrivateRouteGuard>
</Route>
