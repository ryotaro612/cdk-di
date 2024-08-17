import { Testing } from "projen/lib/testing";
import { TsProject } from "../src/ts";

test("snapshot", () => {
  const project = new TsProject({name: "my-projen-project"});
  const snapshot = Testing.synth(project);
   expect(snapshot).toMatchSnapshot();
  //expect(snapshot[".github/workflows/release.yml"]).toBeDefined();
});
