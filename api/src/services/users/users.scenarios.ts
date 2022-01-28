import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { email: 'String5790774' } },
    two: { data: { email: 'String2189842' } },
  },
})

export type StandardScenario = typeof standard
