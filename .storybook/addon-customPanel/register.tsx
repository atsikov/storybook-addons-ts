import addons, { types } from "@storybook/addons";
import * as React from "react";

addons.register("storybook/storybook-addon-customPanel", () => {
    addons.add("storybook/storybook-addon-customPanel", {
        type: types.PANEL,
        title: "Custom panel",
        render: () => <div>I am a panel</div>,
    });
});
