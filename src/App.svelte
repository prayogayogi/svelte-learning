<script>
  import FeedbackForm from "./components/FeedbackForm.svelte";
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";

  let feedback = [
    {
      id: 1,
      rating: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iusto molestias illum doloribus, aliquam enim ratione fugiat alias fugit libero.",
    },
    {
      id: 2,
      rating: 9,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iusto molestias illum doloribus, aliquam enim ratione fugiat alias fugit libero.",
    },
    {
      id: 3,
      rating: 8,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iusto molestias illum doloribus, aliquam enim ratione fugiat alias fugit libero.",
    },
  ];

  $: count = feedback.length;
  $: average =
    feedback.reduce((a, { rating }) => a + rating, 0) / feedback.length;

  const addFeedback = (e) => {
    const newFeedback = e.detail;
    console.log(newFeedback);
    feedback = [newFeedback, ...feedback];
  };

  const deleteFeeback = (e) => {
    const itemId = e.detail;
    feedback = feedback.filter((item) => item.id != itemId);
  };
</script>

<main class="container">
  <FeedbackForm on:add-feedback={addFeedback} />
  <FeedbackStats {feedback} {count} {average} />
  <FeedbackList {feedback} on:delete-feedback={deleteFeeback} />
</main>

<style>
</style>
