export type Opcion = {
    text: string;
    value: number;
};

export type Pregunta = {
    id: number;
    question: string;
    options: Opcion[];
};

export const testFinanciero: Pregunta[] = [
    {
        id: 1,
        question: "¿Tu pareja o alguien cercano controla la manera en que gastas tu dinero?",
        options: [
            { text: "Si", value: 1 },
            { text: "No", value: 0 },
        ],
    },
    {
        id: 2,
        question: "¿Te impiden acceder a tus ingresos o cuentas bancarias personales?",
        options: [
            { text: "Si", value: 1 },
            { text: "No", value: 0 },
        ],
    },
    {
        id: 3,
        question: "¿Necesitas pedir permiso para realizar compras o usar tu propio dinero?",
        options: [
            { text: "Si", value: 1 },
            { text: "No", value: 0 },
        ],
    },
    {
        id: 4,
        question: "¿Alguien te obliga a entregar parte o todo tu salario?",
        options: [
            { text: "Si", value: 1 },
            { text: "No", value: 0 },
        ],
    },
    {
        id: 5,
        question: "¿Han realizado deudas, préstamos o compras a tu nombre sin tu consentimiento?",
        options: [
            { text: "Si", value: 1 },
            { text: "No", value: 0 },
        ],
    },
    {
        id: 6,
        question: "¿Te han impedido trabajar, estudiar o buscar empleo?",
        options: [
            { text: "Si", value: 1 },
            { text: "No", value: 0 },
        ],
    },
    {
        id: 7,
        question: "¿Te hacen sentir culpable o incapaz de manejar tus finanzas?",
        options: [
            { text: "Si", value: 1 },
            { text: "No", value: 0 },
        ],
    },
    {
        id: 8,
        question: "¿Dependes económicamente de alguien que usa eso para manipularte o amenazarte?",
        options: [
            { text: "Si", value: 1 },
            { text: "No", value: 0 },
        ],
    },

];
