// register icon packs types to enable icon-name autocompletion here

import mdi from "@iconify-json/mdi/icons.json";
import lucide from "@iconify-json/lucide/icons.json";

type MdiIcon = `mdi:${keyof typeof mdi.icons}`;
type LucideIcon = `lucide:${keyof typeof lucide.icons}`;

export type IconName = MdiIcon | LucideIcon;
