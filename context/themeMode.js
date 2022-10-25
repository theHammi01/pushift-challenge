import create from "zustand";
import {persist} from "zustand/middleware";

const themeStore = (set) => ({
   siteTheme: { theme:'light'},
   switch: () => set((S) => ({ siteTheme: {theme: S.siteTheme.theme=='dark'?'light':'dark'} })),
})
// const useThemeMode = create( persist(themeStore, {name:'sitetheme'}) )
const useThemeMode = create(themeStore)

export default useThemeMode;