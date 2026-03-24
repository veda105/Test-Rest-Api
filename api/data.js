export default function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;

    res.status(200).json({
      message: "Data received",
      data: body
    });
  } else if (req.method === "PUT") {
    const body = req.body;

    res.status(200).json({
      message: "Data updated",
      updated_data: body
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
