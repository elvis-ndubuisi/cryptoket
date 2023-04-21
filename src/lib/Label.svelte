<script lang="ts">
  export let labelFor: string = "";
  export let labelName: string = "";
  export let styles: string = "";
</script>

<label for={labelFor} class={`flex flex-col gap-5 w-full ${styles}`}>
  <span class="font-semibold text-2xl dark:text-cr-light capitalize"
    >{labelName}</span
  >
  <slot />
</label>
