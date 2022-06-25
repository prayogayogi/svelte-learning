<script>
  export let count;
  export let average;
</script>

<div class="feedback-starts">
  <h4>{count} Reviews</h4>
  <h4>Ratings Aaverage: {average}</h4>
</div>

<style>
  .feedback-starts {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
