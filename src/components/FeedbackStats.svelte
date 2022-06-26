<script>
  import { FeedbackStore } from "../stores";

  $: count = $FeedbackStore.length;
  $: average =
    $FeedbackStore.reduce((a, { rating }) => a + rating, 0) /
    $FeedbackStore.length;
</script>

<div class="feedback-starts">
  <h4>{count} Reviews</h4>
  <h4>Ratings Average: {average ? average : 0}</h4>
</div>

<style>
  .feedback-starts {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
