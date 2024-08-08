import { defineCollection, z } from 'astro:content';

const techsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    link: z.string().url(),
    icon: z.string(),
    name: z.string(),
    features: z.array(z.string()).optional(),
    tag: z.enum([
      'framework',
      'styling',
      'tool',
      'core',
      'language',
      'db',
      'env',
      'design',
      'state',
    ]),
  }),
});

export const collections = { techs: techsCollection };
