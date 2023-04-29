<script>
  import Button from "../lib/Button.svelte";
  import Label from "../lib/Label.svelte";

  let buttonStateText = "login";

  const handleLogin = async (e) => {
    const formData = new FormData(e.target);
    try {
      buttonStateText = "validating...";
      if (!formData.get("username") || !formData.get("password"))
        throw new Error("invalid inputs");

      const response = await fetch("https://sdafsdfasdfa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          username: formData.get("username"),
          password: formData.get("password"),
        }),
      });
    } catch (error) {
      buttonStateText = "login";
      console.log(error);
    } finally {
      buttonStateText = "login";
    }
  };
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
        class="px-5 py-3 outline-none rounded-md bg-cr-light text-cr-black-100 dark:bg-cr-black-100 font-regular text-base dark:text-cr-light placeholder:capitalize placeholder:text-cr-grey-200 dark:placeholder:text-cr-light border-2 border-cr-grey-100 dark:border-none"
      />
    </Label>

    <Label labelFor="password" labelName="password">
      <input
        type="password"
        name="password"
        id="password"
        class="px-5 py-3 outline-none rounded-md bg-cr-light text-cr-black-100 dark:bg-cr-black-100 font-regular text-base dark:text-cr-light placeholder:capitalize placeholder:text-cr-grey-200 dark:placeholder:text-cr-light border-2 border-cr-grey-100 dark:border-none"
      />
    </Label>

    <Button type="submit" handleClick={() => {}} styles="py-3"
      >{buttonStateText}</Button
    >

    <footer class="bg-cr-grey-100 dark:bg-cr-black-100 p-4 rounded-lg">
      <h3 class="text-center font-semibold text-lg capitalize">User 1</h3>
      <div>
        <div class="flex items-center justify-between">
          <p class="font-regular text-sm capitalize font-medium">username</p>
          <p class="font-regular text-sm font-medium">username</p>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-regular text-sm font-medium capitalize">password</p>
          <p class="font-regular text-sm font-medium">password</p>
        </div>
      </div>
      <h3 class="text-center font-semibold text-lg capitalize mt-3">user 2</h3>
      <div>
        <div class="flex items-center justify-between">
          <p class="font-regular text-sm capitalize font-medium">username</p>
          <p class="font-regular text-sm font-medium">username</p>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-regular text-sm capitalize font-medium">password</p>
          <p class="font-regular text-sm font-medium">password</p>
        </div>
      </div>
    </footer>
  </form>
</section>
