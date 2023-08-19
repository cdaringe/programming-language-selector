import React from "react";
import {
  LangMetaByLang,
  LangRatingByDomain,
  PLSelectParamsOrNull,
} from "../model/model";

import rawData from "../../../data.json";
import rawDomainData from "../../../datadomain.json";
import { model as basicModel } from "../model/basic";
import { rank } from "../model/common";
const data = rawData as LangMetaByLang;
const domainData = rawDomainData as LangRatingByDomain;

export const Ranker: React.FC<{
  params: PLSelectParamsOrNull;
}> = ({ params }) => {
  const [model, _setModel] = React.useState(basicModel);
  const rankings = React.useMemo(() => {
    const rankings = rank(model.score, params, data, domainData);
    const scores = rankings.map(([, score]) => score);
    const max = Math.max(...scores);
    const min = Math.min(...scores);
    const domain = max - min;
    const scale = (score: number) => (score - min) / domain;
    return rankings.map(([x, s]) => [x, scale(s).toFixed(2)]);
  }, [model, params]);
  return (
    <>
      <span>
        <label htmlFor="model">Model</label>
        <select
          style={{ marginLeft: 8, display: "inline-block" }}
          name="model"
          disabled
        >
          <option value="basic">Basic</option>
        </select>
      </span>
      <table>
        <tbody>
          {rankings.map(([name, score]) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
