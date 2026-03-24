exports.handler = async function(event) {
  const API_KEY = "3a84c3adabf04da69b15ba97f6bed06d";
  const BASE = "https://api.football-data.org/v4";
  const path = event.queryStringParameters?.path || "/competitions/PL/matches?status=LIVE";

  try {
    const response = await fetch(`${BASE}${path}`, {
      headers: { "X-Auth-Token": API_KEY }
    });
    const data = await response.json();
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
