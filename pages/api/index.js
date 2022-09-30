export default async (req, res) => {
  const { method } = req;

  // This will allow OPTIONS request
  // if (method === "OPTIONS") {
  //   return res.status(200).send("ok");
  // }

  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
};