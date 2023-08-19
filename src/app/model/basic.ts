import type { Category, Model } from "./types";

export const model: Model = {
  score: (meta, params, _langName) => {
    const scoreByTrait = Object.values(meta).reduce(
      (acc, trait) => {
        acc[trait.category] = acc[trait.category] || 0;
        const traitWeight =
          (trait.category === "ecosystem" ||
          trait.category === "community" ||
          trait.category === "hiring"
            ? params.socialValues?.[trait.category] || 0
            : params.technicalValues?.[trait.category]) || 0;
        const traitValue = trait.value === "na" ? 0 : trait.value;
        if (!Number.isFinite(traitValue))
          throw new Error(`invalid traitValue ${JSON.stringify(trait)}`);
        const adder = trait.traitScalar * traitValue * traitWeight;
        acc[trait.category] += adder;
        return acc;
      },
      {} as Record<Category, number>,
    );
    return Object.values(scoreByTrait).reduce((x, y) => x + y, 0);
  },
};
