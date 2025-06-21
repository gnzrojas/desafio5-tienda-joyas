
export const joyasHateoas = (joyas) => {
    return joyas.map((joya) => ({
        ...joya,
        links: [
            { rel: 'self', href: `/api/joyas/joya/${joya.id}`, method: 'GET' },
            { rel: 'filtros', href: `/api/joyas/filtros?categoria=${joya.categoria}&metal=${joya.metal}`, mehotd: 'GET' }
        ]
    }));
};

