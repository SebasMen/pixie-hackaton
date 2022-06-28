export const calculator = {
  // Dogs
  dog: {
    cachorros: {
      feedTimes: 3,
      activities: {
        low: {
          2: 8, // Año : Multiplicacion
          3: 7,
          4: 7,
          5: 6,
          6: 6,
          7: 5,
          8: 5,
          9: 4,
          10: 4,
          11: 4,
          12: 3.4,
        },
        medium: {
          2: 8, // Año : Multiplicacion
          3: 7,
          4: 7,
          5: 6,
          6: 6,
          7: 5,
          8: 5,
          9: 4,
          10: 4,
          11: 4,
          12: 3.4,
        },
        high: {
          2: 8, // Año : Multiplicacion
          3: 7,
          4: 7,
          5: 6,
          6: 6,
          7: 5,
          8: 5,
          9: 4,
          10: 4,
          11: 4,
          12: 3.4,
        },
      },
    },
    adultos: {
      feedTimes: 2,
      activities: {
        low: {
          1: 3.1, // Año : Multiplicacion
          2: 3.15,
          3: 3.1,
          4: 3,
          5: 3,
          6: 3,
        },
        medium: {
          1: 3.4, // Año : Multiplicacion
          2: 3.35,
          3: 3.3,
          4: 3.3,
          5: 3.3,
          6: 3.3,
        },
        high: {
          1: 3.7, // Año : Multiplicacion
          2: 3.7,
          3: 3.7,
          4: 3.6,
          5: 3.6,
          6: 3.6,
        },
      },
    },
    senior: {
      feedTimes: 2,
      activities: {
        low: {
          7: 2.8, // Año : Multiplicacion
          8: 2.8,
          9: 2.8,
          10: 2.8,
          11: 2.8,
          12: 2.8,
          13: 2.7,
          14: 2.7,
          15: 2.7,
          16: 2.7,
          17: 2.7,
        },
        medium: {
          7: 2.8, // Año : Multiplicacion
          8: 2.8,
          9: 2.8,
          10: 2.8,
          11: 2.8,
          12: 2.8,
          13: 2.7,
          14: 2.7,
          15: 2.7,
          16: 2.7,
          17: 2.7,
        },
        high: {
          7: 3, // Año : Multiplicacion
          8: 3,
          9: 3,
          10: 3,
          11: 3,
          12: 3,
          13: 2.9,
          14: 2.9,
          15: 2.9,
          16: 2.9,
          17: 2.9,
        },
      },
    },
  },

  // Cats
  cat: {
    cachorros: {
      feedTimes: 3,
      activities: {
        low: {
          2: 9, // Año : Multiplicacion
          3: 9,
          4: 7,
          5: 7,
          6: 6,
          7: 6,
          8: 5,
          9: 5,
          10: 4.5,
          11: 4,
          12: 4,
        },
        medium: {
          2: 9, // Año : Multiplicacion
          3: 9,
          4: 7,
          5: 7,
          6: 6,
          7: 6,
          8: 5,
          9: 5,
          10: 4.5,
          11: 4,
          12: 4,
        },
        high: {
          2: 9, // Año : Multiplicacion
          3: 9,
          4: 7,
          5: 7,
          6: 6,
          7: 6,
          8: 5,
          9: 5,
          10: 4.5,
          11: 4,
          12: 4,
        },
      },
    },
    adultos: {
      feedTimes: 2,
      activities: {
        low: {
          1: 3.8, // Año : Multiplicacion
          2: 3.8,
          3: 3.6,
          4: 3.6,
          5: 3.6,
          6: 3.6,
        },
        medium: {
          1: 4, // Año : Multiplicacion
          2: 4,
          3: 3.8,
          4: 3.8,
          5: 3.8,
          6: 3.8,
        },
        high: {
          1: 4.2, // Año : Multiplicacion
          2: 4.2,
          3: 4,
          4: 4,
          5: 4,
          6: 4,
        },
      },
    },
    senior: {
      feedTimes: 2,
      activities: {
        low: {
          7: 2.8, // Año : Multiplicacion
          8: 2.8,
          9: 2.8,
          10: 2.8,
          11: 2.8,
          12: 2.8,
          13: 2.7,
          14: 2.7,
          15: 2.7,
          16: 2.7,
          17: 2.7,
        },
        medium: {
          7: 2.8, // Año : Multiplicacion
          8: 2.8,
          9: 2.8,
          10: 2.8,
          11: 2.8,
          12: 2.8,
          13: 2.7,
          14: 2.7,
          15: 2.7,
          16: 2.7,
          17: 2.7
        },
        high: {
          7: 3, // Año : Multiplicacion
          8: 3,
          9: 3,
          10: 3,
          11: 3,
          12: 3,
          13: 2.9,
          14: 2.9,
          15: 2.9,
          16: 2.9,
          17: 2.9
        },
      },
    },
  },
};

export const getPetFeedData = ({ name, weight, age, range, type, activity }: PetInfo): PetFeedData | undefined => {
  const data = calculator[type][range];

  if (!data || !age) return;

  const { activities, feedTimes } = data;

  const multiply = (activities[activity] as any)[age] as number;
  const grams = Math.round((multiply / 100) * weight * 1000);

  if (isNaN(grams) || !grams) return;

  return {
    msg: `¡${name.toUpperCase()} debe consumir un total de ${grams} gramos al dia en ${feedTimes} porciones!`,
    grams,
    type,
    range,
  };
};

export interface PetInfo {
  name: string;
  weight: number;
  age: number;
  range: 'cachorros' | 'adultos' | 'senior';
  type: 'dog' | 'cat';
  activity: 'low' | 'medium' | 'high';
}

export interface PetFeedData {
  msg: string;
  grams: number;
  type: 'dog' | 'cat';
  range: 'cachorros' | 'adultos' | 'senior';
}
