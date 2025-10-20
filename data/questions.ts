export type Option = {
    text: string;
    value: number;
};

export type Question = {
    id: number;
    question: string;
    options: Option[];
};

export const questions: Question[] = [
    {
        id: 1,
        question: "¿Sientes que tu pareja la controla constantemente?",
        options: [
            { text: "Si", value: 3 },
            { text: "A veces", value: 2 },
            { text: "Rara vez", value: 1 },
            { text: "No", value: 0 },
        ],
    },
    {
        id: 2,
        question: "¿Te acusa de infidelidad o de que actúas en forma sospechosa?",
        options: [
            { text: "Si", value: 3 },
            { text: "A veces", value: 2 },
            { text: "Rara vez", value: 1 },
            { text: "No", value: 0 },
        ],
    },
    {
        id: 3,
        question: "¿Has perdido contacto con amigas, familiares, compañeras/os detrabajo para evitar que tu pareja se moleste?",
        options: [
            { text: "Si", value: 3 },
            { text: "A veces", value: 2 },
            { text: "Rara vez", value: 1 },
            { text: "No", value: 0 },
        ],
    },
    {
        id: 4,
        question: "¿Te critica y humilla, en público o en privado, sobre tu apariencia, tu forma de ser, tu forma de vestir y el modo en el que haces tus labores?",
        options: [
            { text: "Si", value: 3 },
            { text: "A veces", value: 2 },
            { text: "Rara vez", value: 1 },
            { text: "No", value: 0 },
        ],
    },
    {
        id: 5,
        question: "¿Controla estrictamente tus ingresos o el dinero que te entrega, originando discusiones?",
        options: [
            { text: "Si", value: 3 },
            { text: "A veces", value: 2 },
            { text: "Rara vez", value: 1 },
            { text: "No", value: 0 },
        ],
    },
    {
        id: 6,
        question: "Cuando quiere que cambies de comportamiento, ¿te presiona con el silencio, con la indiferencia, o te priva de dinero?",
        options: [
            { text: "Si", value: 3 },
            { text: "A veces", value: 2 },
            { text: "Rara vez", value: 1 },
            { text: "No", value: 0 },
        ],
    },
    {
        id: 7,
        question: "¿Tu pareja tiene cambios bruscos de humor o se comporta distinto contigo en público, como si fuera otra persona?",
        options: [
            { text: "Si", value: 3 },
            { text: "A veces", value: 2 },
            { text: "Rara vez", value: 1 },
            { text: "No", value: 0 },
        ],
    },
    {
        id: 8,
        question: "¿Sientes que está en permanente tensión y que, hagas lo que hagas, él se irrita o la culpabiliza?",
        options: [
            { text: "Si", value: 3 },
            { text: "A veces", value: 2 },
            { text: "Rara vez", value: 1 },
            { text: "No", value: 0 },
        ],
    },
    {
        id: 9,
        question: "¿Te ha golpeado con sus manos, con un objeto o te ha lanzado cosas cuando se enoja o discuten, o lo ha intentado?",
        options: [
            { text: "Si", value: 3 },
            { text: "A veces", value: 2 },
            { text: "Rara vez", value: 1 },
            { text: "No", value: 0 },
        ],
    },
    {
        id: 10,
        question: "¿Te ha amenazado alguna vez con un objeto o arma, o con matarse a él, a ti o a algún miembro de tu familia?",
        options: [
            { text: "Si", value: 3 },
            { text: "A veces", value: 2 },
            { text: "Rara vez", value: 1 },
            { text: "No", value: 0 },
        ],
    },
    {
        id: 11,
        question: "¿Sientes que cedes a sus requerimientos sexuales por temor o te ha forzado a tener relaciones sexuales?",
        options: [
            { text: "Si", value: 3 },
            { text: "A veces", value: 2 },
            { text: "Rara vez", value: 1 },
            { text: "No", value: 0 },
        ],
    },
    {
        id: 12,
        question: "Después de un episodio violento, ¿se muestra cariñoso y atento, te regala cosas y te promete que nunca más volverá a golpearte o insultarte y que ‘todo cambiará’?",
        options: [
            { text: "Si", value: 3 },
            { text: "A veces", value: 2 },
            { text: "Rara vez", value: 1 },
            { text: "No", value: 0 },
        ],
    },
    {
        id: 13,
        question: "¿Has buscado o recibido ayuda por lesiones que él te ha causado?(Primeros auxilios, atención médica, psicológica, o legal)",
        options: [
            { text: "Si", value: 3 },
            { text: "A veces", value: 2 },
            { text: "Rara vez", value: 1 },
            { text: "No", value: 0 },
        ],
    },
    {
        id: 14,
        question: "¿Es violento con los hijos/as o con otras personas?",
        options: [
            { text: "Si", value: 3 },
            { text: "A veces", value: 2 },
            { text: "Rara vez", value: 1 },
            { text: "No", value: 0 },
        ],
    },
    {
        id: 15,
        question: "¿Ha sido necesario llamar a la policía o lo has intentado al sentir que tu vida o seguridad, y la de tu familia o amigos han sido puestas en peligro por tu pareja?",
        options: [
            { text: "Si", value: 3 },
            { text: "A veces", value: 2 },
            { text: "Rara vez", value: 1 },
            { text: "No", value: 0 },
        ],
    },

];
