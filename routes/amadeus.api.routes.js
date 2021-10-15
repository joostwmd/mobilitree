const Amadeus = require("amadeus");
const router = require("express").Router();

const CLIENT_ID = "gNaBgLe986ycHYUmHcnWdjY4wDXzy357"
const CLIENT_SECRET = "d4ieZO5I9ShYC86E"

const API = `api`

const amadeus = new Amadeus({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET
  });

// Endpoint
router.get(`/${API}/airports`, async (req, res) => {
    const { page, subType, keyword } = req.query;
    // API call with params we requested from client app
    const response = await amadeus.client.get("/v1/reference-data/locations", {
      keyword,
      subType,
      "page[offset]": page * 10
    });
    // Sending response for client
    try {
      await res.json(JSON.parse(response.body));
    } catch (err) {
      await res.json(err);
    }
  });
  module.exports = router;