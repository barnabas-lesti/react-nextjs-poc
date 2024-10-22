import { ExampleComponent } from "#features/example/component";
import { Link } from "#ui/link/component";

export default () => {
  return (
    <>
      <h1>Example</h1>
      <ExampleComponent />
      <p>
        <Link href="/">Home</Link>
      </p>
    </>
  );
};
