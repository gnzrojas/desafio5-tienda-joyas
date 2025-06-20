import { pool } from "../database/joyasConnection.js"
import format from "pg-format";

//Pg-format para limitar, ordenar y paginación
export const formatLimitOrderPage = async({order_by = 'stock_ASC', limit = 4, page = 1}) => {
    const [attribute, direction] = order_by.split('_');
    const offset = (page - 1) * limit;

    const formatQuery = format(
        'SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s',
        attribute,
        direction,
        limit,
        offset
    )

    const response = await pool.query(formatQuery)
    return response.rows
}
