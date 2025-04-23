import type { UseFormReturn } from 'react-hook-form';
import type { z } from 'zod';

import type schema from './zod-schema';

type PostFormT = z.infer<typeof schema>;

interface PostForm {
  form: UseFormReturn<PostFormT>;
}

export type { PostFormT, PostForm };