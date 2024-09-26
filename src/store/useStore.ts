
import { create } from 'zustand';

type Store = {
  userName: string | null;
  setUserName: (name: string | null) => void; 
  authToken: string | null;
  setAuthToken: (token: string | null) => void;
};

const useStore = create<Store>((set) => ({
  userName: null,
  setUserName: (name) => set(() => ({ userName: name })), 
  authToken: null,
  setAuthToken: (token) => set(() => ({ authToken: token })),
}));

export default useStore;
