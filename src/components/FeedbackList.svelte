<script>
  import FeedbackItem from "./FeedbackItem.svelte";

  // Props dari Parent
  export let feedback;
</script>

<main>
  {#each feedback as fb (fb.id)}
    <FeedbackItem item={fb} on:delete-feedback />
  {/each}
</main>
