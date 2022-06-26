<script>
  import { FeedbackStore } from "../stores";
  import Card from "./Card.svelte";

  // Props dari Feedbacklist
  export let item;

  const handleDelte = (itemId) => {
    FeedbackStore.update((currentFeedback) => {
      return currentFeedback.filter((item) => item.id != itemId);
    });
  };
</script>

<Card>
  <div class="num-display">
    {item.rating}
  </div>
  <button class="close" on:click={() => handleDelte(item.id)}>X</button>
  <p class="text-display">
    {item.text}
  </p>
</Card>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #ff6a95;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }
</style>
