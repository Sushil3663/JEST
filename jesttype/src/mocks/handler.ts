import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Bruce Wayne",
        },
        {
          name: "Clark Kent",
        },
        {
          name: "Princess Diana",
        },
      ])
    );
  }),
];

// import { http, HttpResponse } from "msw";

// export const handlers = http.get(
//   "https://jsonplaceholder.typicode.com/users",
//   () => {
//     return HttpResponse.json([
//       {
//         name: "Bruce Wayne",
//       },
//       {
//         name: "Clark Kent",
//       },
//       {
//         name: "Princess Diana",
//       },
//     ]);
//   }
// );

// import { http, HttpResponse } from 'msw';

// export const handlers = [
//   http.post('/auth', (req, res, ctx) => {
//     // Note that you DON'T have to stringify the JSON!
//     return res(
//       ctx.status(200), // Set the status code to 200
//       ctx.json([
//               {
//                 name: "Bruce Wayne",
//               },
//               {
//                 name: "Clark Kent",
//               },
//               {
//                 name: "Princess Diana",
//               },
//             ])
//     );
//   }),
// ];
