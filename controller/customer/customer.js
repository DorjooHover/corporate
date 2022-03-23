import { executeQuery } from "../../config/db";

const createCustomer = async (req, res) => {
     let { email, pid } = req.body.params;
     try {
          let customerData = await executeQuery(
               `
        insert into customer(email)
        values(?)
        `,
               [email]
          );
          let roomPlaceData = await executeQuery(
               `
            insert into place_customers(place_id, customer_id)
            values(?, ?)
          `,
               [pid, customerData.insertId]
          );
     } catch (error) {
          res.status(500).json({ message: error });
     }
};

export { createCustomer };
