// Add shims and polyfills
import "@webcomponents/webcomponentsjs/webcomponents-bundle.js";

import { define } from "hybrids";
import Button from "./Button";

// Enable HMR for development
if (process.env.NODE_ENV !== "production") module.hot.accept();

// Define imported web component
define("wch-button", Button);
