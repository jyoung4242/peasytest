import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";

type testRecordtype = Record<string, Array<object>>;

// If you prefer class model:
// class Model {
//   public myDir: testRecordtype = {};
//   public testkey: 'test' | 'demo' = 'demo';
//   public get list() {
//     return this.myDir[this.testkey];
//   }
// }
// const model = new Model();

const model = {
  myDir: <testRecordtype>{},
  testkey: 'demo',
  get list() {
    return model.myDir[model.testkey];
  }

}

model.myDir.test = [];
model.myDir.demo = [{ id: 0, x: 0, y: 0, str: "Hello" }, { id: 1, x: 1, y: 2, str: "World" }];

const template = `
<div class="app">\${testkey}:
  <div class="record" \${rec <=* list:id}>\${rec.str}</div>
</div>
`;

UI.create(document.body, template, model);
UI.initialize(100 / 6);

setInterval(() => {
  if (model.testkey == "test") model.testkey = "demo";
  else model.testkey = "test";
}, 2000);
