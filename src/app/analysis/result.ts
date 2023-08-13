import {
  Category,
  LangMeta,
  LangMetaByLang,
  LangRatingByDomain,
  PLSelectParams,
} from "../model";

const score = (
  meta: LangMeta,
  params: PLSelectParams,
  langName: string
): number => {
  const scoreByTrait = Object.values(meta).reduce((acc, trait) => {
    acc[trait.category] = acc[trait.category] || 0;
    const traitWeight =
      (trait.category === "ecosystem" ||
      trait.category === "community" ||
      trait.category === "hiring"
        ? params.socialValues[trait.category]
        : params.technicalValues[trait.category]) || 0;
    const adder =
      trait.traitScalar *
      (trait.value === "na" ? 0 : trait.value) *
      traitWeight;
    acc[trait.category] += adder;
    return acc;
  }, {} as Record<Category, number>);
  return Object.values(scoreByTrait).reduce((x, y) => x + y, 0);
};

export const rank = (
  params: PLSelectParams,
  meta: LangMetaByLang,
  domainData: LangRatingByDomain
) => {
  const scores: [lang: string, score: number][] = [];
  // @warn, we only support single domain righ tnow
  const domain = Object.keys(params.domains)[0];
  if (!domain) throw new Error(`domain not found`);
  const domainScalars = domainData[domain];
  for (const langName in meta) {
    const domainScalar = domainScalars[langName];
    scores.push([
      langName,
      score(meta[langName], params, langName) * domainScalar,
    ]);
  }
  return scores.sort(([, a], [, b]) => (a > b ? -1 : 1));
};
