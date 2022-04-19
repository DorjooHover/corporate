import { executeQuery } from "../../config/db";

const getAllPlace = async (req, res) => {
  try {
    const placeData = await executeQuery(
      `
        select * from place
        `,
      []
    );
    res.status(200).send(placeData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export { getAllPlace };
