# Configuration GitHub Secrets pour Antenox Frontend

Ce projet utilise GitHub Secrets pour protéger les clés API EmailJS.

## 🔐 Secrets à configurer

Allez dans votre repository GitHub :
**Settings** → **Secrets and variables** → **Actions** → **New repository secret**

Ajoutez ces 3 secrets :

| Nom du Secret | Valeur à copier depuis EmailJS |
|---------------|--------------------------------|
| `VITE_EMAILJS_SERVICE_ID` | Votre Service ID (ex: `service_abc123`) |
| `VITE_EMAILJS_TEMPLATE_ID` | Votre Template ID (ex: `template_xyz789`) |
| `VITE_EMAILJS_PUBLIC_KEY` | Votre Public Key (ex: `user_xxxxxxxxx`) |

## 📋 Comment récupérer ces valeurs

1. **Service ID** :
   - Dashboard EmailJS → Email Services
   - Cliquez sur votre service configuré
   - Copiez le "Service ID"

2. **Template ID** :
   - Dashboard EmailJS → Email Templates
   - Cliquez sur votre template
   - Copiez le "Template ID"

3. **Public Key** :
   - Dashboard EmailJS → Account → General
   - Copiez la "Public Key" (ou "User ID")

## 🚀 Déploiement

Une fois les secrets configurés sur GitHub :

1. Les GitHub Actions utiliseront automatiquement ces secrets lors du build
2. Les variables d'environnement seront injectées dans le build de production
3. Votre formulaire de contact fonctionnera automatiquement en production

## 💻 Développement local

Pour le développement local, utilisez le fichier `.env` (non commité) :

```bash
cp .env.example .env
# Remplissez .env avec vos vraies valeurs
```

## ⚠️ Important

- ❌ Ne committez **JAMAIS** le fichier `.env`
- ✅ Le fichier `.env` est déjà dans `.gitignore`
- ✅ Utilisez `.env.example` pour documenter les variables nécessaires
- ✅ Les GitHub Secrets sont sécurisés et chiffrés par GitHub

