<script>
  import Button from "./Button.svelte";
</script>

<div
  class="h-10 max-w-[357px] bg-cr-light dark:bg-cr-black-200 rounded-md flex items-center justify-between border border-cr-grey-200 dark:border-cr-black-200"
>
  <input
    type="text"
    placeholder="your email"
    class="flex-1 h-full bg-transparent outline-none font-medium text-sm placeholder:text-white px-3 placeholder:capitalize max-w-[50%] md:max-w-none"
  />
  <Button styles="relative -right-2">Email Me!</Button>
</div>
