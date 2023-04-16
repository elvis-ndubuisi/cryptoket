<script>
  import { useNavigate } from "svelte-navigator";

  const navigate = useNavigate();
</script>

<section class="h-screen grid place-content-center gap-4">
  <h1 class="text-3xl font-semibold">Sorry! Page not available</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, doloremque!
  </p>
  <button
    type="button"
    class="font-bold capitalize"
    on:click={() => {
      navigate("/", { replace: true });
    }}>Back to Home</button
  >
</section>
