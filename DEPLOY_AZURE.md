# Déploiement sur Azure Static Web Apps

Ce guide décrit deux options pour déployer ce projet Vite/React sur Azure Static Web Apps :

- Option A — via GitHub Actions (workflow déjà ajouté dans `.github/workflows/azure-static-web-apps.yml`).
- Option B — création via Azure CLI (créera la ressource et peut lier GitHub automatiquement).

Important : le workflow s'attend à ce que la branche par défaut soit `master` et que le dossier de sortie du build soit `dist`. Si vos paramètres diffèrent, modifiez `.github/workflows/azure-static-web-apps.yml`.

## Pré-requis

- Node.js 18+ et `npm` (pour construire localement)
- Azure CLI installé et connecté (`az login`) si vous utilisez les commandes CLI
- Un dépôt GitHub contenant ce projet

## Construire localement (PowerShell)

Exécutez depuis la racine du projet :

```powershell
cd "c:\Users\BAH\Desktop\A.V.P.F.G\guinee-propre-fleurie"
npm ci
npm run build
Get-ChildItem -Name dist
```

Si le dossier `dist` apparaît et contient vos fichiers statiques (`index.html`, `assets`, etc.), la build est valide.

## Option A — Déployer avec GitHub Actions (recommandée)

1. Créez une Azure Static Web App dans le portail Azure (ou via CLI). Notez l'URL et ouvrez la page de la ressource.
2. Dans la page de la Static Web App -> **Manage** -> **Deployment Token**, copiez le token.
3. Dans votre dépôt GitHub, allez dans **Settings > Secrets and variables > Actions** et créez un nouveau secret :
   - **Name**: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - **Value**: le token copié
4. Poussez vos changements sur la branche `master`. Le workflow `.github/workflows/azure-static-web-apps.yml` se déclenchera automatiquement et déploiera le contenu de `dist`.

Commande git (PowerShell) :

```powershell
git add .
git commit -m "Add Azure SWA workflow and deploy docs"
git push origin master
```

## Option B — Créer la Static Web App avec Azure CLI

Remplacez les valeurs entre `<>` par vos informations :

```powershell
az login
az group create --name <ResourceGroupName> --location <Location>
az staticwebapp create --name <AppName> --resource-group <ResourceGroupName> --source https://github.com/<GitHubUser>/<RepoName> --branch master --location <Location> --sku Free
```

Notes :
- La commande peut ouvrir une fenêtre pour autoriser l'accès GitHub.
- L'option `--source` peut être omise si vous préférez connecter le dépôt manuellement depuis le portail.

## Si la build produit un dossier différent de `dist`

1. Modifiez la clé `output_location` dans `.github/workflows/azure-static-web-apps.yml` pour pointer vers le dossier de sortie correct.
2. Si vous utilisez Vite et une configuration personnalisée, vérifiez `vite.config.ts` et `package.json` > `build`.

## Remarques de sécurité

- Ne partagez jamais le token de déploiement. Utilisez les secrets GitHub.
- Restreignez l'accès Azure si nécessaire au niveau du groupe de ressources ou des RBAC.

## Besoin d'aide ?

Si vous voulez, je peux :
- exécuter la build localement ici et confirmer que `dist` est présent (je vais le faire maintenant si vous le permettez),
- générer une version du workflow adaptée (autre branche ou output),
- ou vous guider pas-à-pas dans le portail Azure.

# Déploiement sur Azure App Services

Ce guide décrit comment déployer ce projet Vite/React sur Azure App Services.

## Étapes de déploiement

1. **Préparer l'environnement**  
   - Assurez-vous que votre application fonctionne localement.
   - Vérifiez que vous avez installé Azure CLI et que vous êtes connecté avec `az login`.

2. **Créer un groupe de ressources**  
   - Exécutez la commande suivante :  
     ```bash
     az group create --name <nom-du-groupe> --location <emplacement>
     ```

3. **Créer un plan App Service**  
   - Exécutez la commande suivante :  
     ```bash
     az appservice plan create --name <nom-du-plan> --resource-group <nom-du-groupe> --sku B1 --is-linux
     ```

4. **Créer l'application Web**  
   - Exécutez la commande suivante :  
     ```bash
     az webapp create --resource-group <nom-du-groupe> --plan <nom-du-plan> --name <nom-de-lapplication> --runtime "NODE|18-lts"
     ```

5. **Déployer l'application**  
   - Exécutez la commande suivante :  
     ```bash
     az webapp up --name <nom-de-lapplication> --resource-group <nom-du-groupe>
     ```

## Remarques
- Remplacez `<nom-du-groupe>`, `<nom-du-plan>`, et `<nom-de-lapplication>` par vos propres valeurs.
- Assurez-vous que le nom de l'application est unique sur Azure.
