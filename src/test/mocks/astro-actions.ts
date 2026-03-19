
import { vi } from 'vitest';

export const actions = {
  insertLead: vi.fn().mockResolvedValue({ data: { success: true }, error: null }),
};