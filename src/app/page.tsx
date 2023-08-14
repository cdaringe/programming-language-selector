"use client";

import React from "react";
import { MultiSelect } from "./components/MultiSelect";
import type { PLSelectParamsOrNull } from "./model";

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
    [],
  );
  const missingParams = Object.entries(params).reduce(
    (acc, [key, value]) =>
      value ? acc : key === /* optional */ "socialValues" ? acc : [...acc, key],
    [] as string[],
  );
  return (
    <main>
      <h1>Programming Language Selector</h1>
      <p>
        Score & rank programming languages given user specified social values
        and the target programming domain.
      </p>
      <br />

      <p>
        See the <a href="#faq">FAQ</a> for more.
      </p>
      <h2>Parameters</h2>
      <h3>Domains</h3>
      {DOMAINS.map((d) => (
        <span
          key={d}
          style={{
            cursor: "pointer",
            display: "inline-block",
            marginRight: 16,
            whiteSpace: "nowrap",
          }}
          onClick={() => {
            setParams((last) => ({
              ...last,
              domains: {
                [d]: 1,
              },
            }));
          }}
        >
          <input id={d} type="radio" name="domains" value={d} />
          <label htmlFor={d}>{d}</label>
        </span>
      ))}
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
        <p
          style={{
            width: "100%",
            padding: 4,
            borderRadius: 4,
            // borderColor: "red",
            borderWidth: 2,
            borderStyle: "dashed",
            minHeight: 200,
          }}
        >
          Missing inputs for: {missingParams.join(", ")}
        </p>
      ) : (
        <Ranker params={params} />
      )}
      <hr style={{ marginTop: 40 }} />
      <h2 id="faq">FAQ</h2>
      <ol>
        <li>
          <h3>What is this tool for?</h3>
          <p>
            This tool <code>score</code>s programming languages based on their
            characteristics. It tries to enhance the decision making process
            when selecting a programming language. The decision making process
            is enhanced by using quantitative data and qualitative data
            (re-encoded as quantative data) by taking a complex assessment and
            projecting it down into a single dimension--a scalar{" "}
            <code>score</code>. The higher the score, the more fit the language
            for your use case.
          </p>
        </li>
        <li>
          <h3>Can I trust this? Are the values correct?</h3>
          <p>
            <b>
              No one can or should agree with every value in the underlying
              assessment data or model
            </b>
            . There are billions of combinations of inputs that the assessment
            data could hold. If you agree with everything as it is in its
            current state, you are not critiquing or looking hard enough. Values
            in default assessment and model are both objective and subjective,
            but mainly the latter. Experienced developers understand that
            software is art. The assessed values liberally reflect subjectively
            artful evaluations <b>with experience and practice driven</b>{" "}
            guidance. All persons have biases, but we commit to the best and of
            our abilities to minimize biases in the assessed values. This tool
            is meant to assist, not to condemn or promote any given tool.
            Absolute judgement or dogmatism are unwelcome. If you are using this
            tool to prove a point, you are using it wrong. Can you trust it?
            Sure. Should this tool alone form your judgements in decision
            making? No, it should not.
          </p>
        </li>
        <li>
          <h3>My language of interest is missing, why?</h3>
          <p>
            Feel free to add it! This project is new. Give it time to catch up.
          </p>
          See the <code>CONTRIBUTING.md</code> in github.
        </li>
        <li>
          <h3>Why is the model designed the way it is?</h3>
          <p>
            The model is known (at current time) to be
            primitive/low-sophistication. Nonetheless, I surmise it does a
            better job at evaluating PL fitness than the average-
            {"developer™'s"} gut feeling, given the breadth of weighted
            dimensions in the model. Want to improve it? Please send a GitHub
            issue with a very concise explanation of your proposal. I am biased
            towards the default model having a high signal:complexity ratio. If
            a better model could be done at high complexity, we can work on
            supporting remote model loading.
          </p>
        </li>
        <li>
          <h3>
            I think the input parameters could be better. Can we change them?
          </h3>
          <p>
            Yes. Please send a GitHub issue with a very concise explanation of
            your proposal. The model should be as simple as possible at the
            known loss of model fidelity.
          </p>
        </li>
        <li>
          <h3>Can we use a different model entirely?</h3>
          <p>
            Absolutely. The functionality is not yet baked in, but this should
            absolutely accept models as input, versus purely the default model.
            <code>rank = f(model, data, userValue)</code>
          </p>
        </li>
        <li>
          <h3>I disagree with the model. Can we tune the values?</h3>
          <p>Sure! Send a PR. We reserve the right to reject suggestions.</p>
        </li>
        <li>
          <h3>
            When I do X, this says A is better than B. That is definitely not
            correct. Why?
          </h3>
          <p>
            There very well could be mis-modeling. Let us work to correct it.
            Please open an issue and make a suggestion.
          </p>
        </li>
        <li>
          <h3>Who makes all the rules here?</h3> I do! This is a single person
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
