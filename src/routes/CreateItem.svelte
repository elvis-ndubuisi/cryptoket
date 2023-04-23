<script>
  import Button from "../lib/Button.svelte";
  import Label from "../lib/Label.svelte";

  import iconlyImage from "../assets/Image.svg";
</script>

<section class="w-full max-w-[610px] mx-auto flex flex-col py-6 px-2">
  <h1 class=" font-semibold text-[28px] dark:text-cr-light capitalize mb-8">
    create item
  </h1>
  <form class="flex flex-col gap-5">
    <Label labelFor="upload" labelName="upload file" styles="h-[329px]">
      <section class="h-full w-full border-2 border-dashed rounded-[inherit]">
        <div class="flex flex-col items-center justify-center h-full">
          <p class="font-semibold text-xl text-center">
            JPG, PNG, GIF, WEBM, MP3, MP4. Max 100mb
          </p>

          <img
            src={iconlyImage}
            alt="nft item placeholder"
            class="w-[137px] aspect-square object-contain"
          />

          <p class="font-semibold text-sm text-center">Drag and Drop File</p>
          <p class="font-semibold text-sm text-center">
            <span class="font-regular">or</span> browse media on your device
          </p>
        </div>
        <input type="file" name="upload" id="upload" hidden />
      </section>
    </Label>

    <Label labelFor="name" labelName="name">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="item name"
        class="px-5 py-3 outline-none rounded-md bg-cr-black-100 font-regular text-base text-cr-light placeholder:capitalize placeholder:text-cr-light"
      />
    </Label>

    <Label labelFor="description" labelName="description">
      <textarea
        name="description"
        id="description"
        placeholder="Description of your item"
        cols="30"
        rows="10"
        class="px-5 py-3 outline-none rounded-md bg-cr-black-100 font-regular text-base text-cr-light placeholder:capitalize placeholder:text-cr-light"
      />
    </Label>

    <Label labelFor="price" labelName="price">
      <input
        type="text"
        name="price"
        id="price"
        placeholder="Enter price"
        class="px-5 py-3 outline-none rounded-md bg-cr-black-100 font-regular text-base text-cr-light placeholder:capitalize placeholder:text-cr-light"
      />
    </Label>

    <Button type="submit" handleClick={() => {}}>create item</Button>
  </form>
</section>
