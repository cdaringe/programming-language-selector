import {
  Category,
  LangMeta,
  LangMetaByLang,
  LangRatingByDomain,
  PLSelectParamsOrNull,
} from "../model";

const score = (
  meta: LangMeta,
  params: PLSelectParamsOrNull,
  _langName: string,
): number => {
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
};

export const rank = (
  params: PLSelectParamsOrNull,
  meta: LangMetaByLang,
  domainData: LangRatingByDomain,
) => {
  const scores: [lang: string, score: number][] = [];
  // @warn, we only support single domain righ tnow
  const candidateDomain = Object.keys(params.domains || {})[0];
  const domainScalars = domainData[candidateDomain as keyof typeof domainData];
  for (const langName in meta) {
    const domainScalar = domainScalars?.[langName] || 1;
    if (!Number.isFinite(domainScalar))
      throw new Error(
        `invalid domainScalar ${domainScalar} (${domainScalars})`,
      );
    const langMeta = meta[langName];
    if (!langMeta) throw new Error(`missing meta for lang ${langName}`);
    scores.push([langName, score(langMeta, params, langName) * domainScalar]);
  }
  return scores.sort(([, a], [, b]) => (a > b ? -1 : 1));
};
