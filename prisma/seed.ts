import { PrismaClient } from "@prisma/client";
import data from "./seeds/data/characters.json";

const prisma = new PrismaClient();

async function main() {
  data.map(async (d) => {
    const types = d.Type.split(",");

    await prisma.character.create({
      data: {
        characterId: d.id,
        cardUrl: d.godCard_URL,
        iconUrl: d.godIcon_URL,
        type: types[0],
        archetype: d.Name === "Persephone" ? "Ranged" : types[1],
        attackSpeed: d.AttackSpeed,
        attackSpeedPerLevel: d.AttackSpeedPerLevel,
        health: d.Health,
        healthPerFive: d.HealthPerFive,
        healthPerLevel: d.HealthPerFive,
        hP5PerLevel: d.HP5PerLevel,
        magicalPower: d.MagicalPower,
        magicalPowerPerLevel: d.MagicalPowerPerLevel,
        magicProtection: d.MagicProtection,
        magicProtectionPerLevel: d.MagicProtectionPerLevel,
        mana: d.Mana,
        manaPerFive: d.ManaPerFive,
        manaPerLevel: d.ManaPerLevel,
        mP5PerLevel: d.MP5PerLevel,
        physicalPower: d.PhysicalPower,
        physicalPowerPerLevel: d.PhysicalPowerPerLevel,
        physicalProtection: d.PhysicalProtection,
        physicalProtectionPerLevel: d.PhysicalProtectionPerLevel,
        speed: d.Speed,
        description: "",
        lore: d.Lore,
        name: d.Name,
        role: d.Roles,
        title: d.Title,
        pantheon: d.Pantheon,
        autoBanned: d.AutoBanned === "n" ? false : true,
        latestGod: d.latestGod === "n" ? false : true,
        onFreeRotation: d.OnFreeRotation !== "true" ? false : true,
      },
    });

    await prisma.ability.createMany({
      data: [
        {
          abilityId: d.Ability_1.Id,
          description: d.Ability_1.Description.itemDescription.description,
          name: d.Ability_1.Summary,
          url: d.Ability_1.URL,
          characterId: d.id,
        },
        {
          abilityId: d.Ability_2.Id,
          description: d.Ability_2.Description.itemDescription.description,
          name: d.Ability_2.Summary,
          url: d.Ability_2.URL,
          characterId: d.id,
        },
        {
          abilityId: d.Ability_3.Id,
          description: d.Ability_3.Description.itemDescription.description,
          name: d.Ability_3.Summary,
          url: d.Ability_3.URL,
          characterId: d.id,
        },
        {
          abilityId: d.Ability_4.Id,
          description: d.Ability_4.Description.itemDescription.description,
          name: d.Ability_4.Summary,
          url: d.Ability_4.URL,
          characterId: d.id,
        },
        {
          abilityId: d.Ability_5.Id,
          description: d.Ability_5.Description.itemDescription.description,
          name: d.Ability_5.Summary,
          url: d.Ability_5.URL,
          characterId: d.id,
        },
      ],
    });
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
