// Configuración pública (la clave "anon" de Supabase es pública por diseño; la seguridad la dan las políticas RLS).
window.DM_CONFIG = {
  SUPABASE_URL: '',
  SUPABASE_ANON_KEY: '',
  PRICE_MONTHLY_LABEL: '',   // p. ej. "X,XX € / mes" (debe coincidir con el precio de Stripe)
  PRICE_YEARLY_LABEL: '',    // p. ej. "XX,XX € / año"
  TAX_NOTE: '',              // p. ej. "IVA incluido"
  REFUND_NOTE: ''            // tu política de devoluciones
};
