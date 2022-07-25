import { PrismaClient } from "@prisma/client";

export async function getCharacterById(args: { characterId: number }) {
  const prisma = new PrismaClient();

  const { characterId } = args;

  const character = await prisma.character.findUnique({
    where: { characterId },
    include: {
      abilities: true,
    },
  });

  const characterWithAbilities = { character, abilities: character?.abilities };

  return characterWithAbilities;
}
