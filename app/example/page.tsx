import { type Metadata } from "next";

import { ExampleComponent } from "#features/example/component";
import { UiButtonComponent } from "#ui/button/component";
import { UiAccessAlarmIcon } from "#ui/icons";
import { UiLinkComponent } from "#ui/link/component";

export const metadata: Metadata = {
  title: "Example",
  description: "Example page",
};

export default () => {
  return (
    <>
      <h1>Example</h1>

      <ExampleComponent name="there" />
      <ExampleComponent />

      <UiButtonComponent>Primary</UiButtonComponent>

      <UiAccessAlarmIcon />

      <UiLinkComponent href="/">Home</UiLinkComponent>
    </>
  );
};
