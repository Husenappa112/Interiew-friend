# Local database and AI setup

## 1. Install PostgreSQL and pgAdmin (Windows)

1. Install PostgreSQL using the official installer from https://www.postgresql.org/download/windows/.
2. During installation, keep **pgAdmin 4** selected and set a password for the `postgres` administrator user. Save this password privately.
3. Open **pgAdmin 4**, enter the password, then expand **Servers → PostgreSQL**.
4. Right-click **Databases → Create → Database**. Name it `interview_friend` and save.

## 2. Connect this project to PostgreSQL

Open `backened/.env` and set these values. Replace `YOUR_POSTGRES_PASSWORD` with the password chosen during PostgreSQL installation.

```env
PORT=5001
DATABASE_URL="postgresql://postgres:YOUR_POSTGRES_PASSWORD@localhost:5432/interview_friend?schema=public"
JWT_SECRET="replace-this-with-a-long-random-secret"
GEMINI_API_KEY=""
GEMMA_MODEL="gemini-2.5-flash"
```

Then open a PowerShell terminal in `backened` and run:

```powershell
npx prisma generate
npx prisma db push
npm start
```

`prisma db push` creates or updates the `User`, `RoleTrack`, `Interview`, and `Progress` tables.

## 3. Confirm registered users are stored

1. Create an account through the website.
2. In pgAdmin, select the `interview_friend` database.
3. Open **Tools → Query Tool** and run:

```sql
SELECT id, name, email, role, "createdAt"
FROM "User"
ORDER BY "createdAt" DESC;
```

You should see the account email. Passwords are intentionally stored as bcrypt hashes, never readable plain text.

## 4. Add Gemini AI

1. Open Google AI Studio: https://aistudio.google.com/app/apikey
2. Create an API key in your own Google project.
3. Paste it into `backened/.env` as `GEMINI_API_KEY`.
4. Set `GEMMA_MODEL="gemini-2.5-flash"`. Do not use made-up model names such as `gemini-3.6-flash`.
5. Stop and restart the backend with `npm start`.

Test it locally without printing the key:

```powershell
node -e "fetch('http://localhost:5001/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:'Explain REST APIs in one sentence'})}).then(async r=>console.log(r.status,await r.text()))"
```

If the response has `source: "local"`, the key or access to Gemini is not working. If the response contains a generated answer without `source: "local"`, Gemini is connected.

## Optional: free local AI with Ollama

If you do not want to use a paid/cloud API, install Ollama from https://ollama.com/download, then run:

```powershell
ollama pull llama3.2:3b
```

Add this to `backened/.env`, then restart `npm start`:

```env
OLLAMA_BASE_URL="http://127.0.0.1:11434"
OLLAMA_MODEL="llama3.2:3b"
```

Keep Ollama running. The floating **Ask AI** chat will then use the local model without an API key. It needs several GB of disk space and works best with adequate RAM.

Never commit `.env`, API keys, or database passwords to GitHub.
