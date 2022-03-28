import { executeQuery } from "../../config/db";

const getAdmin = async (req, res) => {
  console.log(req.query.pid, req.query.username, req.query.password);
  try {
    let adminData = await executeQuery(
      `
      select * from place_admins pa
      inner join admin a on a.admin_id = pa.admin_id
      where place_id = ? and name = ? and password = ?
        `,
      [req.query.pid, req.query.username, req.query.password]
    );
    adminData != 0
      ? res.send({ message: "Амжилттай нэвтэрлээ", status: 0 })
      : res.send({
          message: "Нэвтрэх нэр эсвэл нууц үг буруу байна.",
          status: 1,
        });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export { getAdmin };
