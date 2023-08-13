type SocialValues = "ecosystem" | "community" | "hiring";
type TechnicalValues = "developer ux" | "correctness" | "performance";

export type PLSelectParams = {
  technicalValues: Record<TechnicalValues, number>;
  socialValues: Record<SocialValues, number>;
  domains: Record<string, number>;
};

export type WithNull<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K] | null;
};

export type PLSelectParamsOrNull = WithNull<PLSelectParams>;

export type Category = SocialValues | TechnicalValues;

type LangName = string;
type TraitName = string;
export type LangMeta = Record<
  TraitName,
  {
    value: number | "na";
    category: Category;
    comment: string;
    traitScalar: number;
  }
>;
export type LangMetaByLang = Record<LangName, LangMeta>;

type Domain = string;
export type LangRatingByDomain = Record<Domain, Record<LangName, number>>;
