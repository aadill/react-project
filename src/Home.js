import React from "react";
import { Jumb } from "./components/Jumbotron.js";
import { Layout } from "./components/layout.js";

export const Home = () => (
  <div>
    <Jumb />
    <Layout>
      <h2>Home</h2>
      <p>
        There are many ways to apply contextual overrides to a component's
        styling. That being said, it rarely is easy without rigging up a
        well-known targeting CSS selector paradigm and then making them
        accessible for use in interpolations. styled-components solves this use
        case cleanly via the "component selector" pattern. Whenever a component
        is created or wrapped by the styled() factory function, it is also
        assigned a stable CSS class for use in targeting. This allows for
        extremely powerful composition patterns without having to fuss around
        with naming and avoiding selector collisions.
      </p>
    </Layout>
  </div>
);
