# Next.js Warm-up

Lihtne Next.js App Routeri tutvustusprojekt.

## Käivitamine

```bash
npm install
npm run dev
```

Ava brauseris `http://localhost:3000`.

---

## Õpitu kokkuvõte (Küsimused ja vastused)

### 1. Mida pakub Next.js lisaks tavalisele Reactile?
Next.js pakub täislahendust (full-stack framework): sisseehitatud failipõhine marsruutimine (App Router), serveripoolne renderdamine (Server Components), optimeeritud ehitamine ja võimalus luua API otspunkte samas projektis ilma eraldi Expressi serverita.

### 2. Miks vajab Counter komponent 'use client' direktiivi?
Next.js App Routeris on komponendid vaikimisi Server Components. Kuna `Counter` kasutab brauseripoolset interaktiivsust ja olekut (`useState`, `onClick`), peab selle selgesõnaliselt deklareerima kliendikomponendina (`'use client'`).

### 3. Kus käitatakse faili app/api/message/route.js kood?
See kood käivitatakse ainult serveris (Node.js keskkonnas), mitte kasutaja veebibrauseris.

### 4. Kuidas sarnaneb see otspunkt Expressi marsruudiga?
Mõlemad võtavad vastu HTTP päringu (antud juhul `GET`) ja tagastavad JSON-vastuse koos staatuskoodiga. Erinevus on selles, et Next.js-is vastab funktsiooni nimi HTTP meetodile (`export async function GET()`) ja eraldi serverit pole vaja käivitada.

### 5. Miks peavad saladused jääma serverisse?
Kõik brauserisse (kliendile) saadetud kood ja muutujad on kasutajale `DevTools` kaudu nähtavad. Salajased võtmed ja paroolid serveris hoides välistame nende lekkimise avalikkusele.

---

## Supabase ettevalmistus

* **Kood brauseris:** Kasutajaliides, vormid, nuppude vajutused ja avalikud päringud.
* **Kood serveris:** Andmebaasiga suhtlemine salajaste võtmetega, tundlik äriloogika ja andmete valideerimine.
* **Miks on vaja andmebaasi õiguste reegleid (RLS - Row Level Security)?** Sest ilma nendeta saaks suvaline kasutaja teiste inimeste andmeid lugeda või muuta, saates päringu otse andmebaasi API-le.
* **Miks nupu peitmine ei kaitse otspunkti?** Nupu peitmine on ainult visuaalne. Igaüks saab saata HTTP päringu (nt `curl` või Postmaniga) otse API aadressile, mistõttu peab autoriseerimist kontrollima alati serveris.
