declare module "tailwindcss/lib/util/flattenColorPalette" {
  import { ColorObject } from "tailwindcss/tailwind-config";

  export default function flattenColorPalette(
    colors: ColorObject,
  ): Record<string, string>;
}
