import create from "zustand";

const useQueryLink = create( (set) => ({
   queryLink: { link:'https://api.pushshift.io/reddit/search/submission/?subreddit=aww&sort=desc&size=10'},
   update: (newLink) => set((S) => ({ queryLink: {link: newLink} })),
}))

export default useQueryLink;