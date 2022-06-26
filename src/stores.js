import { writable } from "svelte/store";

export const FeedbackStore = writable([
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
]);
