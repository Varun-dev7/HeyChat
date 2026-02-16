export default async function handler(req, res) {
  const { path = [] } = req.query;

  const backendUrl = `http://heychat.runasp.net/chat/${path.join("?")}`;

  try {
    const response = await fetch(backendUrl, {
      method: req.method,
      headers: {
        "Content-Type": req.headers["content-type"] || "application/json",
      },
      body: req.method !== "GET" ? req.body : undefined,
    });

    const data = await response.text();

    res.status(response.status).send(data);
  } catch (error) {
    res.status(500).json({ error: "Proxy error", details: error.message });
  }
}
