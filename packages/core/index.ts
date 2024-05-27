import { makeInstaller } from '@min-element/utils'
import components from './components'
import "@min-element/theme/index.css";

const installer = makeInstaller(components);

export * from "@min-element/components";
export default installer;
