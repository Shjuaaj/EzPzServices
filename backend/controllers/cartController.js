import userModel from '../models/userModel.js';

const addToCart = async (req, res) => {
    try {
        const { userId, itemId, description, date, time } = req.body;
        const userData = await userModel.findById(userId).exec();

        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData;

        if (!cartData[itemId]) {
            cartData[itemId] = { quantity: 1, description, date, time };
        } else {
            cartData[itemId].quantity = 1;
            cartData[itemId].description = description;
            cartData[itemId].date = date;
            cartData[itemId].time = time;
        }

        await userModel.findByIdAndUpdate(userId, { $set: { [`cartData.${itemId}`]: cartData[itemId] } });

        res.json({ success: true, message: cartData });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Something went wrong" });
    }
}

const removeFromCart = async (req, res) => {
    try {
        const { userId, itemId, description, date, time } = req.body;
        let userData = await userModel.findById(userId).exec();
        let cartData = userData.cartData;

        cartData[itemId] = { quantity: 1, description, date, time };

        if (cartData[itemId] && cartData[itemId].quantity > 0) {
            cartData[itemId].quantity -= 1;

            if (cartData[itemId].quantity === 0) {
                delete cartData[itemId];
            }

            await userModel.findByIdAndUpdate(userId, { $set: { [`cartData.${itemId}`]: {} } });

        }

        res.json({ success: true, message: cartData });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Something went wrong" });
    }
}

const getCart = async (req, res) => {
    try {
        const { userId } = req.body;
        let userData = await userModel.findById(userId);
        let cartData = await userData.cartData;
        res.json({ success: true, cartData });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Something went wrong" });
    }
}

export { addToCart, removeFromCart, getCart };