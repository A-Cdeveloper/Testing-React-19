exports.getMessages = async (req, res) => {
  const query = "SELECT * FROM messages ORDER BY time DESC";
  const [results] = await req.db.query(query);

  if (results.length === 0) {
    res.status(200);
    res.json({
      status: "success",
      message: "No messages found",
    });
  }

  res.status(200);
  res.json({
    status: "success",
    numberOfMessage: results.length,
    data: results,
  });
};

exports.createMessage = async (req, res) => {
  const { message } = req.body;
  const query = "INSERT INTO messages (message, time) VALUES (?,?)";
  const [results] = await req.db.query(query, [message, new Date()]);
  console.log(results.insertId);
  res.json({
    status: "success",
    id: results.id,
  });
};
