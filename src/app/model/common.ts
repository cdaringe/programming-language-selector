import {
  LangMetaByLang,
  LangRatingByDomain,
  PLSelectParamsOrNull,
  ScoreModel,
} from "./types";

export const rank = (
  score: ScoreModel,
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
