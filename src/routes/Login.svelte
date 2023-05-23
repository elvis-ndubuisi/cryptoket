<script>
  import { onDestroy } from "svelte";
  import jwt_decode from "jwt-decode";
  import { useLocation, useNavigate } from "svelte-navigator";
  import { user, refreshToken } from "../utils/store";
  import API from "../utils/api";

  import Button from "../lib/Button.svelte";
  import Label from "../lib/Label.svelte";

  const creds = [
    { username: "rema kuti", password: "43basement" },
    { username: "victony nft", password: "@vickybatch" },
    { username: "rogue man", password: "duged38#" },
  ];

  let navigate = useNavigate();
  let location = useLocation();
  let controller = new AbortController();

  let buttonStateText = "login";
  let username = "";
  let password = "";

  let showError = false;
  let errorData;

  async function handleLogin() {
    try {
      buttonStateText = "validating...";
      if (!username || !password) throw new Error("invalid inputs");

      const response = await API.post(
        "/user/auth/login",
        JSON.stringify({ username, password }),
        { signal: controller.signal }
      );

      if (response.status !== 200) throw new Error("Something happened");

      const decodedUser = jwt_decode(response.data.accessToken);
      sessionStorage.setItem("user", JSON.stringify(decodedUser));
      user.set(decodedUser);

      // API.defaults.headers.Authorization = `Bearer: ${response.data.accessToken}`;
      API.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.accessToken}`;

      sessionStorage.setItem(
        "refreshToken",
        JSON.stringify(response.data.refreshToken)
      );
      refreshToken.set(response.data.refreshToken);

      /* from route that redirected user to login */
      const from = ($location.state && $location.state.from) || "/";
      /* Reset fields */
      username = "";
      password = "";
      buttonStateText = "Redirecting...";
      /* Navigate to next page after delay */
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 600);
    } catch (error) {
      showError = true;
      if (error.response.status === 401) {
        errorData = error.response.data;
      }
      if (error.response.status === 400 && error.response.data.length > 0) {
        errorData = error.response.data[0].message;
      }
      errorData = error.response.data;
    } finally {
      buttonStateText = "login";
    }
  }

  onDestroy(() => {
    controller.abort();
  });
</script>

<section
  class="w-full max-w-[610px] mx-auto h-[100vh_-_80px] flex flex-col items-center py-6 px-2"
>
  <h1
    class="text-center font-semibold text-[28px] dark:text-cr-light capitalize mb-8"
  >
    Welcome back
  </h1>

  <form
    class="flex flex-col gap-5 w-full"
    on:submit|preventDefault|stopPropagation={handleLogin}
  >
    <Label labelFor="username" labelName="username">
      <input
        type="text"
        name="username"
        id="username"
        bind:value={username}
        class="px-5 py-3 outline-none rounded-md bg-cr-light text-cr-black-100 dark:bg-cr-black-100 font-regular text-base dark:text-cr-light placeholder:capitalize placeholder:text-cr-grey-200 dark:placeholder:text-cr-light border-2 border-cr-grey-100 dark:border-none"
      />
    </Label>

    <Label labelFor="password" labelName="password">
      <input
        type="password"
        name="password"
        id="password"
        bind:value={password}
        class="px-5 py-3 outline-none rounded-md bg-cr-light text-cr-black-100 dark:bg-cr-black-100 font-regular text-base dark:text-cr-light placeholder:capitalize placeholder:text-cr-grey-200 dark:placeholder:text-cr-light border-2 border-cr-grey-100 dark:border-none"
      />
    </Label>

    <Button type="submit" handleClick={() => {}} styles="py-3"
      >{buttonStateText}</Button
    >

    <Button
      type="button"
      outline={true}
      handleClick={() => navigate("/register")}
      styles="py-3">Join CryptoKet</Button
    >

    {#if showError}
      <section>
        <p class="text-rose-500 lowercase">{errorData}</p>
      </section>
    {/if}

    <footer class="bg-cr-grey-100 dark:bg-cr-black-100 p-4 rounded-lg">
      {#each creds as cred, idx}
        <div>
          <h4 class="w-full text-center uppercase">
            User {idx + 1} Credentials
          </h4>

          <div
            class=" bg-cr-light dark:bg-cr-black-200 text-cr-grey-200 dark:text-cr-light border border-cr-grey-100 dark:border-cr-black-200 rounded w-full my-2 py-1 px-3"
          >
            <div class="flex flex-wrap items-center justify-between">
              <p class="font-regular capitalize font-semibold">username</p>
              <p class="font-regular font-medium">{cred.username}</p>
            </div>
            <div class="flex flex-wrap items-center justify-between">
              <p class="font-regular capitalize font-semibold">password</p>
              <p class="font-regular font-medium">{cred.password}</p>
            </div>
          </div>
        </div>
      {/each}
    </footer>
  </form>
</section>
