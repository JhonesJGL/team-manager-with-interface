import swaggerAutogen from "swagger-autogen";

import path from "path";
const extension = path.extname(__filename);

const outputFile = "./swagger.json";
const endpointsFiles = ["src/api/router" + extension];

const doc = {
  info: {
    version: "1.0.0",
    title: "Team Manager API",
    description:
      "Documentation for a Team Manager automatically generated by the <b>swagger-autogen</b> module.",
  },
  host: "localhost:8002",
  basePath: "/",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "User",
      description: "Endpoints",
    },
  ],
  definitions: {
    User: {
      id: "3e5daa5e-ac58-4f19-a89f-017b6c313c4c",
      username: "alpha",
      email: "alpha@alpha.com",
      firstName: "Alpha",
      lastName: "Edtech",
      password: "12345",
      team_id: "c33a19a6-41cf-45af-9200-756d7371a",
      isAdmin: "true",
    },
    UserResponse: {
      id: "3e5daa5e-ac58-4f19-a89f-017b6c313c4c",
      username: "alpha",
      email: "alpha@alpha.com",
      firstName: "Alpha",
      lastName: "Edtech",
      team_id: "c33a19a6-41cf-45af-9200-756d7371a",
      isAdmin: "true",
    },
    AddUser: {
      username: "alpha",
      email: "alpha@alpha.com",
      firstName: "Alpha",
      lastName: "Edtech",
      password: "12345",
      team_id: "c33a19a6-41cf-45af-9200-756d7371a",
      isAdmin: "false",
    },
    UserValidator: {
      errors: [
        "[username] - type is required",
        "[email] - type is required",
        "[firstName] - type is required",
        "[lastName] - type is required",
        "[password] - type is required",
        "[isAdmin] - type is required",
      ],
      status: 422,
    },
    Team: {
      id: "c33a19a6-41cf-45af-9200-756d7371a",
      name: "Grupo Alpha",
      leader: "3e5daa5e-ac58-4f19-a89f-017b6c313c4c",
    },
    DeleteUserResponse: {
      message: "Deleted",
    },
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc);
