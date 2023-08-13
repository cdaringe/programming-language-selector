"use client";

import { MultiSelect } from "./components/MultiSelect";
import React from "react";
import type { PLSelectParams, PLSelectParamsOrNull } from "./model";

import { Ranker } from "./components/Ranker";

const DOMAINS = [
  "ar",
  "browser application",
  "command line application",
  "data science",
  "data visualization",
  "desktop application",
  "embedded",
  "etl",
  "game",
  "messaging",
  "mobile application",
  "system",
  "vr",
  "web server",
];

const TECHNICAL_VALUES = ["correctness", "developer ux", "performance"];
const SOCIAL_VALUES = ["community", "ecosystem", "hiring"];

export default function Home() {
  const [params, setParams] = React.useState<PLSelectParamsOrNull>({
    technicalValues: null,
    socialValues: null,
    domains: null,
  });
  const onSelectParams = React.useCallback(
    (x: Partial<typeof params>) => setParams((last) => ({ ...last, ...x })),
    []
  );
  const missingParams = Object.entries(params).reduce(
    (acc, [key, value]) => (value ? acc : [...acc, key]),
    [] as string[]
  );
  console.log({ params });
  return (
    <main>
      <h1>Programming Language Selector</h1>
      <p>
        Score & rank programming languages given the {"languages'"} traits
        (PLT), the {"user's"} perceived social values (SV), and the {"user's"}{" "}
        target programming domain (PD).
      </p>
      <br />
      <p>
        This tool <code>score</code>s programming languages based on their
        characteristics. Values assigned to the default model are both objective
        and subjective. Experienced developers understand that software is art.
        Rarely is there a single means to acheive a given goal in software, thus
        we acknowledge that software development is innately a creative
        endeavour. All persons have biases, but we commit to the best and of our
        abilities to minimize biases in the assessed values. This tool tries to
        enhance the decision making process when selecting a programming
        language. The decision making process is enhanced by using quantitative
        data and qualitative data (re-encoded as quantative data) by taking a
        very complex assessment, and projecting it down into a single
        dimension--a scalar <code>score</code>.
      </p>
      <br />
      <p>
        See the <a href="#faq">FAQ</a> for more.
      </p>
      <h2>Parameters</h2>
      <h3>Domains</h3>
      <MultiSelect<"domains">
        onSelect={onSelectParams}
        name="domains"
        options={DOMAINS}
        maxSelections={1}
      />
      <h3>Technical Values</h3>
      <MultiSelect<"technicalValues">
        zerosum
        onSelect={onSelectParams}
        name="technicalValues"
        options={TECHNICAL_VALUES}
      />
      <h3>Social Values</h3>
      <MultiSelect<"socialValues">
        zerosum
        onSelect={onSelectParams}
        name="socialValues"
        options={SOCIAL_VALUES}
      />
      <h2>Result</h2>
      {missingParams.length ? (
        <p>Missing inputs for: {missingParams.join(", ")}</p>
      ) : (
        <Ranker params={params as PLSelectParams} />
      )}
      <h2 id="faq">FAQ</h2>
      <ol>
        <li>
          <b>My language of interest is missing, why?</b> Feel free to add it!
          See the <code>CONTRIBUTING.md</code> in github.
        </li>
        <li>
          <b>Why is the model designed the way it is?</b> The model is known
          primitive/weak. It is currently a linear weighted sum. Want to improve
          it? Please send a PR with a very concise explanation of your proposal.
          The model should be as simple as possible at the known loss of model
          fidelity.
        </li>
        <li>
          <b>I disagree with the model. Can we tune the values?</b> Sure! Send a
          PR. We reserve the right to reject suggestions.
        </li>
        <li>
          <b>Who makes all the rules here?</b> I do! This is a single person
          project. I am willing to expand ownership to a counsel of informed
          experts. You must demonstrate experience, sympathy, empathy, and the
          pursuit of nirvana. I will check a sample of your comment history in
          public GitHub. You must, above all else, be demonstrably kind in your
          programming public life on GitHub.
        </li>
      </ol>
    </main>
  );
}
