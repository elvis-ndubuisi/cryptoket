<script>
  import { useNavigate, useLocation } from "svelte-navigator";
  import { user } from "../store";

  const navigate = useNavigate();
  const location = useLocation();

  function navigateToLogin() {
    navigate("/login", {
      state: { from: $location.pathname },
      replace: true,
    });
  }

  $: if (!$user) navigateToLogin();
</script>

{#if $user}
  <slot />
{/if}
