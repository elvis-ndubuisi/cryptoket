<script>
  import { useNavigate, useLocation } from "svelte-navigator";

  const navigate = useNavigate();
  const location = useLocation();

  let user = true; // should come from store.js

  $: if (!user) {
    navigate("/login", {
      state: { from: $location.pathname },
      replace: true,
    });
  }
</script>

<!-- Add dollary symbol when user is coming from store.js -->
{#if user}
  <slot />
{/if}
