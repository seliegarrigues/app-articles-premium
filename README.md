# app-articles-premium
gestion d'articles dans le domaine du numérique
## 📦 Installation du Back-End

Le back-end du projet **KeepConnect** utilise `Node.js` et `MongoDB`.  

### 1️⃣ Cloner le dépôt
```sh
git clone git@github.com:seliegarrigues/app-articles-premium.git
cd KeepConnect-backend
### installer les dépendances
le dossier node_modules n'est pas inclus dans le dépôt Git
Après le clonage, installez les dépendances avec 
npm install
###configuration des variables d'environnement
créer un fichier .env a la racine du projet et ajoutez les configurations 
necessaires :
touch .env
Exemple de fichier .env :
PORT=5000
MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/keepconnect
JWT_SECRET=supersecretkey
Lancer le serveur : 
npm start
le serveur tournera sur http://localhost : 5000( ou autre port défini dans 
.env)
