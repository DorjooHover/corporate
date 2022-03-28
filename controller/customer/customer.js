import { executeQuery } from "../../config/db";

const createCustomer = async (req, res) => {
  let { email, pid } = req.body.params;
  try {
    let data = await executeQuery(
      `
     select * from place_customers pc
     inner join customer c on c.customer_id = pc.customer_id
     where email = ?
     `,
      [email]
    );

    if (data.length == 0) {
      let customerData = await executeQuery(
        `
            insert into customer(email)
            values(?)
            `,
        [email]
      );
      let customerPlaceData = await executeQuery(
        `
                insert into place_customers(place_id, customer_id)
                values(?, ?)
              `,
        [pid, customerData.insertId]
      );
      res.send({ message: "Амжилттай бүртгэгдлээ.", status: 1 });
    } else {
      res.send({ message: "Бүртгэлтэй и-майл байна.", status: 0 });
    }
    res.send(customerPlaceData.insertId);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export { createCustomer };
