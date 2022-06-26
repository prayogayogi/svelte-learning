<script>
  // import { onMount, onDestroy } from "svelte";
  // import { FeedbackStore } from "../stores";
  import { fade, scale } from "svelte/transition";
  import FeedbackItem from "./FeedbackItem.svelte";

  // Props dari Parent
  export let feedback;
</script>

<main>
  {#each feedback as fb (fb.id)}
    <div in:scale out:fade={{ duration: 500 }}>
      <FeedbackItem item={fb} on:delete-feedback />
    </div>
  {/each}
</main>
