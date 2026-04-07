import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookmarksState {
  bookmarkedIds: string[];
}

const loadFromStorage = (): string[] => {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem("bookmarkedJobs");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveToStorage = (ids: string[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("bookmarkedJobs", JSON.stringify(ids));
  }
};
const initialState: BookmarksState = {
  bookmarkedIds: [],
};

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    initBookmarks(state) {
      state.bookmarkedIds = loadFromStorage();
    },
    toggleBookmark(state, action: PayloadAction<string>) {
      const id = action.payload;
      const idx = state.bookmarkedIds.indexOf(id);
      if (idx >= 0) {
        state.bookmarkedIds.splice(idx, 1);
      } else {
        state.bookmarkedIds.push(id);
      }
      saveToStorage(state.bookmarkedIds);
    },
    removeBookmark(state, action: PayloadAction<string>) {
      state.bookmarkedIds = state.bookmarkedIds.filter((id) => id !== action.payload);
      saveToStorage(state.bookmarkedIds);
    },
    clearBookmarks(state) {
      state.bookmarkedIds = [];
      saveToStorage([]);
    },
  },
});

export const { initBookmarks, toggleBookmark, removeBookmark, clearBookmarks } =
  bookmarksSlice.actions;
export default bookmarksSlice.reducer;
