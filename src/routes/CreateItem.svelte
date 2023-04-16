<script>
  import Button from "../lib/Button.svelte";
</script>

<section>
  <h1>create item</h1>
  <form action="">
    <label for="upload">
      upload file
      <input type="file" name="upload" id="upload" />
    </label>

    <label for="name">
      name
      <input type="text" name="name" id="name" />
    </label>

    <label for="description">
      description
      <textarea name="description" id="description" cols="30" rows="10" />
    </label>

    <label for="price">
      price
      <input type="text" name="price" id="price" />
    </label>

    <Button type="submit">create item</Button>
  </form>
</section>
