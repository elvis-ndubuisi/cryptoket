<script>
  import Button from "../lib/Button.svelte";
  import Label from "../lib/Label.svelte";
  import API from "../utils/api";

  function handleDropZone() {}

  let file, name, description, price, cryptoType;
  let btnIndicator = "create NFT item";
  let errorMsg = "";
  $: isError = false;

  async function handleSubmit() {
    if (!file) {
      isError = true;
      errorMsg = "No file selected";
      return;
    }

    const form = new FormData();
    form.append("image", file[0]);
    form.append("name", name);
    form.append("description", description);
    form.append("price", price);
    form.append("cryptoType", cryptoType);

    try {
      btnIndicator = "Submitting...";
      const response = await API.postForm("/nft/create", form);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      btnIndicator = "create NFT item";
    }
  }

  $: {
    if (isError) {
      setTimeout(() => {
        isError = false;
        errorMsg = "";
      }, 4000);
    }
  }
</script>

<section class="w-full max-w-[610px] mx-auto flex flex-col py-6 px-2">
  <h1 class="font-semibold text-[28px] dark:text-cr-light capitalize mb-8">
    create item
  </h1>

  {#if isError}
    <p class="text-rose-500 text-center">{errorMsg}</p>
  {/if}

  <form
    class="flex flex-col gap-5"
    enctype="multipart/form-data"
    on:submit|preventDefault={handleSubmit}
  >
    <Label labelFor="upload" labelName="upload file" styles="h-[329px]">
      <section
        class="h-full w-full border-2 border-dashed border-cr-grey-100 dark:border-cr-light rounded-lg"
      >
        <div class="flex flex-col items-center justify-center h-full">
          <p class="font-semibold text-xl text-center">
            JPG, PNG, GIF, WEBM, MP3, MP4. Max 100mb
          </p>

          <div class="w-[137px] aspect-square object-contain">
            <svg
              width="137"
              height="137"
              viewBox="0 0 137 137"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M43.761 125.583H93.233C112.586 125.583 125.583 112.008 125.583 91.8087V45.1913C125.583 24.9917 112.586 11.4167 93.2387 11.4167H43.761C24.4138 11.4167 11.4165 24.9917 11.4165 45.1913V91.8087C11.4165 112.008 24.4138 125.583 43.761 125.583ZM48.5142 62.7917C40.6444 62.7917 34.2498 56.3885 34.2498 48.5208C34.2498 40.6532 40.6444 34.25 48.5142 34.25C56.3782 34.25 62.7785 40.6532 62.7785 48.5208C62.7785 56.3885 56.3782 62.7917 48.5142 62.7917ZM113.144 85.248C115.055 90.1493 114.062 96.0402 112.019 100.894C109.596 106.667 104.958 111.039 99.1147 112.947C96.5201 113.796 93.7993 114.167 91.0842 114.167H42.9758C38.1886 114.167 33.9523 113.018 30.4795 110.88C28.304 109.536 27.9194 106.438 29.5324 104.429C32.2303 101.071 34.8937 97.7015 37.5801 94.3024C42.7003 87.7988 46.1502 85.9137 49.9846 87.569C51.5402 88.2524 53.1015 89.2774 54.7088 90.3613C58.9909 93.2715 64.9435 97.2714 72.7845 92.9298C78.1504 89.9245 81.2625 84.7695 83.9727 80.2804L84.0181 80.2053C84.2101 79.8904 84.4004 79.5755 84.5902 79.2615C85.501 77.7544 86.3997 76.2675 87.4162 74.8976C88.6905 73.1833 93.4147 67.8225 99.5337 71.6399C103.431 74.0434 106.709 77.2952 110.216 80.7767C111.554 82.1081 112.506 83.6221 113.144 85.248Z"
                class="dark:fill-white fill-cr-dark"
              />
            </svg>
          </div>

          <p class="font-semibold text-sm text-center">Drag and Drop File</p>
          <p class="font-semibold text-sm text-center">
            <span class="font-regular">or</span> browse media on your device
          </p>
        </div>
        <input type="file" name="upload" id="upload" hidden bind:files={file} />
      </section>
    </Label>

    <Label labelFor="name" labelName="name">
      <input
        type="text"
        name="name"
        id="name"
        bind:value={name}
        placeholder="item name"
        class="px-5 py-3 outline-none rounded-md bg-cr-light text-cr-black-100 dark:bg-cr-black-100 font-regular text-base dark:text-cr-light placeholder:capitalize placeholder:text-cr-grey-200 dark:placeholder:text-cr-light dark:placeholder:opacity-50 border-2 border-cr-grey-100 dark:border-none"
      />
    </Label>

    <Label labelFor="description" labelName="description">
      <textarea
        name="description"
        bind:value={description}
        id="description"
        placeholder="Description of your item"
        cols="30"
        rows="10"
        class="px-5 py-3 outline-none rounded-md bg-cr-light text-cr-black-100 dark:bg-cr-black-100 font-regular text-base dark:text-cr-light placeholder:capitalize placeholder:text-cr-grey-200 dark:placeholder:text-cr-light dark:placeholder:opacity-50 border-2 border-cr-grey-100 dark:border-none"
      />
    </Label>

    <Label labelFor="price" labelName="price">
      <div
        class="flex items-center justify-between px-5 dark:bg-cr-black-100 bg-cr-light rounded-md"
      >
        <input
          type="text"
          name="price"
          bind:value={price}
          id="price"
          placeholder="Enter price"
          class="py-3 outline-none bg-cr-light text-cr-black-100 dark:bg-cr-black-100 font-regular text-base dark:text-cr-light placeholder:capitalize placeholder:text-cr-grey-200 dark:placeholder:text-cr-light dark:placeholder:opacity-50 border-2 border-cr-grey-100 dark:border-none flex-grow-0 w-auto"
        />

        <select
          bind:value={cryptoType}
          class="py-3 outline-none bg-cr-light text-cr-black-100 dark:bg-cr-black-100 font-regular text-base dark:text-cr-light placeholder:capitalize placeholder:text-cr-grey-200 dark:placeholder:text-cr-light dark:placeholder:opacity-50 border-2 border-cr-grey-100 dark:border-none font-medium uppercase"
        >
          <option value="eth">eth</option>
          <option value="sol">sol</option>
          <option value="mol">mol</option>
        </select>
      </div>
    </Label>

    <Button type="submit" handleClick={() => {}}>{btnIndicator}</Button>
  </form>
</section>
