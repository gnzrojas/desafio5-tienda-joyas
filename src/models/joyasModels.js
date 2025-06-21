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

//Filtros por precio máximo, precio mínimo, categoría y metal
export const filterModel = async ({precio_min, precio_max, categoria, metal}) => {
    let filtros = [];
    const params = [];

    if(precio_min) {
        filtros.push(`precio >= $${params.length + 1}`);
        params.push(precio_min)
    }

    if(precio_max) {
        filtros.push(`precio <= $${params.length + 1}`);
        params.push(precio_max);
    }

    if(categoria) {
        filtros.push(`categoria = $${params.length + 1}`);
        params.push(categoria);
    }

    if(metal) {
        filtros.push(`metal = $${params.length + 1}`);
        params.push(metal);
    }

    let querySql = 'SELECT * FROM inventario';
    if(filtros.length >0) {
        querySql += ` WHERE ${filtros.join(' AND ')}`;
    }

    const { rows: joyas } = await pool.query(querySql, params);
    return joyas;

}
