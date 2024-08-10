import { defineCollection, reference, z } from 'astro:content';

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
      'infra',
    ]),
  }),
});

const projectsCollections = defineCollection({
  type: 'content',
  schema: ({}) =>
    z.object({
      title: z.string(),
      githubLinK: z.string().url().optional(),
      demoLink: z.string().url(),
      images: z.string().url().optional(),
      techs: z.array(reference('techs')),
    }),
});

export const collections = {
  techs: techsCollection,
  projects: projectsCollections,
};
