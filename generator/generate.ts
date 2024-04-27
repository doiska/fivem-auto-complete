import { Generator } from "./generator.ts";
import { NativeType } from "./types.ts";

const parseNativeType = (apiSet?: string) =>
  apiSet == "server" ? NativeType.SERVER : NativeType.CLIENT;

async function main() {
  const type = parseNativeType("client");

  console.log(`Generating ${type} natives...`);

  const generator = new Generator(type);
  await generator.generate();
}

main();
