import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GetUsers } from "../src/domain/user/use-cases/GetUsers";
import { UserMockRepository } from "../src/infrastucture/mocks/UserMockRepository";
import App from "./App.tsx";

const repo = new UserMockRepository();
const getUser = new GetUsers(repo);

getUser.execute().then((user) => {
  console.log(user)
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
