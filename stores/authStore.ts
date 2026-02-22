import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

type User = { id: string; username: string; password: string };
type Session = { id: string; username: string } | null;

type AuthState = {
  users: User[];
  session: Session;
  hydrated: boolean;
  hydrate: () => Promise<void>;
  signup: (username: string, password: string) => Promise<void>;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const USERS_KEY = "users";
const SESSION_KEY = "session";

export const useAuthStore = create<AuthState>((set, get) => ({
  users: [{ id: "1", username: "shl0145", password: "123456" }],
  session: null,
  hydrated: false,

  hydrate: async () => {
    const [usersRaw, sessionRaw] = await Promise.all([
      AsyncStorage.getItem(USERS_KEY),
      AsyncStorage.getItem(SESSION_KEY),
    ]);

    const users = usersRaw
      ? (JSON.parse(usersRaw) as User[])
      : [{ id: "1", username: "shl0145", password: "123456" }];

    const session = sessionRaw ? (JSON.parse(sessionRaw) as Session) : null;

    set({ users, session, hydrated: true });
  },

  signup: async (username, password) => {
    const { users } = get();
    // signup duplicate check
    const duplicate = users.some(
      (u) => u.username.trim().toLowerCase() === username.trim().toLowerCase(),
    );

    if (duplicate) throw new Error("Username already exists");

    const newUser: User = {
      id: Date.now().toString(),
      username: username.trim(),
      password,
    };

    const nextUsers = [...users, newUser];
    const session = { id: newUser.id, username: newUser.username };

    await Promise.all([
      AsyncStorage.setItem(USERS_KEY, JSON.stringify(nextUsers)),
      AsyncStorage.setItem(SESSION_KEY, JSON.stringify(session)),
    ]);

    set({ users: nextUsers, session });
  },

  login: async (username, password) => {
    const { users } = get();
    // login
    const user = users.find(
      (u) =>
        u.username.trim().toLowerCase() === username.trim().toLowerCase() &&
        u.password === password,
    );

    if (!user) throw new Error("Invalid username or password");

    const session = { id: user.id, username: user.username };
    await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(session));
    set({ session });
  },

  logout: async () => {
    await AsyncStorage.removeItem(SESSION_KEY);
    set({ session: null });
  },
}));
