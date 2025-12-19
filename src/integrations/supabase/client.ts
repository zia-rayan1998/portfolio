// Lightweight stub for projects that don't use Supabase.
// This module intentionally avoids importing `@supabase/supabase-js` so
// the package can be removed from `package.json` without breaking dynamic imports.

function createMissingStub() {
  const err = (op: string) => async () => ({ data: null, error: new Error(`Supabase not configured: ${op}`) });
  return {
    from: () => ({ select: err('select'), insert: err('insert'), update: err('update'), delete: err('delete') }),
    rpc: err('rpc'),
    auth: { signIn: err('signIn'), signOut: err('signOut'), user: null },
  } as unknown;
}

// Export a stubbed `supabase` object. If you later add Supabase back,
// replace this with the real client creation.
export const supabase: any = createMissingStub();