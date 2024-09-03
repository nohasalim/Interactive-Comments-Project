import { create } from "zustand";

const useCommentStore = create((set) => ({
  Arrayofcomments: [
    {
      id: 1,
      count: 0,
      likes: 0,
      replys: [],
      userimg: "/Images/image-amyrobson.png",
      username: "noha salim",
      userpost: "post11111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis recusandae minus a aliquid et ipsa mollitia maiores, dignissimos minima consectetur labore eaque asperiores vitae. Ad dolorum similique asperiores praesentium iure!"
    },
    {
      id: 2,
      count: 5,
      likes: 0,
      replys: [],
      userimg: "/Images/image-juliusomo.png",
      username: "ahmed salim",
      userpost: "post22222 Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis recusandae minus a aliquid et ipsa mollitia maiores, dignissimos minima consectetur labore eaque asperiores vitae. Ad dolorum similique asperiores praesentium iure!"
    },
    {
      id: 3,
      likes: 0,
      count: 10,
      replys: [],
      userimg: "/Images/image-maxblagun.png",
      username: "ammar salim",
      userpost: "post33333 Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis recusandae minus a aliquid et ipsa mollitia maiores, dignissimos minima consectetur labore eaque asperiores vitae. Ad dolorum similique asperiores praesentium iure!"
    }
  ],
  inc: (id) => set((state) => ({
    Arrayofcomments: state.Arrayofcomments.map((comment) =>
      comment.id === id ? { ...comment, count: comment.count + 1 } : comment
    )
  })),
  dec: (id) => set((state) => ({
    Arrayofcomments: state.Arrayofcomments.map((comment) =>
      comment.id === id ? { ...comment, count: comment.count - 1 } : comment
    )
  })),
  AddNewComment: (newcommentobj) => set((state) => ({
    Arrayofcomments: [...state.Arrayofcomments, newcommentobj]
  })),
  DeleteCommentByName: (name) => set((state) => ({
    Arrayofcomments: state.Arrayofcomments.filter((comment) => comment.username !== name)
  })),
  AddReply: (replyText, id) => set((state) => {
    const comment = state.Arrayofcomments.find((comment) => comment.id === id);
    if (comment) comment.replys.push({ text: replyText, id: Date.now() });
  })
}));

export default useCommentStore;
