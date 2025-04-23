import { z } from "zod";

export default z.object({ title: z.string().min(1), body: z.string().min(1) });
