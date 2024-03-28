// import { setupServer } from "msw/node";

// export const Server = setupServer(...handlers);
// beforeAll(() => Server.listen());
// afterEach(() => Server.resetHandlers());
// afterAll(() => Server.close());
// import { setupServer } from "msw/node";
// import { handlers } from "./handler";

// export const server = setupServer(...handlers);

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());
import { setupServer } from "msw/node";
import { handlers } from "./handler";
export const server = setupServer(...handlers);
