-- ============================================
-- VisuaNova Studio — Schema Base de Données
-- À exécuter dans Supabase SQL Editor
-- ============================================

-- Table des leads (demandes de devis)
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  project_description TEXT NOT NULL,
  name TEXT,
  phone TEXT,
  budget TEXT,
  deadline TEXT,
  service_type TEXT,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_progress', 'converted', 'lost')),
  notes TEXT,
  source TEXT DEFAULT 'website',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Index pour les recherches fréquentes
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- Trigger pour updated_at automatique
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- ============================================
-- Row Level Security (RLS)
-- ============================================

-- Activer RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Politique INSERT : tout le monde peut soumettre un lead (anon)
CREATE POLICY "Anyone can submit a lead"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Politique SELECT : seuls les utilisateurs authentifiés peuvent lire
CREATE POLICY "Authenticated users can read leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Politique UPDATE : seuls les utilisateurs authentifiés peuvent modifier
CREATE POLICY "Authenticated users can update leads"
  ON leads
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Politique DELETE : seuls les utilisateurs authentifiés peuvent supprimer
CREATE POLICY "Authenticated users can delete leads"
  ON leads
  FOR DELETE
  TO authenticated
  USING (true);

-- ============================================
-- Notification par email (optionnel)
-- Utilise un trigger + webhook Supabase ou n8n
-- ============================================

-- Fonction de notification (appelle un webhook)
CREATE OR REPLACE FUNCTION notify_new_lead()
RETURNS TRIGGER AS $$
BEGIN
  -- Supabase envoie automatiquement un événement via Realtime
  -- Tu peux aussi connecter un webhook n8n ici via pg_net:
  -- PERFORM net.http_post(
  --   url := 'https://ton-n8n.app/webhook/new-lead',
  --   body := json_build_object('email', NEW.email, 'project', NEW.project_description)::text,
  --   headers := '{"Content-Type": "application/json"}'::jsonb
  -- );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_new_lead
  AFTER INSERT ON leads
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_lead();
