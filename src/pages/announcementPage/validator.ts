import { z } from "zod";

export const commentUpdateschema = z.object({
  text: z.string().min(3),
});

export type ICommentUpdateData = z.infer<typeof commentUpdateschema>;
