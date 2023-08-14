import { rank } from "../analysis/result";
import {
  LangMetaByLang,
  LangRatingByDomain,
  PLSelectParams,
  PLSelectParamsOrNull,
} from "../model";

import rawData from "../../../data.json";
import rawDomainData from "../../../datadomain.json";
const data = rawData as LangMetaByLang;
const domainData = rawDomainData as LangRatingByDomain;

export const Ranker: React.FC<{
  params: PLSelectParamsOrNull;
}> = ({ params }) => {
  const rankings = rank(params, data, domainData);
  const scores = rankings.map(([, score]) => score);
  const max = Math.max(...scores);
  const min = Math.min(...scores);
  const domain = max - min;
  const scale = (score: number) => (score - min) / domain;
  const normalizedRanings = rankings.map(([x, s]) => [x, scale(s).toFixed(2)]);
  return (
    <table>
      <tbody>
        {normalizedRanings.map(([name, score]) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
