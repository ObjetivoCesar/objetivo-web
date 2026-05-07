CREATE TABLE IF NOT EXISTS clientes_consentimiento (
  id INT AUTO_INCREMENT PRIMARY KEY,
  consent_uuid VARCHAR(36) UNIQUE NOT NULL,
  nombre VARCHAR(255),
  whatsapp VARCHAR(50),
  email VARCHAR(255),
  ciudad VARCHAR(255),
  sector VARCHAR(255),
  problema TEXT,
  consent_whatsapp TINYINT(1) DEFAULT 0,
  consent_email TINYINT(1) DEFAULT 0,
  consent_media TINYINT(1) DEFAULT 0,
  duracion_meses INT DEFAULT 6,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
