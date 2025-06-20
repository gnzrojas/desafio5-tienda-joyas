import { formatLimitOrderPage } from "../models/joyasModels.js"
import { joyasHateoas } from "../utils/joyasHateoas.js";


//Limitar, ordenar y paginar con PG-Format
export const getLimitOrderPages = async (req, res) => {
    try {
        const { order_by, limit, page } = req.query;
        const joyas = await formatLimitOrderPage({ order_by, limit, page });

        //Aplicar HATEOAS
        const hateoasJoyas = joyasHateoas(joyas);

        res.status(200).json({
            couunt: joyas.length,
            results: hateoasJoyas
        })

    } catch (error) {
        res.status(500).json({ error: 'Error al procesar la solicitud ❌' })
        console.error('Error =>', error);
        
    }
}