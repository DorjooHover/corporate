import { executeQuery } from "../../config/db";

const getAdmin = async (req, res) => {
  try {
    let adminData = await executeQuery(
      `
        select * from place where username = ?
        `,
      [req.query.username]
    );
    res.send(adminData);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export { getAdmin };
