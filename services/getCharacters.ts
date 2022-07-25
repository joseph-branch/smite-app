import { CharacterArgs } from "../common/types/character";
import { PrismaClient } from "@prisma/client";

export async function getCharacters(args: CharacterArgs) {
  const prisma = new PrismaClient();

  const characters = await prisma.character.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return characters;
}
