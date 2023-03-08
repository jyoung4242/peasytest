import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";

type testRecordtype = Record<string, Array<object>>;

const model = {
  myDir: <testRecordtype>{},
};

model.myDir.test = [];
model.myDir.demo = [
  { id: 0, x: 0, y: 0, str: "Hello" },
  { id: 1, x: 1, y: 2, str: "World" },
];

let testkey = "test";

const template = `
<div class="app">
  <div class="record" \${rec<=*myDir[${testkey}]:id}>
    \${rec.str}
  </div>
</div>
`;

UI.create(document.body, template, model);
UI.initialize(100 / 6);

setInterval(() => {
  console.log(testkey);

  if (testkey == "test") testkey = "demo";
  else testkey = "test";
}, 2000);
